//引入express框架
const express = require('express');
//引入body-parser模块
const bodyParser = require('body-parser');
//创建网站服务器    
const app = express();

//拦截所有的请求
//extended:false 方法内部使用querystring模块处理请求参数的格式
//extended:true  方法内部使用qs的第三方模块处理请求参数的格式
app.use(bodyParser.urlencoded({ extended: false }));

app.post('/add', (req, res) => {
    //接受post请求参数
    res.send(req.body)
})

//端口监听
app.listen(3000);
console.log('服务器连接成功');