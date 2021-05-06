import React, { Component } from 'react'
import {Route,Link} from 'react-router-dom'
import Detail from './Detail'

export default class Message extends Component {
    state = {
        messageArr: [
            {id:'001',title:'消息1'},
            {id:'002',title:'消息2'},
            {id:'003',title:'消息3'}
        ]
    }
    replaceShow = (id,title)=>{
        // replace跳转+携带params参数
        this.props.history.replace(`/home/message/detail/${id}/${title}`)

        // replace跳转+携带 search 参数
        // this.props.history.replace(`/home/message/detail?id=${id}&title=${title}`)
    
        // replace跳转+携带 state 参数
        // 传递state的形式为：history.replace(path,state)
        // this.props.history.replace(`/home/message/detail`,{id,title})
    }
    pushShow = (id,title)=>{
        // push跳转+params参数
        this.props.history.push(`/home/message/detail/${id}/${title}`)

        // push跳转+search参数
        // this.props.history.push(`/home/message/detail?id=${id}&title=${title}`)
    }

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
        const {messageArr} = this.state
        return (
            <div>
                <ul>
                    {
                        messageArr.map(msgObj =>{
                            return (
                                <li key={msgObj.id}>
                                    {/* 向路由组件传递参数---params */}
                                    <Link to={`/home/message/detail/${msgObj.id}/${msgObj.title}`}>{msgObj.title}</Link>
                                    {/* 第二种跳转方法，设置点击函数并传递相应的参数进行跳转 */}
                                    &nbsp;<button  onClick={()=>{this.pushShow(msgObj.id,msgObj.title)}}>push查看</button>
                                    &nbsp;<button onClick={()=>{this.replaceShow(msgObj.id,msgObj.title)}}>replace查看</button>
                                    
                                    {/* 向路由组件传递参数---search */}
                                    {/* <Link to={`/home/message/detail/?id=${msgObj.id}&title=${msgObj.title}`}>{msgObj.title}</Link> */}
                                    
                                    {/* 向路由传递state参数 */}
                                    {/* <Link to={{pathname:'/home/message/detail',state:{id:msgObj.id,title:msgObj.title}}}>{msgObj.title}</Link> */}
                                </li>
                            )
                        })
                    }
                </ul>
                <hr/>
                {/* 注册路由 */}
                {/* 声明接收params参数 */}
                <Route path='/home/message/detail/:id/:title' component={Detail}/>
                
                {/* search参数无需声明接收、正常注册路由即可 */}
                {/* <Route path='/home/message/detail' component={Detail}/> */}

                {/* state参数也无需声明接收、正常注册路由即可 */}
                {/* <Route path='/home/message/detail' component={Detail}/> */}


                {/* 测试回退goBack和前进goForward以及go */}
                <button onClick={this.back}>回退</button> &nbsp;
                <button onClick={this.forward}>前进</button>
                <button onClick={this.go}>Go</button>
            </div>
        )
    }
}
