'use strict';

/** @type Egg.EggPlugin */
module.exports = {
  validatePlus: {
    enable: true,
    package: 'egg-validate-plus',
  },

  sequelize: {
    enable: true,
    package: 'egg-sequelize',
  },

  redis: {
    enable: true,
    package: 'egg-redis',
  },
};
