'use strict';

module.exports = {
  returnBody(status, message,code, data = null) {
    this.status = status;
    this.body = {
      message,
      code,
      data,
    };
  },
};
