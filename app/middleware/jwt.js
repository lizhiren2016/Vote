'use strict';
const fs = require('fs');
const path = require('path');
const jwt = require('jsonwebtoken');

module.exports = (options, app) => {
  return async function userInterceptor(ctx, next) {
    let authToken = ctx.header.authorization; // 获取header里的authorization
    if (authToken) {
      authToken = authToken.substring(7);
      const res = verifyToken(authToken); // 解密获取的Token
      if (res.uid && res.urole) {
        // 如果需要限制单端登陆或者使用过程中废止某个token，或者更改token的权限。也就是说，一旦 JWT 签发了，在到期之前就会始终有效
        // 此处使用redis进行保存
        const redis_token = await app.redis.get(res.uid + res.urole); // 获取保存的token
        if (authToken === redis_token) {
          ctx.locals.uid = res.uid;
          ctx.locals.urole = res.urole;
          await next();
        } else {
          ctx.body = { code: 2003, message: '您的账号已在其他地方登录' };
        }
      } else {
        ctx.body = { code: 2002, message: '登录状态已过期' };
      }
    } else {
      ctx.body = { code: 2001, message: '请登陆后再进行操作' };
    }
  };
};

// 解密，验证
function verifyToken(token) {
  const cert = fs.readFileSync(path.join(__dirname, '../public/rsa_public_key.pem')); // 公钥
  let res = '';
  try {
    const result = jwt.verify(token, cert, { algorithms: [ 'RS256' ] }) || {};
    const { exp } = result,
      current = Math.floor(Date.now() / 1000);
    if (current <= exp) res = result.data || {};
  } catch (e) {
    console.log(e);
  }
  return res;
}
