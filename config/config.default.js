'use strict';

/**
 * @param {Egg.EggAppInfo} appInfo app info
 */
module.exports = appInfo => {
  /**
   * built-in config
   * @type {Egg.EggAppConfig}
   **/
  const config = {};

  // use for cookie sign key, should change to your own and keep security
  config.keys = appInfo.name + '_1554805581933_7851';

  // add your middleware config here
  config.middleware = [ 'jwt' ];

  // add your user config here
  const userConfig = {
    // myAppName: 'egg',
  };

  config.host = 'http://localhost:7001';

  config.salt = '1ck12b13k1jmjxrg1h0129h2lj';

  config.jwt = {
    enable: true,
    ignore: [ '/', '/error/activating', '/api/v1/email/activating', '/api/v1/user/register', '/api/v1/user/login', '/api/v1/user/check_validity' ], // 哪些请求不需要认证
  };

  config.validatePlus = {
    resolveError(ctx, errors) {
      if (errors.length) {
        ctx.type = 'json';
        ctx.status = 400;
        ctx.body = {
          code: 400,
          error: errors,
          message: '参数错误',
        };
      }
    },
  };

  config.security = {
    csrf: false,
  };

  config.sequelize = {
    dialect: 'mysql',
    host: 'localhost',
    port: 32769,
    database: 'vote',
    username: 'root',
    password: '123456',
    define: {
      charset: 'utf8',
    },
    timezone: '+08:00',
  };

  config.redis = {
    client: {
      port: 32768,
      host: 'localhost',
      password: '',
      db: 0,
    },
  };

  return {
    ...config,
    ...userConfig,
  };
};
