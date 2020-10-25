const express = require('express');
const app = express();
const path = require('path');


path.join(__dirname, 'public')
    //实现静态资源访问
    //static参数为静态资源的目录
app.use('/static', express.static(path.join(__dirname, 'public')))


app.listen(3000);
console.log('服务器启动成功');