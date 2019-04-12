'use strict';

/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
  const { router, controller } = app;
  router.get('/', controller.home.index);
  router.get('/error/activating', controller.error.activating);

  router.post('/api/v1/user/register', controller.user.register);//用户注册
  router.post('/api/v1/user/login', controller.user.login);//登陆
  router.post('/api/v1/user/check_validity', controller.user.findUserByAccount);//检查账号的有效性
  router.post('/api/v1/user/add', controller.user.addStaff);//添加员工
  router.delete('/api/v1/user/del', controller.user.delUserById);//通过ID删除用户，工作人员才有权限

  router.post('/api/v1/email/send', controller.email.sendMail);//发送邮件验证
  router.get('/api/v1/email/activating', controller.email.activating);//验证邮件

  router.post('/api/v1/election/add', controller.election.add);//添加新选举
  router.put('/api/v1/election/update', controller.election.startOrEnd);//开启和结束选举
  router.get('/api/v1/election/get', controller.election.getElection);//获取选举列表或单条的投票详情

  router.post('/api/v1/candidate/add', controller.candidate.add);//添加候选人
  router.delete('/api/v1/candidate/del', controller.candidate.del);//删除指定选举下的候选人

  router.post('/api/v1/vote/add', controller.vote.add);//发起一次投票
};
