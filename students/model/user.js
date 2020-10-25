const mongoose = require('mongoose');
//创建学生集合规则
const studentSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        minlength: 2,
        maxlength: 10
    },
    age: {
        type: Number,
        min: 10,
        max: 80
    },
    sex: {
        type: String
    },
    email: {
        type: String,

    },
    hobbies: [String],
    collage: String,
    enterDate: {
        type: Date,
        dafault: Date.now
    }
});
//创建学生信息集合
const Student = mongoose.model('Student', studentSchema);
//将学生信息集合导出
module.exports = Student;