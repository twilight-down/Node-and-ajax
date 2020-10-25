//将评论集合构造函数导入
const { Comment } = require('../../model/comment')

module.exports = async(req, res) => {
    //接受客户端传递来的请求参数
    const { content, uid, aid } = req.body;
    //将评论信息存储到评论集合中
    await Comment.create({
        content: content,
        uid: uid,
        aid: aid,
        time: new Date
    });
    //将文章重定位回文章详情页面    
    res.redirect('/home/article?id=' + aid);
}