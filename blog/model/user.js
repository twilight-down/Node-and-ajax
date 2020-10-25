//创建用户集合

//导入bcrypt
const bcrypt = require('bcrypt');
//引入mongoose模块
const mongoose = require('mongoose');
//引入joi模块
const Joi = require('joi');

//创建用户集合规则
const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
        minlength: 2,
        maxlength: 10
    },
    email: {
        type: String,
        //保证邮箱不重复
        unique: true,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    // admin 超级管理员
    // normal 普通用户
    //
    role: {
        type: String,
        required: true
    },
    //0 禁用状态
    //1 启用状态
    state: {
        type: Number,
        default: 0
    }
});

//创建集合
const User = mongoose.model('User', userSchema);

async function createUser() {
    const salt = await bcrypt.genSalt(10);
    const pass = await bcrypt.hash('123456', salt);
    // 测试代码
    const user = await User.create({
        username: 'anna',
        email: 'anna@163.com',
        password: pass,
        role: 'admin',
        state: 0
    });
}

// createUser();
const validateUser = user => {
    //定义对象的验证规则
    const schema = {
        username: Joi.string().min(2).max(12).required().error(new Error('用户名不符合规则')),
        email: Joi.string().email().required().error(new Error('邮箱格式不符合规则')),
        password: Joi.string().regex(/^[a-zA-Z0-9]{3,30}$/).required().error(new Error('密码格式不符合规则')),
        role: Joi.string().valid('normal', 'admin').required().error(new Error('非法角色信息')),
        state: Joi.number().valid(0, 1).required().error(new Error('状态值非法'))
    };
    //实施验证
    return Joi.validate(user, schema);
}


//将用户集合作为模块成员导出
module.exports = {
    //键的名字和值一样 可以省略直接写值
    // User:User 
    User,
    validateUser
}