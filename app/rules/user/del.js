'use strict';

const rule = {
  id: [
    { required: true, message: '参数不能为空' },
    { type: 'string', message: '参数字段需要是字符串' },
  ],
};

module.exports = rule;
