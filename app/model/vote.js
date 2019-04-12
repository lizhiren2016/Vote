'use strict';

module.exports = app => {
  const { STRING, UUID, UUIDV1 } = app.Sequelize;

  const Vote = app.model.define('vote', {
    id: {
      type: UUID,
      defaultValue: UUIDV1,
      primaryKey: true,
      comment: 'ID',
    },
    describe: {
      type: STRING,
      comment: '投票理由/描述',
    },
  });
  return Vote;
};
