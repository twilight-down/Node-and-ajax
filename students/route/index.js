//引入router模块
const getRouter = require('router');
//获取路由对象
const router = getRouter();
//导入数据库模块
const Student = require('../model/user.js');
//引入模板引擎
const template = require('art-template');
//引入querystring模块
const querystring = require('querystring');




//呈递学生档案信息页面
router.get('/add', (req, res) => {
    let html = template('index.art', {})
    res.end(html);
});

//呈递学生信息列表页面
router.get('/list', async(req, res) => {
    //查询学生信息
    let students = await Student.find();
    console.log(students);
    let html = template('list.art', {
        students: students
    })
    res.end(html);
});

//实现学生信息添加功能
router.post('/add', (req, res) => {
    //接受post请求参数
    let formDate = '';
    req.on('data', param => {
        formDate += param;
    });
    req.on('end', async() => {
        console.log(querystring.parse(formDate));
        await Student.create(querystring.parse(formDate))
        res.writeHead(301, {
            Location: '/list'
        })
        res.end();

    })
});

module.exports = router;