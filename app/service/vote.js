'use strict';
const Service = require('egg').Service;

class VoteService extends Service {
  /**
   * 添加投票
   * @param electionId {String} 选举ID
   * @param uid {UUID} 用户ID
   * @param candidates {Array} 候选人集合
   * @return {Promise<*>}
   */
  async add(electionId, uid, candidates) {
    const { ctx } = this;
    const cuser = await ctx.model.User.findOne({ where: { id: uid } });
    if (!cuser) {
      return { code: 1001, message: '用户不存在，请先注册' };
    }
    if (!cuser.dataValues.code) {
      return { code: 1001, message: '邮箱未验证，请先认证激活' };
    }
    const celection = await ctx.model.Election.findOne({ where: { id: electionId } });
    if (!celection) {
      return { code: 1001, message: '选举不存在' };
    }
    if (celection.dataValues.state !== 2) { //未开启和已结束的不能进行投票
      return { code: 1001, message: '抱歉，选举只有开启时才能投票' };
    }
    const cvote = await ctx.model.Vote.findOne({ where: { cuserId: uid } });
    if (cvote) {
      return { code: 1001, message: '每个有效邮箱只能投票一次' };
    }
    const ccandidates = await ctx.model.Candidate.findAll({ where: { electionId } });
    if (ccandidates.length < 1) { //没有候选人则停止往下执行
      return { code: 1001, message: '该选举下未找到候选人' };
    }
    if (candidates.length < 2) {
      return { code: 1001, message: '最低投票的人数不能少于2人' };
    }
    if (candidates.length > 5) {
      return { code: 1001, message: '最高投票的人数不能大于5人' };
    }
    if (candidates.length > ccandidates.length / 2) {
      return { code: 1001, message: '最高投票的人数不能大于候选人的一半' };
    }
    const tags = await Promise.all(candidates.map(async (m) => {
      if (!m.id) { //如果列表中存在无效数据，则停止操作
        return { tag: 1 };
      }
      return { tag: 2 };
    }));
    if (tags.find(t => t.tag === 1)) {
      return { code: 1001, message: '存在无效的候选人' };
    }
    return await Promise.all(candidates.map(async (m) => {
      m.cuserId = uid;
      m.electionId = electionId;
      m.candidateId = m.id;
      await ctx.model.Vote.create(m);
    }))
      .then(res => {
        return { code: 200, message: '投票成功' };
      })
      .catch(err => {
        ctx.throw(err);
      });
  }
}

module.exports = VoteService;
