/* eslint-disable quote-props,indent */
'use strict';

const { app } = require('egg-mock/bootstrap');
const { request } = require('../utils/request');

describe('用户模块', () => {
  // it('检查账号的有效性', async () => {
  //   const user = {
  //     'email': '1042022100@qq.com',
  //   };
  //   const url = app.config.host + '/api/v1/user/check_validity';
  //   var options = {
  //     method: 'POST',
  //     url: url,
  //     headers:
  //       { 'Content-Type': 'application/json' },
  //     body: user,
  //     json: true,
  //   };
  //
  //   const res = await request(options);
  //   console.log(res);
  // });
  // it('注册', async () => {
  //   const user = {
  //     'email': '1042022100@qq.com',
  //     'password': 'Aa11111111',
  //     'name': '王小明',
  //   };
  //   const url = app.config.host + '/api/v1/user/register';
  //   var options = {
  //     method: 'POST',
  //     url: url,
  //     headers:
  //       { 'Content-Type': 'application/json' },
  //     body: user,
  //     json: true,
  //   };
  //
  //   const res = await request(options);
  //   console.log(res);
  // });
  // it('登陆', async () => {
  //   const user = {
  //     'email': '1042022100@qq.com',
  //     'password': 'Aa11111111',
  //   };
  //   const url = app.config.host + '/api/v1/user/login';
  //   var options = {
  //     method: 'POST',
  //     url: url,
  //     headers:
  //       { 'Content-Type': 'application/json' },
  //     body: user,
  //     json: true,
  //   };
  //
  //   const res = await request(options);
  //   console.log(res);
  // });
  // it('发送邮件认证', async () => {
  //   const data = {
  //     'email': '1042022100@qq.com',
  //   };
  //   const url = app.config.host + '/api/v1/email/send';
  //   var options = {
  //     method: 'POST',
  //     url: url,
  //     headers:
  //       {
  //         'Authorization': 'Bearer eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9.eyJkYXRhIjp7InVpZCI6IjBjZWMzMGQwLTVkM2ItMTFlOS1hYmYyLThiMTI2ZjhhMTE1ZCIsInVyb2xlIjoxfSwiZXhwIjoxNTU1MDkxNTgxLCJpYXQiOjE1NTUwODQzODF9.vJwoB3bKZna22ahziao1p2yq_Mev8VuseQsDSYRuk1KLL_EPYV7K9dG4ZV9c_T25TTn7xmCaiScJSAsS0MFg7nh8_MHFRfNpSI9_sTSudW6df10u3TVyyIFFETUlahzkLjnwEPSEiwWyZpSwGGDPCxRvqYUNpAjY4zoL8lGEolk',
  //         'Content-Type': 'application/json',
  //       },
  //     body: data,
  //     json: true,
  //   };
  //   const res = await request(options);
  //   console.log(res);
  // });
  // it('投票', async () => {
  //   const votes = {
  //     'electionId': 'election01',
  //     'candidates': [
  //       { 'id': 'candidate11', 'describe': '长得帅' },
  //       { 'id': 'candidate12', 'describe': '长得帅' },
  //       { 'id': 'candidate13', 'describe': '长得帅' },
  //       { 'id': 'candidate14', 'describe': '长得帅' },
  //       { 'id': 'candidate15', 'describe': '长得帅' },
  //     ],
  //   };
  //   const url = app.config.host + '/api/v1/vote/add';
  //   var options = {
  //     method: 'POST',
  //     url: url,
  //     headers:
  //       {
  //         'Authorization': 'Bearer eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9.eyJkYXRhIjp7InVpZCI6IjBjZWMzMGQwLTVkM2ItMTFlOS1hYmYyLThiMTI2ZjhhMTE1ZCIsInVyb2xlIjoxfSwiZXhwIjoxNTU1MDkxNTgxLCJpYXQiOjE1NTUwODQzODF9.vJwoB3bKZna22ahziao1p2yq_Mev8VuseQsDSYRuk1KLL_EPYV7K9dG4ZV9c_T25TTn7xmCaiScJSAsS0MFg7nh8_MHFRfNpSI9_sTSudW6df10u3TVyyIFFETUlahzkLjnwEPSEiwWyZpSwGGDPCxRvqYUNpAjY4zoL8lGEolk',
  //         'Content-Type': 'application/json',
  //       },
  //     body: votes,
  //     json: true,
  //   };
  //   const res = await request(options);
  //   console.log(res);
  // });
});

