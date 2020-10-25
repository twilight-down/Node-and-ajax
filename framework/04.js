//引入express框架
const express = require('express');
//创建网站服务器
const app = express();


// //网站公告
// app.use((req, res, next) => {
//     res.send('当前网站正在维护请在其他时间段访问...')
// })

app.use('/admin', (req, res, next) => {
    let isLogin = true;
    //如果用户登陆
    if (isLogin) {
        //请求继续向下执行
        next();
    } else {
        //如果用户没有登陆直接对用户做出响应
        res.send('您还没有登陆 不能访问admin这个页面');
    }

})

app.get('/admin', (req, res, next) => {
    res.send(' 您已经登陆可以访问页面');

})


app.use((req, res, next) => {
    res.status(404).send('访问页面不存在 宝贝')
})

//监听端口
app.listen(3000);
console.log('网站服务器启动成功');