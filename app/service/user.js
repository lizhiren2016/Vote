'use strict';
const Service = require('egg').Service;

class UserService extends Service {
  /**
   * 根据ID删除用户
   * @param id {UUID} 用户ID
   * @return {Promise<*>}
   */
  async delUserById(id) {
    const { ctx } = this;
    const cuser = await ctx.model.User.findOne({ where: { id } });
    if (!cuser) {
      return { code: 1001, message: '用户不存在' };
    }
    return await ctx.model.User.destroy({
      where: { id },
    })
      .then(async (res) => {
        return { code: 200, message: '删除成功' };
      })
      .catch((err) => {
        ctx.throw(err);
      });
  }

  /**
   * 添加员工
   * @param email {String} 邮箱
   * @param password  {String} 密码
   * @param name  {String} 昵称
   * @return {Promise<R | R>}
   */
  async addStaff(email, password, name) {
    const { ctx } = this;
    return await ctx.model.User.findOrCreate({
      where: {
        email: email,
      },
      defaults: { email, password, name, role: 2 },
    })
      .spread((cuser, created) => {
        if (!created) {
          return { code: 1001, message: '用户已存在' };
        }
        return { code: 200, message: '添加成功', data: cuser };
      })
      .catch((err) => {
        ctx.throw(err);
      });
  }

  /**
   * 查找用户是否已注册（用户在注册输入邮箱后触发校验）
   * @param email {String} 邮箱
   * @return {Promise<*>}
   */
  async findUserByAccount(email) {
    const { ctx } = this;
    return await ctx.model.User.findOne({ where: { email } })
      .then((user) => {
        if (!user) {
          return { code: 200, message: '该邮箱可用', data: user };
        }
        return { code: 1001, message: '该邮箱已注册' };
      })
      .catch((err) => {
        ctx.throw(err);
      });
  }

  /**
   * 注册（注册成功后返回Token）
   * @param email {String} 邮箱
   * @param password  {String} 密码
   * @param name  {String} 昵称
   * @return {Promise<R | R>}
   */
  async register(email, password, name) {
    const { ctx, app } = this;
    return await ctx.model.User.findOrCreate({
      where: {
        email,
      },
      defaults: { email, password, name },
    })
      .spread(async (cuser, created) => {
        if (!created) {
          return { code: 1001, message: '该邮箱已注册' };
        }
        //调用事先在helper写好的方法
        const token = ctx.helper.loginToken({ uid: cuser.dataValues.id, urole: cuser.dataValues.role }, 7200); // token生成
        await app.redis.set(cuser.dataValues.id + cuser.dataValues.role, token, 'ex', 7200); //保存用户token
        return { code: 200, message: '注册成功', data: token };
      })
      .catch((err) => {
        ctx.throw(err);
      });
  }

  /**
   * 登陆 (登陆成功后返回Token)
   * @param email {String} 邮箱
   * @param password {String} 密码
   * @return {Promise<R | R>}
   */
  async login(email, password) {
    const { ctx, app } = this;
    return await ctx.model.User.findOne({
      where: { email, password },
    })
      .then(async (user) => {
        if (!user) {
          return { code: 1001, message: '账号密码不匹配' };
        }
        //调用事先在helper写好的方法
        const token = ctx.helper.loginToken({ uid: user.dataValues.id, urole: user.dataValues.role }, 7200); // token生成
        await app.redis.set(user.dataValues.id + user.dataValues.role, token, 'ex', 7200); //保存用户token
        return { code: 200, message: '登陆成功', data: { token: token } };
      })
      .catch((err) => {
        ctx.throw(err);
      });
  }
}

module.exports = UserService;
