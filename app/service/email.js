'use strict';
const Service = require('egg').Service;
const { mailAccount } = require('../../config/server');
const nodemailer = require('../../utils/nodemailer');

class EmailService extends Service {
  /**
   * 认证邮箱
   * @param email {String} 邮箱
   * @param code {String} 激活码
   * @return {Promise<*>}
   */
  async activating(email, code) {
    const cuser = await this.ctx.model.User.findOne({ where: { email } });
    if (!cuser) {
      return { code: 1001, message: '该邮箱未注册' };
    }
    if (cuser.dataValues.code) {
      return { code: 1001, message: '邮箱已认证' };
    }
    const cemail = await this.ctx.model.VerifyEmail.findOne({ where: { email } });
    if (!cemail) {
      return { code: 1001, message: '认证失败' };
    }
    if (cemail.dataValues.code === code) {
      let currentTime = (new Date()).getTime();
      let beginTime = (new Date(cemail.dataValues.updatedAt)).getTime();
      let total = (currentTime - beginTime) / 1000;
      let day = parseInt(total / (24 * 60 * 60));//计算整数天数
      if (day >= 2) { //超过48小时
        return { code: 1001, message: '认证已过期' };
      }
      const uuser = await this.ctx.model.User.update({ code }, { where: { email } });
      if (uuser[ 0 ] !== 1) {
        return { code: 1001, message: '认证失败' };
      }
      return { code: 200, message: '认证成功' };
    }
    return { code: 1001, message: '激活码无效' };
  }

  /**
   * 发送认证邮件
   * @param email {String} 邮箱
   * @return {Promise<*>}
   */
  async send(email) {
    const { ctx, app } = this;
    //判断是否已注册
    const cuser = await ctx.model.User.findOne({ where: { email } });
    if (!cuser) { //未在系统中注册过的邮箱不能发送验证操作
      return { code: 1001, message: '该邮箱未注册' };
    }
    if (cuser.dataValues.code) {
      return { code: 1001, message: '该邮箱已认证' };
    }
    //已注册
    const verifyCode = await this.createSixNum();
    const url = app.config.host + '/api/v1/email/activating?username=' + email + '&inviteCode=' + verifyCode;
    let mail = {
      from: mailAccount.user,
      to: email,
      subject: '一份来自认证的邮件',
      html: '<b>点击以下链接进行激活</b><br/><a href=' + url + '>' + url + '</a>',
    };
    const { code } = await nodemailer(mail);
    if (code !== 200) {
      return { code: code, message: '发送邮件失败' };
    }
    const again = await ctx.model.VerifyEmail.findOne({ where: { email } });
    //判定邮箱是否为第一次发送还是多次发送验证
    if (!again) {
      return await this.create(email, verifyCode);
    }
    return await this.update(again.dataValues.id, verifyCode);
  }

  /**
   * 保存已发送的邮件激活码
   * @param email {String} 邮箱
   * @param code {String} 激活码
   * @return {Promise<void>}
   */
  async create(email, code) {
    const { ctx } = this;
    return await ctx.model.VerifyEmail.create({ email, code })
      .then((res) => {
        if (!res) {
          return { code: 1001, message: '保存邮件激活失败' };
        }
        return { code: 200, message: '发送成功', data: res };
      })
      .catch((err) => {
        ctx.throw(err);
      });
  }

  /**
   * 更新邮件激活码
   * @param _id {UUID} ID
   * @param code {String} 激活码
   * @return {Promise<void>}
   */
  async update(_id, code) {
    const { ctx } = this;
    return await ctx.model.VerifyEmail.update({ code }, { where: { id: _id } })
      .then((res) => {
        if (res[ 0 ] !== 1) {
          return { code: 1001, message: '保存邮件激活失败' };
        }
        return { code: 200, message: '发送成功', data: res };
      })
      .catch((err) => {
        ctx.throw(err);
      });
  }

  //生成随机码
  createSixNum() {
    var Num = '';
    for (var i = 0; i < 6; i++) {
      Num += Math.floor(Math.random() * 10);
    }
    return Num;
  }

}

module.exports = EmailService;
