const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/playground', { useNewUrlParser: true, useUnifiedTopology: true }) //第二个参数为选项内容
    .then(() => { console.log('数据库连接成功'); })
    .catch((err) => { console.log(err, '数据库连接失败'); })

//创建集合规则
const courseSchema = new mongoose.Schema({ //构造函数创建一个实例对象
    name: String,
    author: String,
    isPublished: Boolean
});

//使用规则创建集合
//第一个参数：集合名称 第二个参数：集合规则
const Course = mongoose.model('Course', courseSchema)

//第二种方法
// Course.create({ name: 'JavaScrip', author: 'anna', isPublished: false }, (err, result) => {
//     console.log(err);
//     console.log(result);
// })

Course.create({ name: 'JavaScrip', author: 'anna', isPublished: false })
    .then((result) => {
        console.log(result);
    })
    .catch((err) => { console.log(err); })