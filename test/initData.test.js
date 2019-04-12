'use strict';

const { app } = require('egg-mock/bootstrap');
const md5 = require('MD5');

const staffs = [
  { name: '工作人员1', email: '787365405@qq.com', role: 2, password: 'Aa11111111' },
];

const elections = [
  { id: 'election01', title: '选举1' },
];

const candidates = [
  { id: 'candidate01', name: '候选人1', electionId: 'election01' },
  { id: 'candidate02', name: '候选人2', electionId: 'election01' },
  { id: 'candidate03', name: '候选人3', electionId: 'election01' },
  { id: 'candidate04', name: '候选人4', electionId: 'election01' },
  { id: 'candidate05', name: '候选人5', electionId: 'election01' },
  { id: 'candidate06', name: '候选人6', electionId: 'election01' },
  { id: 'candidate07', name: '候选人7', electionId: 'election01' },
  { id: 'candidate08', name: '候选人8', electionId: 'election01' },
  { id: 'candidate09', name: '候选人9', electionId: 'election01' },
  { id: 'candidate10', name: '候选人10', electionId: 'election01' },
];

describe('初始化测试数据', () => {
  it('工作人员', async () => {
    await Promise.all(staffs.map(async (s) => {
      s.password = md5(`${s.password}${app.config.salt}`)
        .toUpperCase();
      await app.model.User.create(s);
    }));
  });
  it('选举列表', async () => {
    await Promise.all(elections.map(async (e) => {
      await app.model.Election.create(e);
    }));
  });
  it('候选人列表', async () => {
    await Promise.all(candidates.map(async (c) => {
      await app.model.Candidate.create(c);
    }));
  });
});
