'use strict';

const Controller = require('egg').Controller;

class ElectionController extends Controller {
  //删除指定选举下的候选人
  async del() {
    const { ctx, service } = this;
    let { electionId, id } = ctx.request.body;
    const validateResult = await ctx.validate('candidate.del', { id, electionId });
    if (!validateResult) {
      return;
    }
    const { urole } = ctx.locals;
    if (urole !== 2) { //验证工作人员的权限，也可以在service层操作
      return ctx.returnBody(200, '没有权限', 403);
    }
    const { message, code, data } = await service.candidate.delCandidateById(id, electionId);
    ctx.returnBody(200, message, code, data);
  }

  //添加候选人
  async add() {
    const { ctx, service } = this;
    let { name, electionId } = ctx.request.body;
    const validateResult = await ctx.validate('candidate.add', { name, electionId });
    if (!validateResult) {
      return;
    }
    const { urole } = ctx.locals;
    if (urole !== 2) { //验证工作人员的权限，也可以在service层操作
      return ctx.returnBody(200, '没有权限', 403);
    }
    const { message, code, data } = await service.candidate.add(name, electionId);
    ctx.returnBody(200, message, code, data);
  }
}

module.exports = ElectionController;
