//引入mongoose模块

const mongoose = require('mongoose');

//创建文章集合
const articleSchema = new mongoose.Schema({
    title: {
        type: String,
        maxlength: 20,
        minlength: 4,
        required: [true, '请填写文章的标题']
    },
    author: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: [true, '请传递作者']
    },
    publishData: {
        type: Date,
        default: Date.now
    },
    cover: {
        type: String,
        default: null
    },
    content: {
        type: String
    }

});


//根据规则创建集合
const Article = mongoose.model('Article', articleSchema);


//将集合规则作为模块成员进行导出
module.exports = {
    Article
}