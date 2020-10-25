//导入bcrypt
const bcrypt = require('bcrypt');


async function run() {

    //生成随机字符串
    //genSalt接受一个数值作为参数
    //数值越大生成的随机字符串复杂程度越大
    //数值越小生成的随机字符串复杂程度越小
    //默认值是10
    //返回随机生成的字符串
    const salt = await bcrypt.genSalt(10);

    //对密码进行加密
    //1.要进行加密的明文
    //2.随机字符串
    //返回加密后的密码
    const result = await bcrypt.hash('123456', salt);
    console.log(salt);
    console.log(result);
}
run();