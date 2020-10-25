//导入用户集合构造函数
const { User } = require('../../model/user');
const { use } = require('../admin');


module.exports = async(req, res) => {

    //标识 标识表示当前访问的是用户管理页面
    req.app.locals.currentLink = 'user';

    //接受客户端传来的当前页参数
    let page = req.query.page || 1;
    //每一页显示的数据条数
    let pagesize = 10;
    //查询用户数据的总条数
    let count = await User.countDocuments({});
    //总页数 向上取整
    let total = Math.ceil(count / pagesize);
    //页码对应的开始位置
    let start = (page - 1) * pagesize;

    let users = await User.find({}).limit(pagesize).skip(start)
        // res.send(users);
        //将用户信息从列表中查出来

    //渲染用户列表模块
    res.render('admin/user', {
        users: users,
        page: page,
        total: total
    })
}