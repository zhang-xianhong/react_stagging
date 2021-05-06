import React, { Component } from 'react'
import PubSub from 'pubsub-js'

export default class Search extends Component {
    search = async()=>{
        // 发布状态
        // PubSub.publish('atguigu',{name:'zhangsan',age:18})
        // 获取用户的输入
        // const {value} = this.keyWordElement
        // 解构赋值连续写法
        // const {keyWordElement:{value}} = this
        // console.log(value) 
        // 解构赋值连续写法+重命名
        const {keyWordElement:{value:keyWord}} = this
        // console.log(keyWord)
        // 发送请求前通知 List 更新状态
        // this.props.updateAppState({isFirst:false,isLoding:true})
        PubSub.publish('atguigu',{isFirst:false,isLoding:true})

        // 发送网络请求 使用axios发送 https://api.github.com/search/users?q=xxx 默认设置了cors跨域，不会产生跨域问题
        // 下面这个配置的代理服务器解决跨域，需要配置setupProxy代理
        //#region 
        /* axios.get(`http://localhost:3000/api1/search/users?q=${keyWord}`).then(
            response =>{
                // console.log('成功了',response.data)
                // this.props.saveUsers(response.data.items)
                // 请求成功后通知 List 更新状态
                // this.props.updateAppState({isLoding:false,users:response.data.items})
                PubSub.publish('atguigu',{isLoding:false,users:response.data.items})
            },
            err =>{
                // 请求失败后通知 List 更新状态
                // this.props.updateAppState({isLoding:false,err:err.message})
                PubSub.publish('atguigu',{isLoding:false,err:err.message})
                console.log('失败了')
            }
        ) */
        //#endregion

        // 发送网络请求---使用fetch（未优化版本）
        //#region 
        /* fetch(`http://localhost:3000/api1/search/users2?q=${keyWord}`).then(
            // response => {console.log('联系服务器成功了', response.json())},
            response => {
                console.log('联系服务器成功了')
                return response.json()
            },
            err => {
                console.log('联系服务器失败了')
                return new Promise()
            }
        ).then(
            response => {
                console.log('获取数据成功了',response)
            },
            err => {
                console.log('获取数据失败了',err)
            }
        ) */
        //#endregion
    
        // 使用fetch发送网络请求，优化版
        //#region 
        /* fetch(`http://localhost:3000/api1/search/users2?q=${keyWord}`).then(
            response => {
                console.log('联系服务器成功了')
                return response.json()
            }
        ).then(
            response => { console.log('获取数据成功了',response) }
        ).catch(err=>{
            console.log('请求出错',err)
        }) */
        //#endregion
    
        // 使用async和await
        try {
            const response = await fetch(`http://localhost:3000/api1/search/users?q=${keyWord}`)
            const data = await response.json()
            console.log(data)   
            PubSub.publish('atguigu',{isLoding:false,users:data.items})
        } catch (error) {
            console.log('请求出错',error)
            PubSub.publish('atguigu',{isLoding:false,err:error.message})
        }
    }
    render() {
        return (
            <section className="jumbotron">
                <h3 className="jumbotron-heading">Search Github Users</h3>
                <div>
                    <input ref={c=>{this.keyWordElement = c}} type="text" placeholder="enter the name you search"/>&nbsp;
                    <button onClick={this.search}>Search</button>
                </div>
            </section>
        )
    }
}
