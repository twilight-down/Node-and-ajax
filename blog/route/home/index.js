const { Article } = require('../../model/article');
//导入分页模块
const pagination = require('mongoose-sex-page');


module.exports = async(req, res) => {

    //获取页码值
    const page = req.query.page;

    //从数据库查询数据
    //page 指定当前页
    //size 指定每页显示的数据条数
    //display 指定客户端要显示的页码数量
    //exec 向数据库中查询请求
    //查询所有文章数据
    let result = await pagination(Article).page(page).size(4).display(5).find().populate('author').exec();

    // res.send(result);
    // return;

    //格式转换
    result = JSON.stringify(result)
    result = JSON.parse(result)
        //渲染模板并传递数据
    res.render('home/default.art', {
        result: result
    });
}