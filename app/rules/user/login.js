'use strict';

const rule = {
  email: [
    { required: true, message: '邮箱不能为空' },
    { type: 'email', message: '邮箱格式不正确' },
  ],
  password: [
    { required: true, message: '密码不能为空' },
    { type: 'string', message: '密码字段需要是字符串' },
  ],
};

module.exports = rule;
