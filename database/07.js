const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/playground', { useNewUrlParser: true, useUnifiedTopology: true }) //第二个参数为选项内容
    .then(() => { console.log('数据库连接成功'); })
    .catch((err) => { console.log(err, '数据库连接失败'); })


const postSchema = new mongoose.Schema({
    title: {
        //数据类型
        type: String,
        //必选字段
        required: [true, '请传入正确的数组数据'],
        //字符串最小长度
        minlength: [2, '长度不小于2'],
        //字符串最大长度
        maxlength: [5, '长度不大于5'],
        //去除字符串的空格
        trim: true
    }
});

const Post = mongoose.model('Post', postSchema);

Post.create({ title: '            aa                     ' }).then(result => { console.log(result); })