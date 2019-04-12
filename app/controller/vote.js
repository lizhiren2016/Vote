'use strict';

const Controller = require('egg').Controller;

class VoteController extends Controller {
  //发起一次投票
  async add() {
    const { ctx, service } = this;
    let { electionId, candidates } = ctx.request.body;
    const validateResult = await ctx.validate('vote.add', { electionId, candidates });
    if (!validateResult) {
      return;
    }
    const { uid } = ctx.locals;
    const { message, code, data } = await service.vote.add(electionId, uid, candidates);
    ctx.returnBody(200, message, code, data);

  }
}

module.exports = VoteController;
