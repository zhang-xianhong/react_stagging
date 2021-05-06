const express = require('express')

const app = express()
    // 使用express-art-template模板引擎
app.engine('html', require('express-art-template'))

app.use((request,response,next)=>{
    console.log('请求服务器2了')
    next()
})

app.get('/cars',function(request,response) {
    const car = [
        {id:'001',name:'jack',sex:'男'},
        {id:'002',name:'sunny',sex:'女'},
        {id:'003',name:'tony',sex:'男'},
    ]
    response.send(car)
})


app.listen(5001,function(err) {
    if(!err) {
        console.log('the port 5001 is running...')
    }
})

//当请求另外只有一个端口时，在package.json中 配置一个代理，只能配置一个
// "proxy": "http://localhost:5000"