const templste = require('art-template');
const path = require('path');
const views = path.join(__dirname, 'views', '02.art');
const html = templste(views, {
    name: 'andy',
    age: 17,

})
console.log(html);