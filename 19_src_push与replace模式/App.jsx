import React, { Component } from 'react'
import {Route,Switch,Redirect} from 'react-router-dom'
import Home from './pages/Home' //Home是路由组件
import About from './pages/About'
import Header from './components/Header' //Header是一般组件
import MyNavLink from './components/MyNavLink'

export default class App extends Component {
    render() {
        return (
            <div>
                <div className="row">
                <div className="col-xs-offset-2 col-xs-8">
                    <Header/>
                </div>
                </div>
                <div className="row">
                <div className="col-xs-2 col-xs-offset-2">
                    <div className="list-group">
                        {/* 原生HTML中，靠<a>标签跳转到不同页面 */}
                        {/* <a className="list-group-item" href="./about.html">About</a>
                        <a className="list-group-item active" href="./home.html">Home</a> */}
                        
                        {/* SPA单页面路由 在React中使用带路由链接实现切换组件--编写路由链接*/}
                        <MyNavLink replace to='/about' title="About">About</MyNavLink>
                        <MyNavLink replace to='/home' title="Home">Home</MyNavLink>
                    </div>
                </div>
                <div className="col-xs-6">
                    <div className="panel">
                    <div className="panel-body">
                        {/* 注册路由 */}
                        {/* Switch组件匹配到第一个组件时就不会继续向下匹配相同的组件了（组件多个时才包起来） */}
                        <Switch>
                            <Route path='/about' component={About}/>
                            <Route path='/home' component={Home}/>
                            <Redirect to='/home'/>
                        </Switch>
                    </div>
                    </div>
                </div>
                </div>
            </div>
        )
    }
}
