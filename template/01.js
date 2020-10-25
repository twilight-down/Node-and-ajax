const templste = require('art-template');
const path = require('path');
const views = path.join(__dirname, 'views', '01.art');
const html = templste(views, {
    name: 'andy',
    age: 20,
    content: '<p>我是标题</p>'
})
console.log(html);