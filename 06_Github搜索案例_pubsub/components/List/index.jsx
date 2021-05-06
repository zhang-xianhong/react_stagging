import React, { Component } from 'react'
// 导入发布订阅插件
import PubSub from 'pubsub-js'
import './index.css'

export default class List extends Component {
    // 初始化状态
    state = {
        users:[], //保存用户状态信息
        isFirst: true, //是否为第一次打开页面
        isLoading: false, //标识是否处于加载中
        err: '' //存储相关的错误信息
    }
    // 订阅状态
    componentDidMount() {
        this.token = PubSub.subscribe('atguigu',(_,stateObj)=>{
            // console.log('List组件收到数据了',data)
            this.setState(stateObj)
        })
    }
    componentWillUnmount() {
        PubSub.unsubscribe(this.token)
    }
    render() {
        const {users,isFirst,isLoding,err} = this.state
        return (
            <div className="row">
                {
                    isFirst ? <h2>欢迎使用，请输入关键字搜索</h2> : 
                    isLoding ? <h2>Loading...</h2> :
                    err ? <h2 style={{color: '#f00'}}>{err}</h2> :
                    users.map(userObj=>{
                        return (
                            <div key={userObj.id} className="card">
                                <a href={userObj.html_url} rel="noreferrer" target="_blank">
                                    <img alt='avater' src={userObj.avatar_url} style={{width: '100px'}}/>
                                </a>
                                <p className="card-text">{userObj.login}</p>
                            </div>
                        )
                    })
                }
            </div>
        )
    }
}
