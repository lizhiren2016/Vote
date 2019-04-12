'use strict';

const rule = {
  id: [
    { required: true, message: 'id不能为空' },
    { type: 'string', message: 'id格式不正确' },
  ],
  electionId: [
    { required: true, message: 'electionId不能为空' },
    { type: 'string', message: 'electionId格式不正确' },
  ],
};

module.exports = rule;
