//引入express框架
const express = require('express');
//创建网站服务器
const app = express();
//创建路由对象
const home = express.Router();
//为路由对象匹配请求路径
app.use('/home', home);
//创建二级路由
home.get('/index', (req, res) => {
    // 访问时加上一级路由的路径和二级路由的路径
    res.send('欢迎来到博客首页页面');
})

//端口监听
app.listen(3000);
console.log('服务器连接成功');