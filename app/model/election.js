'use strict';

module.exports = app => {
  const { STRING, UUID, UUIDV1, INTEGER } = app.Sequelize;

  const Election = app.model.define('election', {
    id: {
      type: UUID,
      defaultValue: UUIDV1,
      primaryKey: true,
      comment: 'ID',
    },
    title: {
      type: STRING,
      comment: '标题',
    },
    state: {
      type: INTEGER,
      comment: '状态 1：未开始 2：开始 3：结束',
      defaultValue: 1,
    },
  });
  return Election;
};
