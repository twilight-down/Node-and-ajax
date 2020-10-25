//导入模板引擎
const template = require('art-template');
const path = require('path');
const views = path.join(__dirname, 'views', 'index.art')

//template用于拼接字符串
const html = template(views, {
    name: 'andy',
    age: 20
});

console.log(html);