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

//创建文档 但没有保存
const course = new Course({
    name: 'node.js',
    author: 'andy',
    isPublished: true
});

//将文档插入到数据库中 保存文件   将数据保存到数据库中
course.save();