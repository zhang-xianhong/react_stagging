import React, { Component } from 'react'
// 引入withRouter函数，解决一般组件中没有路由组件的API的问题
// withRouter可以加工一般组件，让一般组件具备路由组件所特有的API
// withRouter返回值是一个新组件
import {withRouter} from 'react-router-dom'
class Header extends Component {

    back = ()=>{
        this.props.history.goBack()
    }
    forward = ()=>{
        this.props.history.goForward()
    }
    go = ()=>{
        this.props.history.go(2)
    }
    render() {
        console.log('这是Home组件收到的参数：',this.props) //一般组件上面没有history参数
        return (
            <div className="page-header">
                <h2>React Router Demo</h2>
                <button onClick={this.back}>回退</button>
                <button onClick={this.forward}>前进</button>
                <button onClick={this.go}>GO</button>
            </div>
        )
    }
}

export default withRouter(Header)