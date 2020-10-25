//引用express框架
const express = require('express');
//引用path 处理路径
const path = require('path');
//引入body-parser模块
const bodyParser = require('body-parser');
//导入express-session模块
const session = require('express-session');
//导入art-template
const template = require('art-template');
//导入dateformat
const dateFormat = require('dateformat');
//导入morgan模块
const morgan = require('morgan');
const config = require('config');
//创建网站服务器
const app = express();
//数据库连接
require('./model/connect');
//处理post请求参数
app.use(bodyParser.urlencoded({ extends: false }))
    //配置session
app.use(session({
    secret: 'secret key',
    saveUninitialized: false, //保存一个未初始化的cookie false代表不保存
    cookie: {
        maxAge: 24 * 60 * 60 * 1000
    }
}));


//配置模板
app.engine('art', require('express-art-template'));
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'art');
//向模板内部导入dateformat变量
template.defaults.imports.dateFormat = dateFormat;

//开放静态资源文件
app.use(express.static(path.join(__dirname, './public')))


console.log(config.get('title'));


//获取系统环境变量 返回值是一个对象存储的是环境变量以及他的值
if (process.env.NODE_ENV == 'development') {
    //开发环境
    console.log('当前是开发环境');
    //可以将请求信息打印在控制台，便于开发调试
    //在开发环境中 将客户端发送到服务端的请求打印到控制台中
    app.use(morgan('dev'));
} else {
    //生产环境
    console.log('当前是生产环境');
}

//引入路由模块
const home = require('./route/home');
const admin = require('./route/admin');


//登陆拦截
//拦截请求，判断用户登陆状态  
app.use('/admin', require('./middleware/loginGuard'));

//为路由匹配路径
app.use('/home', home);
app.use('/admin', admin);

app.use((err, req, res, next) => {
    //将字符串对象转换为对象类型
    //json.parse()

    //这里的result就相当于user-modify.js里面的obj
    const result = JSON.parse(err);
    let params = [];
    for (let attr in result) {
        if (attr != 'path') {
            params.push(attr + '=' + result[attr]);
        }
    }
    res.redirect(`${result.path}?${params.join('&')}`);
})

//监听端口
app.listen(80);
console.log('服务器启动成功,请访问localhost');