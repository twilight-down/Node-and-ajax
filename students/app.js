//引入http模块
const http = require('http');

//引入模板引擎
const template = require('art-template');
//引入path模块
const path = require('path');

//引入静态资源访问模块
const serveStatic = require('serve-static');
//引入日期处理第三方模块
const dateformat = require('dateformat');

//实现静态资源服务 
const serve = serveStatic(path.join(__dirname, 'public'));

//引入router
const router = require('./route/index.js');

//配置模板根目录
template.defaults.root = path.join(__dirname, 'views');
//处理日期格式的方法  向模板中导入变量
template.defaults.imports.dateformat = dateformat;



//连接服务器模块
require('./model/connect.js');


//创建服务器
const app = http.createServer();
//为服务器添加请求事件
app.on('request', (req, res) => {
    //启用路由功能
    router(req, res, () => {})

    //启用静态资源访问服务
    serve(req, res, () => {})
});

app.listen(80);
console.log('服务器启动成功');