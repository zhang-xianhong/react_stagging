var mongoose = require('mongoose')
// 连接数据库
mongoose.connect('mongodb://localhost/test1',{useNewUrlParser: true,useUnifiedTopology: true})
// 创建模式Schema
var Schema = mongoose.Schema
var studentSchema = new Schema({
    id: {
        type: String,
        required: true
    },
    name: {
        type: String,
        required: true
    },
    sex: {
        type: String,
        default: '男'
    }
})
// var User = mongoose.model('Student',studentSchema)
// var admin = new User({
//         id: '003',
//         name: '王五',
//         sex: '女'
//     })
//     // 持久化 
// admin.save(function(err, res) {
//     if (err) {
//         console.log('存储失败')
//     } else {
//         console.log('保存成功')
//         console.log(res)
//     }
// })
// 直接导出模型构造函数
module.exports = mongoose.model('Student',studentSchema)