const { User } = require('../../model/user');
const bcrypt = require('bcrypt');


module.exports = async(req, res, next) => {
    //接受客户端传递过来的参数
    const { username, email, role, state, password } = req.body; //数组结构 更方便拿内容
    //id 即将要修改的ID 因为body里面没有ID 所以要从req.query里面拿 id是通过表单拿过来的
    const id = req.query.id;
    // res.send(body.password)
    let user = await User.findOne({ _id: id });
    const isValid = await bcrypt.compare(password, user.password) || (password == user.password && id == '5f7da7fb364b5b517c8a3a0c');
    //这里写或是因为有一个没经过加密的玩意儿 我觉得并不会影响别的用户 因为将ID进行了匹配而ID是唯一的

    if (isValid) {
        //密码比对成功
        // res.send('1');
        await User.updateOne({ _id: id }, {
            username: username,
            email: email,
            role: role,
            state: state
        });

        //将页面重定向到用户列表页面
        res.redirect('/admin/user');

    } else {
        //密码比对失败
        // res.send('0');
        let obj = { path: '/admin/user-edit', message: '密码比对失败不能进行修改', id: id }
        next(JSON.stringify(obj));

    }
}