'use strict';

const rule = {
  electionId: [
    { required: true, message: 'electionId不能为空' },
    { type: 'string', message: 'electionId格式不正确' },
  ],
  candidates: [
    { required: true, message: 'candidates不能为空' },
    { type: 'array', message: 'candidates格式不正确' },
  ],
};

module.exports = rule;
