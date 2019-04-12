# Votes
简单的选举投票系统
项目整体文件说明

- app 配置文件目录
  - router.js 用于配置 URL 路由规则.
  - /controller/** 用于解析用户的输入，处理后返回相应的结果.
     - candidate.js  候选人的相应解析.
     - election.js  选举的相应解析.
     - user.js  用户的相应解析.
     - vote.js  投票的相应解析.
     - email.js 邮件的相应解析.
  - /service/** 用于编写业务逻辑层.
     - candidate.js  候选人的添加、删除逻辑.
     - election.js  选举的启动/结束选举、获取选举列表或单条的投票详情、添加新选举逻辑.
     - user.js  用户/工作人员的登陆、注册、添加员工、查找用户是否已注册、根据ID删除用户逻辑.
     - vote.js  邮件的发送、认证逻辑.
     - email.js  投票的提交逻辑.
  - /middleware/** 用于编写中间件.
     - jwt.js  扩展JWT校验用户Token.
  - /extend/** 用于框架的扩展.
     - context.js  扩展returnBody.
     - helper.js  扩展loginToken.
  - /public/** 用于放置静态资源.
     - rsa_private_key.pem  用于加密的私钥.
     - rsa_public_key.pem  用于加密的公钥.
  - /model/** 存放具体数据库 ORM 模型文件.
     - candidate.js  候选人的模型文件.
     - election.js  选举的模型文件.
     - user.js  用户/工作人员的模型文件.
     - vote.js  投票的模型文件.
     - verifyEmail.js  邮件验证的模型文件.
  - /rules/** 用于参数校验规则.
     - /candidate/  候选人的相关逻辑的参数校验规则.
     - /election/  选举的相关逻辑的参数校验规则.
     - /email/  邮件的相关逻辑的参数校验规则.
     - /user/  用户的相关逻辑的参数校验规则.
     - /vote/  投票的相关逻辑的参数校验规则.
- app.js 用于自定义启动时的初始化工作,模型的初始化、索引等.
- package.json 项目配置文件

搭建环境
- Node 需要 8.9.0 以上版本
- 使用的框架和数据库有:
  - Egg 作为项目的主框架，基于 Koa 开发，性能优异
  - mysql 用于管理信息列表
  - redis 用于存储用户登陆token


项目运行：
  - git clone https://github.com/lizhiren2016/Vote.git
  - npm install 或 yarn(推荐)
  - npm run dev (env模式启动项目) 或 npm run start (prod模式启动项目)
  - npm run testInit  初始化选举、候选人以及工作人员等测试数据 (非必须，可手动添加测试数据)
  - http://localhost:7001


系统已实现功能：
  - 工作人员
    - 1.添加新员工.
    - 2.登陆.
    - 3.发布选举，并针对该选举添加相应的候选人，可以在选举开启投票之前随意增删候选人，以及控制选举的开始和结束.
    - 4.随时实时查看所有选举的投票结果或单个选举的投票结果.
  - 用户
    - 1.校验当前注册的邮箱是否可以注册.
    - 2.注册.
    - 3.登陆.
    - 4.发送邮件验证链接.
    - 5.校验验证链接的有效性，并认证成功/失败.
    - 6.投票.


API接口的测试有以下方式：
  - 使用test目录下的api.test.js的测试案例，在命令后中输入npm run testAPI (默认都是注释的，需要测试哪个就反注释哪个)
  - 用PostMan测试
