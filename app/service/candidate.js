'use strict';
const Service = require('egg').Service;

class CandidateService extends Service {
  /**
   * 删除指定选举下的候选人
   * @param id
   * @param electionId
   * @return {Promise<R | R>}
   */
  async delCandidateById(id, electionId) {
    const { ctx } = this;
    const ccandidate = await ctx.model.Candidate.findOne({ where: { id, electionId } });
    if (!ccandidate) { //没有找到候选人记录则不往下执行
      return { code: 1001, message: '当前候选人不存在' };
    }
    const celection = await ctx.model.Election.findOne({ where: { id: electionId } });
    if (!celection) { //没有找到选举记录则不往下执行
      return { code: 1001, message: '当前选举不存在' };
    }
    if (celection.dataValues.state !== 1) {
      return { code: 1001, message: '添加失败，只能在投票开启前操作' };
    }
    return await ctx.model.Candidate.destroy({ where: { id, electionId } })
      .then((result) => {
        return { code: 200, message: '删除成功' };
      })
      .catch((err) => {
        ctx.throw(err);
      });
  }

  /**
   * 添加候选人
   * @param name {String} 名称
   * @param electionId {String} 选举ID
   * @return {Promise<R | R>}
   */
  async add(name, electionId) {
    const { ctx } = this;
    const election = await ctx.model.Election.findOne({ whrer: { id: electionId } });
    if (!election) {
      return { code: 1001, message: '当前选举不存在' };
    }
    if (election.dataValues.state !== 1) {
      return { code: 1001, message: '添加失败，只能在投票开启前操作' };
    }
    return await ctx.model.Candidate.findOrCreate({
      where: {
        name,
        electionId,
      },
      defaults: { name, electionId },
    })
      .spread((ccandidate, created) => {
        if (!created) {
          return { code: 1001, message: '添加失败，候选人已存在' };
        }
        return { code: 200, message: 'ok', data: ccandidate };
      })
      .catch((err) => {
        ctx.throw(err);
      });
  }
}

module.exports = CandidateService;
