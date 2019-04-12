'use strict';

const rule = {
  username: [
    { required: true, message: '邮箱不能为空' },
    { type: 'email', message: '邮箱格式不正确' },
  ],
  inviteCode: [
    { required: true, message: '激活码不能为空' },
    { type: 'string', message: '激活码字段需要是字符串' },
  ],
};

module.exports = rule;
