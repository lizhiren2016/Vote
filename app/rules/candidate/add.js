'use strict';

const rule = {
  name: [
    { required: true, message: '名称不能为空' },
    { type: 'string', message: '名称格式不正确' },
  ],
  electionId: [
    { required: true, message: 'electionId不能为空' },
    { type: 'string', message: 'electionId格式不正确' },
  ],
};

module.exports = rule;
