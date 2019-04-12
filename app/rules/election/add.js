'use strict';

const rule = {
  title: [
    { required: true, message: '标题不能为空' },
    { type: 'string', message: '标题格式不正确' },
  ],
};

module.exports = rule;
