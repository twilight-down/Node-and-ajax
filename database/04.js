const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/playground', { useNewUrlParser: true, useUnifiedTopology: true }) //第二个参数为选项内容
    .then(() => { console.log('数据库连接成功'); })
    .catch((err) => { console.log(err, '数据库连接失败'); })

//创建集合规则
const userSchema = new mongoose.Schema({
    name: String,
    age: Number,
    email: String,
    password: String,
    hobbies: [String]
});

//使用规则创建集合
const User = mongoose.model('User', userSchema); //返回的是一个构造函数

// User.find().then(result => {
//     console.log(result);
// })


// //
// User.find({
//     age: 20
// }).then(result => {
//     console.log(result);
// })


// User.findOne({}).then(result => { console.log(result); })


//查询用户集合中年龄字大于20并且小于50的文档
//匹配 大于 小于
// User.find({ age: { $gt: 20, $lt: 50 } }).then(result => { console.log(result); })


//查询用户集合中爱好包含足球的文档
// User.find({ hobbies: { $in: ['足球'] } }).then(result => { console.log(result); })


//选择想要查询的字段
// User.find().select('name email').then(result => { console.log(result); })



//加 - 表示不想查询的字段
// User.find().select('name email -_id').then(result => { console.log(result); })


//按照年龄进行升序排列 链式调用  年龄加负号表示降序排列
// User.find().select('name age -_id').sort('age').then(result => { console.log(result); })


//跳过多少条数据 并且限制显示多少条数据
User.find().skip(2).limit(2).then(result => { console.log(result); })