'use strict';

module.exports = app => {
  const { STRING, UUID, UUIDV1 } = app.Sequelize;

  const Candidate = app.model.define('candidate', {
    id: {
      type: UUID,
      defaultValue: UUIDV1,
      primaryKey: true,
      comment: 'ID',
    },
    name: {
      type: STRING,
      comment: '姓名',
    },
  });
  return Candidate;
};
