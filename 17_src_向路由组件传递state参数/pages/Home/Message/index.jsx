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
    render() {
        const {messageArr} = this.state
        return (
            <div>
                <ul>
                    {
                        messageArr.map(msgObj=>{
                            return (
                                <li key={msgObj.id}>
                                    {/* 向路由组件传递参数---params */}
                                    {/* <Link to={`/home/message/detail/${msgObj.id}/${msgObj.title}`}>{msgObj.title}</Link> */}
                                    
                                    {/* 向路由组件传递参数---search */}
                                    {/* <Link to={`/home/message/detail/?id=${msgObj.id}&title=${msgObj.title}`}>{msgObj.title}</Link> */}
                                    
                                    {/* 向路由传递state参数 */}
                                    <Link to={{pathname:'/home/message/detail',state:{id:msgObj.id,title:msgObj.title}}}>{msgObj.title}</Link>
                                </li>
                            )
                        })
                    }
                </ul>
                <hr/>
                {/* 注册路由 */}
                {/* 声明接收params参数 */}
                {/* <Route path='/home/message/detail/:id/:title' component={Detail}/> */}
                
                {/* search参数无需声明接收、正常注册路由即可 */}
                {/* <Route path='/home/message/detail' component={Detail}/> */}

                {/* state参数无需声明接收、正常注册路由即可 */}
                <Route path='/home/message/detail' component={Detail}/>
            </div>
        )
    }
}
