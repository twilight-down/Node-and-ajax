//引用express框架
const express = require('express');
//创建博客展示页面路由
const home = express.Router();
//博客前台首页的展示页面
home.get('/', require('./home/index'));

//博客前台详情展示页面
home.get('/article', require('./home/article'));

//创建评论功能路由
home.post('/comment', require('./home/comment'))

//将路由作为模块对象导出
module.exports = home;