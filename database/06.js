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

//根据条件更新一条数据 匹配到多个符合条件的也只更新第一条文档
// User.updateOne({ name: '李四' }, { name: '李狗' }).then(result => { console.log(result); })


//根据条件更新多条数据
User.updateMany({}, { age: 56 }).then(result => { console.log(result); })