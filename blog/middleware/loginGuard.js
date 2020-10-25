const guard = (req, res, next) => {
    //判断用户是否访问的是登陆页面
    //判断用户的登陆状态
    //如果用户是登陆的就将请求放行
    //如果用户未登录 将请求重定向至登陆页面
    if (req.url != '/login' && !req.session.username) {
        res.redirect('/admin/login')
    } else {
        //如果用户是登陆状态并且是一个普通用户
        if (req.session.role == 'normal') {
            return res.redirect('/home/');
        }
        //用户是登陆状态将请求放行
        next();
    }
}
module.exports = guard;