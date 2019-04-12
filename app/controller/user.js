'use strict';

const Controller = require('egg').Controller;
const md5 = require('MD5');

class UserController extends Controller {
  //根据ID删除用户
  async delUserById() {
    const { ctx, service } = this;
    let { id } = ctx.request.body;
    const validateResult = await ctx.validate('user.del', { id });
    if (!validateResult) {
      return;
    }
    const { urole, uid } = ctx.locals;
    if (urole !== 2) { //验证工作人员的权限，也可以在service层操作
      return ctx.returnBody(200, '没有权限', 403);
    }
    if (uid === id) { //不能自己删除自己
      return ctx.returnBody(200, '不能删除该用户', 1001);
    }
    const { message, code, data } = await service.user.delUserById(id);
    ctx.returnBody(200, message, code, data);
  }

  //添加工作人员
  async addStaff() {
    const { ctx, app, service } = this;
    let { email, password, name } = ctx.request.body;
    const validateResult = await ctx.validate('user.register', { email, password, name });
    if (!validateResult) {
      return;
    }
    //MD5加盐
    password = md5(`${password}${app.config.salt}`)
      .toUpperCase();
    const { message, code, data } = await service.user.addStaff(email, password, name);
    ctx.returnBody(200, message, code, data);
  }

  //查找用户是否已注册（用户在注册输入邮箱后触发校验）
  async findUserByAccount() {
    const { ctx, service } = this;
    let { email } = ctx.request.body;
    const validateResult = await ctx.validate('user.findUserByAccount', { email });
    if (!validateResult) {
      return;
    }
    const { message, code, data } = await service.user.findUserByAccount(email);
    ctx.returnBody(200, message, code, data);
  }

  //注册（注册成功后返回Token）
  async register() {
    const { ctx, service, app } = this;
    let { email, password, name } = ctx.request.body;
    //校验参数
    const validateResult = await ctx.validate('user.register', { email, password, name });
    if (!validateResult) {
      return;
    }
    //MD5加盐
    password = md5(`${password}${app.config.salt}`)
      .toUpperCase();
    //创建新用户
    const { message, code, data } = await service.user.register(email, password, name);
    ctx.returnBody(200, message, code, data);
  }

  //登陆 (登陆成功后返回Token)
  async login() {
    const { ctx, app, service } = this;
    let { email, password } = ctx.request.body;
    const validateResult = await ctx.validate('user.login', { email, password });
    if (!validateResult) {
      return;
    }
    password = md5(`${password}${app.config.salt}`)
      .toUpperCase();
    const { message, code, data } = await service.user.login(email, password);
    ctx.returnBody(200, message, code, data);
  }
}

module.exports = UserController;
