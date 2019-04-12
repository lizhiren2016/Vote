'use strict';
const nodemailer = require('nodemailer');
const { mailAccount } = require('../config/server');

/**
 * 邮件注册发送配置
 */
let transport = nodemailer.createTransport({
  // host: 'smtp.163.com',
  service: 'qq',
  secureConnection: true, //是否使用安全连接，对https协议的
  port: 465,
  auth: {
    user: mailAccount.user, //开启SMTP的邮箱，有用发送邮件
    pass: mailAccount.pass, //授权码
  },
});

module.exports = function(mail) {
  return new Promise(async (resolve, reject) => {
    transport.sendMail(mail, function(error, info) {
      if (error) {
        console.log(error);
        resolve({ code: 1001, message: JSON.stringify(error) });
        return;
      }
      console.log('mail sent', info.response);
      resolve({ code: 200, message: 'ok' });
    });
  });
};
