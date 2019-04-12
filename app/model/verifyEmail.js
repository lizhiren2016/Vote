'use strict';

module.exports = app => {
  const { STRING, UUID, UUIDV1,DATE,NOW } = app.Sequelize;

  const VerifyEmail = app.model.define('verifyEmail', {
    id: {
      type: UUID,
      defaultValue: UUIDV1,
      primaryKey: true,
      comment: 'ID',
    },
    code: {
      type: STRING,
      unique: false,
      comment: '使用邮箱作为账号',
    },
    email: {
      type: STRING,
      unique: false,
      comment: '使用邮箱作为账号',
    },
  });
  return VerifyEmail;
};
