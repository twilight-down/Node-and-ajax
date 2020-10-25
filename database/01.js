const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/playground', { useNewUrlParser: true, useUnifiedTopology: true }) //第二个参数为选项内容
    .then(() => { console.log('数据库连接成功'); })
    .catch((err) => { console.log(err, '数据库连接失败'); })