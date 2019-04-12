'use strict';

const Controller = require('egg').Controller;

class ErrorController extends Controller {

  async activating() {
    const { ctx } = this;
    ctx.body = '非常抱歉，你的激活邮件出了点问题....';
  }

}

module.exports = ErrorController;
