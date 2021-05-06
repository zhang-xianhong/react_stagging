import React, { Component } from 'react'
import axios from 'axios'

export default class Search extends Component {
    search = ()=>{
        // 获取用户的输入
        // const {value} = this.keyWordElement
        // 解构赋值连续写法
        // const {keyWordElement:{value}} = this
        // console.log(value) 
        // 解构赋值连续写法+重命名
        const {keyWordElement:{value:keyWord}} = this
        // console.log(keyWord)
        // 发送请求前通知App更新状态
        this.props.updateAppState({isFirst:false,isLoding:true})

        // 发送网络请求 https://api.github.com/search/users?q=xxx 默认设置了cors跨域，不会产生跨域问题
        // 下面这个配置的代理服务器解决跨域，需要配置setupProxy代理
        axios.get(`http://localhost:3000/api1/search/users?q=${keyWord}`).then(
            response =>{
                // console.log('成功了',response.data)
                // this.props.saveUsers(response.data.items)
                // 请求成功后通知App更新状态
                this.props.updateAppState({isLoding:false,users:response.data.items})
            },
            err =>{
                // 请求失败后通知App更新状态
                this.props.updateAppState({isLoding:false,err:err.message})
                console.log('失败了')
            }
        )
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
