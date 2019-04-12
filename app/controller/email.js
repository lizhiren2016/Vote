'use strict';

const Controller = require('egg').Controller;
const md5 = require('MD5');

class EmailController extends Controller {
  //邮件认证
  async activating() {
    const { ctx, service } = this;
    let { username, inviteCode } = ctx.query;
    const validateResult = await ctx.validate('email.activating', { username, inviteCode });
    if (!validateResult) { //验证失败就没必要往下执行了，返回错误码到前端去处理或者后端进行重定向，这里随便举个例子
      ctx.redirect('/error/activating');
      return;
    }
    const { code, message } = await service.email.activating(username, inviteCode);//验证失败,返回错误码到前端去处理或者后端进行重定向
    ctx.returnBody(200, message, code);
  }

  //发送邮箱验证
  async sendMail() {
    const { ctx, service } = this;
    let { email } = ctx.request.body;
    const validateResult = await ctx.validate('email.send', { email });
    if (!validateResult) {
      return;
    }
    const { code, message } = await service.email.send(email);
    ctx.returnBody(200, message, code);
  }
}

module.exports = EmailController;
