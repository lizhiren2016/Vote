FROM node:7.9.0-alpine

RUN mkdir -p /usr/src/app

# Set a working directory
WORKDIR /usr/src/app

COPY . .

# 安装依赖
RUN npm config set registry https://registry.npm.taobao.org
RUN npm install

# start server
CMD [ "npm", "start" ]
