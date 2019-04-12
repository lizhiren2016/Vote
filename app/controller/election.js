'use strict';

const Controller = require('egg').Controller;

class ElectionController extends Controller {
  //启动或结束选举
  async startOrEnd() {
    const { ctx, service } = this;
    let { id, state } = ctx.request.body;
    const validateResult = await ctx.validate('election.startOrEnd', { id, state });
    if (!validateResult) {
      return;
    }
    const { urole } = ctx.locals;
    if (urole !== 2) { //验证工作人员的权限，也可以在service层操作
      return ctx.returnBody(200, '没有权限', 403);
    }
    const { message, code, data } = await service.election.startOrEnd(id, state);
    ctx.returnBody(200, message, code, data);
  }

  //获取选举列表或单条的投票详情
  async getElection() {
    const { ctx, service } = this;
    let { id } = ctx.query;
    const { urole } = ctx.locals;
    if (urole !== 2) { //验证工作人员的权限，也可以在service层操作
      return ctx.returnBody(200, '没有权限', 403);
    }
    const { message, code, data } = await service.election.getElection(id);
    ctx.returnBody(200, message, code, data);
  }

  //添加新选举
  async add() {
    const { ctx, service } = this;
    let { title } = ctx.request.body;
    const validateResult = await ctx.validate('election.add', { title });
    if (!validateResult) {
      return;
    }
    const { urole } = ctx.locals;
    if (urole !== 2) { //验证工作人员的权限，也可以在service层操作
      return ctx.returnBody(200, '没有权限', 403);
    }
    const { message, code, data } = await service.election.add(title);
    ctx.returnBody(200, message, code, data);
  }
}

module.exports = ElectionController;
