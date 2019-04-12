'use strict';

module.exports = app => {
  const { STRING, UUID, UUIDV1,INTEGER } = app.Sequelize;

  const User = app.model.define('user', {
    id: {
      type: UUID,
      defaultValue: UUIDV1,
      primaryKey: true,
      comment: 'ID',
    },
    name:{
      type: STRING,
      comment: '昵称',
    },
    email: {
      type: STRING,
      unique: false,
      comment: '使用邮箱作为登录名',
    },
    role: {
      type: INTEGER,
      comment: '角色 1：普通用户 2：工作人员',
      defaultValue: 1,
    },
    password: {
      type: STRING,
      comment: 'MD5加密密码',
    },
    code:{
      type: STRING,
      comment: '邮件验证后保存的授权码',
    },
  });
  return User;
};
