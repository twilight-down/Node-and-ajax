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


//查询到一条文档并且删除
//返回删除的文档
//如果匹配到多条文档 他将删除匹配到的第一个文档
// User.findOneAndDelete({ _id: '5c09f267aeb04b22f8460968' }).then(result => { console.log(result); })


//删除多条
User.deleteMany({}).then(result => { console.log(result); })