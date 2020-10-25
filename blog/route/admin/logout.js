module.exports = (req, res) => {
    //删除session
    req.session.destroy(function() {
        //删除cookie
        res.clearCookie('connect.sid');
        //重定向到用户登陆界面
        res.redirect('/admin/login');
        //将存储着用户信息的locals.userInfo对象清空 防止退出后用户仍然可以评论的bug
        //也就是说 清除模板中的用户信息
        req.app.locals.userInfo = null;
    });
}