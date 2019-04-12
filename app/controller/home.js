'use strict';

const Controller = require('egg').Controller;

class HomeController extends Controller {
  async index() {
    const { ctx } = this;
    ctx.body = 'hi, 欢迎来到选举投票系统';
  }
}

module.exports = HomeController;
