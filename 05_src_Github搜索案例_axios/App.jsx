import React, { Component } from 'react'
import Search from './components/Search'
import List from './components/List'
// 05_src_Github搜索案例_axios
export default class App extends Component {
    // 初始化状态
    state = {
        users:[], //保存用户状态信息
        isFirst: true, //是否为第一次打开页面
        isLoading: false, //标识是否处于加载中
        err: '' //存储相关的错误信息
    }
    // saveUsers = (users)=>{
    //     this.setState({users})
    // }
    // 更新App的state
    updateAppState = (stateObj)=>{
        this.setState(stateObj)
    }
    render() {
        // const {users} = this.state
        return (
            <div className="container">
                {/* <Search saveUsers={this.saveUsers}/> */}
                <Search updateAppState={this.updateAppState}/>
                {/* <List users={users}/> */}
                <List {...this.state}/>
            </div>
        )
    }
}
