var fs = require('fs')
var express = require('express')
// 1、创建一个路由容器
var router = express.Router()
var Student = require('./student')
// 2、把路由都挂载到路由容器中
router.get('/students',function(req,res) {
    Student.find(function(err,students) {
        if(err) {
            return res.status(500).send('Server error')
        }
        // res.render('index.html',{
        //     students: students
        // })
        res.send(students)
    })
})

// 3、把router导出
module.exports = router