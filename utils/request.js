'use strict';
const request = require('request');

module.exports = {
  request(options) {
    return new Promise(async (resolve, reject) => {
      await request(options, function(error, response, body) {
        if (error) throw new Error(error);
        resolve(body);
      });
    });
  },
};
