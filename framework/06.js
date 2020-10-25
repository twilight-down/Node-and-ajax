//引入express框架
const express = require('express');
//读取文件
const fs = require('fs');
//
const promisify = require('util').promisify;
const readFile = promisify(fs.readFile);
//创建网站服务器
const app = express();


app.get('/index', async(req, res, next) => {
    try {
        await readFile('/sda.js')

    } catch (ex) {
        next(ex);
    }



})


app.use((err, req, res, next) => {
    res.status(500).send(err.message)

})


//监听端口
app.listen(3000);
console.log('服务器启动成功');