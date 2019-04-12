'use strict';
const assert = require('assert');

module.exports = (app) => {
  app.beforeStart(async function() {
    app.model.Election.hasMany(app.model.Candidate, { foreignKey: 'electionId', targetKey: 'id' });
    app.model.Election.hasMany(app.model.Vote, { foreignKey: 'electionId', targetKey: 'id' });
    app.model.Candidate.hasMany(app.model.Vote, { foreignKey: 'candidateId', targetKey: 'id' });
    app.model.User.hasMany(app.model.Vote, { foreignKey: 'cuserId', targetKey: 'id' });
    await app.model.sync();
  });
};