describe('工作人员模块', () => {
  // it('添加员工', async () => {
  //   const data = {
  //     'email': '1042022100@qq.com',
  //     'password': 'Aa11111111',
  //     'name': '王小明',
  //   };
  //   const url = app.config.host + '/api/v1/user/add';
  //   var options = {
  //     method: 'POST',
  //     url: url,
  //     headers:
  //       {
  //         'Authorization': 'Bearer eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9.eyJkYXRhIjp7InVpZCI6ImI4Yzk4NWYwLTVkMzctMTFlOS05ZGYyLTYxNjU0NTc1NjY0ZSIsInVyb2xlIjoyfSwiZXhwIjoxNTU1MDkwNzYwLCJpYXQiOjE1NTUwODM1NjB9.4x7Zy1oyev1ZPZTlkcgD2FA80Ft2V4Wa6aXPFECdnDOEU9oUwlZftfDaE5NpBkpyL6124g4fwE5p5UTGFT2z9z5sya9gAI2AqhIHtvJjIowOOZ4qeDyyCSU9nT5w5GjQRXhM7qnOVRb4hTI4nVhaM1WlnEY17gWaLVb86lrjBtg',
  //         'Content-Type': 'application/json',
  //       },
  //     body: data,
  //     json: true,
  //   };
  //   const res = await request(options);
  //   console.log(res);
  // });
  // it('删除员工', async () => {
  //   const data = {
  //     'id': 'a55f8350-5d39-11e9-abf2-8b126f8a115d',
  //   };
  //   const url = app.config.host + '/api/v1/user/del';
  //   var options = {
  //     method: 'DELETE',
  //     url: url,
  //     headers:
  //       {
  //         'Authorization': 'Bearer eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9.eyJkYXRhIjp7InVpZCI6ImI4Yzk4NWYwLTVkMzctMTFlOS05ZGYyLTYxNjU0NTc1NjY0ZSIsInVyb2xlIjoyfSwiZXhwIjoxNTU1MDkxMDcxLCJpYXQiOjE1NTUwODM4NzF9.3zgFM1OSPUPqqarpvw4mylM9t-tsE-TYP6WgHW1poTWBush3I-fU1VbU4Wd8T7XZ61i3yp7TkmAjsHdGPF5FYYjNdr4_9BMDyIhUwVHLdZ2wlMOB5qzDxaRJ8Xx2RCnSKspmedPhFnQj1Irc6Au0b9dZ9GGe_U17SdZhZcDogI4',
  //         'Content-Type': 'application/json',
  //       },
  //     body: data,
  //     json: true,
  //   };
  //   const res = await request(options);
  //   console.log(res);
  // });
  // it('获取选举列表或单条的投票详情', async () => {
  //   const url = app.config.host + '/api/v1/election/get';
  //   var options = {
  //     method: 'GET',
  //     url: url,
  //     headers:
  //       {
  //         'Authorization': 'Bearer eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9.eyJkYXRhIjp7InVpZCI6ImI4Yzk4NWYwLTVkMzctMTFlOS05ZGYyLTYxNjU0NTc1NjY0ZSIsInVyb2xlIjoyfSwiZXhwIjoxNTU1MDkwNzYwLCJpYXQiOjE1NTUwODM1NjB9.4x7Zy1oyev1ZPZTlkcgD2FA80Ft2V4Wa6aXPFECdnDOEU9oUwlZftfDaE5NpBkpyL6124g4fwE5p5UTGFT2z9z5sya9gAI2AqhIHtvJjIowOOZ4qeDyyCSU9nT5w5GjQRXhM7qnOVRb4hTI4nVhaM1WlnEY17gWaLVb86lrjBtg',
  //       },
  //   };
  //   const res = await request(options);
  //   console.log(res);
  // });
  // it('添加新选举', async () => {
  //   const data = {
  //     'title': '选举2',
  //   };
  //   const url = app.config.host + '/api/v1/election/add';
  //   var options = {
  //     method: 'POST',
  //     url: url,
  //     headers:
  //       {
  //         'Authorization': 'Bearer eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9.eyJkYXRhIjp7InVpZCI6ImI4Yzk4NWYwLTVkMzctMTFlOS05ZGYyLTYxNjU0NTc1NjY0ZSIsInVyb2xlIjoyfSwiZXhwIjoxNTU1MDkxMDcxLCJpYXQiOjE1NTUwODM4NzF9.3zgFM1OSPUPqqarpvw4mylM9t-tsE-TYP6WgHW1poTWBush3I-fU1VbU4Wd8T7XZ61i3yp7TkmAjsHdGPF5FYYjNdr4_9BMDyIhUwVHLdZ2wlMOB5qzDxaRJ8Xx2RCnSKspmedPhFnQj1Irc6Au0b9dZ9GGe_U17SdZhZcDogI4',
  //         'Content-Type': 'application/json',
  //       },
  //     body: data,
  //     json: true,
  //   };
  //   const res = await request(options);
  //   console.log(res);
  // });
  // it('开启/结束选举', async () => {
  //   const data = {
  //     'id': 'election01',
  //     'state': 2,//1：未开始 2：开启 3：结束
  //   };
  //   const url = app.config.host + '/api/v1/election/update';
  //   var options = {
  //     method: 'PUT',
  //     url: url,
  //     headers:
  //       {
  //         'Authorization': 'Bearer eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9.eyJkYXRhIjp7InVpZCI6ImI4Yzk4NWYwLTVkMzctMTFlOS05ZGYyLTYxNjU0NTc1NjY0ZSIsInVyb2xlIjoyfSwiZXhwIjoxNTU1MDkwNzYwLCJpYXQiOjE1NTUwODM1NjB9.4x7Zy1oyev1ZPZTlkcgD2FA80Ft2V4Wa6aXPFECdnDOEU9oUwlZftfDaE5NpBkpyL6124g4fwE5p5UTGFT2z9z5sya9gAI2AqhIHtvJjIowOOZ4qeDyyCSU9nT5w5GjQRXhM7qnOVRb4hTI4nVhaM1WlnEY17gWaLVb86lrjBtg',
  //         'Content-Type': 'application/json',
  //       },
  //     body: data,
  //     json: true,
  //   };
  //   const res = await request(options);
  //   console.log(res);
  // });
  // it('添加候选人', async () => {
  //   const data = {
  //     'electionId': 'election01',
  //     'name': '候选人11',
  //   };
  //   const url = app.config.host + '/api/v1/candidate/add';
  //   var options = {
  //     method: 'POST',
  //     url: url,
  //     headers:
  //       {
  //         'Authorization': 'Bearer eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9.eyJkYXRhIjp7InVpZCI6ImI4Yzk4NWYwLTVkMzctMTFlOS05ZGYyLTYxNjU0NTc1NjY0ZSIsInVyb2xlIjoyfSwiZXhwIjoxNTU1MDkxMDcxLCJpYXQiOjE1NTUwODM4NzF9.3zgFM1OSPUPqqarpvw4mylM9t-tsE-TYP6WgHW1poTWBush3I-fU1VbU4Wd8T7XZ61i3yp7TkmAjsHdGPF5FYYjNdr4_9BMDyIhUwVHLdZ2wlMOB5qzDxaRJ8Xx2RCnSKspmedPhFnQj1Irc6Au0b9dZ9GGe_U17SdZhZcDogI4',
  //         'Content-Type': 'application/json',
  //       },
  //     body: data,
  //     json: true,
  //   };
  //   const res = await request(options);
  //   console.log(res);
  // });
  // it('删除候选人', async () => {
  //   const data = {
  //     'electionId': 'election01',
  //     'id': 'candidate07',
  //   };
  //   const url = app.config.host + '/api/v1/candidate/del';
  //   var options = {
  //     method: 'DELETE',
  //     url: url,
  //     headers:
  //       {
  //         'Authorization': 'Bearer eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9.eyJkYXRhIjp7InVpZCI6ImI4Yzk4NWYwLTVkMzctMTFlOS05ZGYyLTYxNjU0NTc1NjY0ZSIsInVyb2xlIjoyfSwiZXhwIjoxNTU1MDkxMDcxLCJpYXQiOjE1NTUwODM4NzF9.3zgFM1OSPUPqqarpvw4mylM9t-tsE-TYP6WgHW1poTWBush3I-fU1VbU4Wd8T7XZ61i3yp7TkmAjsHdGPF5FYYjNdr4_9BMDyIhUwVHLdZ2wlMOB5qzDxaRJ8Xx2RCnSKspmedPhFnQj1Irc6Au0b9dZ9GGe_U17SdZhZcDogI4',
  //         'Content-Type': 'application/json',
  //       },
  //     body: data,
  //     json: true,
  //   };
  //   const res = await request(options);
  //   console.log(res);
  // });
});
