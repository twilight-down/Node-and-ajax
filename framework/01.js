//引入express框架
const express = require('express');
//创建网站服务器
const app = express();

app.get('/', (req, res) => {
    //send() 放法取代了 end()方法
    res.send('Hello Express');
})

//监听端口
app.listen(3000);
console.log('网站服务器启动成功');