'use strict';

const rule = {
  state: [
    { required: true, message: 'state不能为空' },
    { type: 'number', message: 'state格式不正确' },
  ],
};

module.exports = rule;
