'use strict';
const Service = require('egg').Service;

class ElectionService extends Service {
  /**
   * 启动或结束选举
   * @param id {UUID} 选举ID
   * @param state {number} 状态 1：未开始 2：开启 3：结束
   * @return {Promise<*>}
   */
  async startOrEnd(id, state) {
    const { ctx } = this;
    let election = await ctx.model.Election.findOne({ where: { id } });
    if (!election) {
      return { code: 1001, message: '选举不存在' };
    }
    const res = await ctx.model.Election.update({ state }, { where: { id } });
    if (res[ 0 ] !== 1) {
      return { code: 1001, message: '操作失败' };
    }
    return { code: 200, message: '操作成功' };
  }

  /**
   * 获取所有选举列表或单条
   * @param id {String} 选举ID
   * @return {Promise<R | R>}
   */
  async getElection(id) {
    if (id) {
      return await this.getElectionById(id);
    }
    return await this.getElections();
  }

  /**
   * 获取所有列表
   * @return {Promise<*>}
   */
  async getElections() {
    const { ctx } = this;
    let elections = await ctx.model.Election.findAll();
    if (elections.length < 0) {
      return { code: 200, message: 'ok', data: elections };
    }
    return await Promise.all(elections.map(async (m) => {
      const candidates = await ctx.model.Candidate.findAll({ where: { electionId: m.dataValues.id } });
      await Promise.all(candidates.map(async (c) => {
        const votes = await ctx.model.Vote.findAll({
          where: {
            electionId: m.dataValues.id,
            candidateId: c.dataValues.id,
          },
        });
        c.dataValues.voteNumTotal = votes.length;
      }));
      m.dataValues.candidates = candidates;
    }))
      .then(res => {
        return { code: 200, message: 'ok', data: elections };
      })
      .catch(err => {
        ctx.throw(err);
      });
  }

  /**
   * 通过ID获取
   * @param id {String} ID
   * @return {Promise<*>}
   */
  async getElectionById(id) {
    const { ctx } = this;
    let election = await ctx.model.Election.findOne({ where: { id } });
    if (!election) {
      return { code: 200, message: 'ok', data: election };
    }
    const candidates = await ctx.model.Candidate.findAll({ where: { electionId: id } });
    election.dataValues.candidates = candidates;
    return { code: 200, message: 'ok', data: election };
  }

  /**
   * 添加新选举
   * @param title {String} 选举标题
   * @return {Promise<R | R>}
   */
  async add(title) {
    const { ctx } = this;
    return await ctx.model.Election.create({ title })
      .then((celection) => {
        if (!celection) {
          return { code: 1001, message: '添加失败' };
        }
        return { code: 200, message: '添加成功', data: celection };
      })
      .catch((err) => {
        ctx.throw(err);
      });
  }
}

module.exports = ElectionService;
