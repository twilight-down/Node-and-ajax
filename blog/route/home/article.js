//导入文章集合构造函数
const { Article } = require('../../model/article');
//导入评论集合构造函数
const { Comment } = require('../../model/comment');


module.exports = async(req, res) => {
    //接受客户端传递来的文章id值
    const id = req.query.id;
    //根据id查询文章详细信息
    let article = await Article.findOne({ _id: id }).populate('author');
    //查询当前文章所对应的评论信息
    let comments = await Comment.find({ aid: id }).populate('uid');
    // res.send(comments);

    article = JSON.stringify(article);
    article = JSON.parse(article);

    comments = JSON.stringify(comments);
    comments = JSON.parse(comments);
    // res.send(article);
    res.render('home/article.art', { article, comments });
}