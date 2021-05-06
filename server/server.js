const express = require('express')

const app = express()
const router = require('./router')
    // 使用express-art-template模板引擎
app.engine('html', require('express-art-template'))

app.use((request,response,next)=>{
    console.log('请求服务器1了')
    console.log('该请求来自于：',request.get('Host'))
    console.log('请求的地址：',request.url)
    next()
})

// app.get('/students',function(request,response) {
//     const student = [
//         {id:'001',name:'jack',sex:'男'},
//         {id:'002',name:'sunny',sex:'女'},
//         {id:'003',name:'tony',sex:'男'},
//     ]
//     response.send(student)
// })
// 把路由容器挂载到app服务中
app.use(router)

app.listen(5000,function(err) {
    if(!err) {
        console.log('the port 5000 is running...')
    }
})

//当请求另外只有一个端口时，在package.json中 配置一个代理，只能配置一个
// "proxy": "http://localhost:5000"