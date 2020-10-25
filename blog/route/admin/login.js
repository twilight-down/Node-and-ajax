//导入用户集合构造函数
const { User } = require('../../model/user');
//导入bcrypt模块 用于密码加密
const bcrypt = require('bcrypt');


module.exports = async(req, res) => {
    //接受请求参数
    const { email, password } = req.body;
    //如果用户没有输入地址或密码
    // if (email.trim().length == 0 || password.trim().length == 0) {
    //     return res.status(400).send('<h4>邮件地址或者密码错误</h4>')
    // }


    //去除邮箱的空格只识别有效部分
    if (email.trim().length == 0 || password.trim().length == 0) {
        return res.status(400).render('admin/error', { msg: '邮件地址或者密码错误' })
    }
    //根据邮箱地址查询用户信息
    //如果查询到了用户user变量的值是对象类型 如果没有查询到用户 user对象是空
    let user = await User.findOne({ email });
    if (user) {
        //查询到了用户
        //将客户端传递过来的密码和用户信息中的密码做对比

        let isValid = await bcrypt.compare(password, user.password)
            //如果密码比对成功 明文密码与暗文密码比对
        if (isValid) {
            //登陆成功
            //将用户名存储到请求对象中
            req.session.username = user.username;
            //将用户角色存储到session中
            req.session.role = user.role;

            //用户登陆成功之后用户的信息就存储在了这里
            req.app.locals.userInfo = user; //req.app拿到的就是app.js里面的app

            if (user.role == 'admin') {
                //重定向到用户列表页面
                res.redirect('/admin/user');
            } else {
                //重定向到博客首页
                res.redirect('/home/')
            }
        } else {
            //密码错误但是依然返回用户名或密码错误
            res.status(400).render('./admin/error', { msg: '用户名或密码错误' })
        }
    } else {
        //没有查询到用户  但是依然返回用户名或密码错误
        res.status(400).render('./admin/error', { msg: '用户名或密码错误' })
    }
};