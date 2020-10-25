const express = require('express');
const path = require('path');
const app = express();

//模板配置
app.engine('art', require('express-art-template'));
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'art')

//这个数据在所有模板中都是可以拿到的
app.locals.users = [{
    name: 'andy',
    age: 20
}, {
    name: 'anna',
    age: 19
}]


app.get('/index', (req, res) => {
    res.render('index', {
        msg: '首页'
    });
});

app.get('/list', (req, res) => {
    res.render('index', {
        msg: '列表页'
    });
});

app.listen(3000);
console.log('服务器启动成功');