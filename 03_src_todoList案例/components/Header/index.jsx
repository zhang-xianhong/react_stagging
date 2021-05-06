import React, { Component } from 'react'
// 引入限制类型的组件
import PropTypes from 'prop-types'
// 引入nanoid，字符串是唯一的
import {nanoid} from 'nanoid'
import './index.css'

export default class Header extends Component {
    // 对接收的props进行类型和必要性限制
    static propTypes = {
        addTodo: PropTypes.func.isRequired
    }
    handleKeyUp = (event)=>{
        // console.log(event.target.value,event.keyCode)
        // 解构赋值获取target和keyCode
        const {keyCode,target} = event
        // 判断是否是回车按键
        if(keyCode !== 13) return
        // 判断输入的内容不能为空
        if(target.value.trim() === '') {
            alert('不能为空！')
            return
        }
        // 准备好一个todoObj对象
        this.props.addTodo({id:nanoid(),name:target.value,done:false})
        // console.log(target.value)
        // 清空输入框
        target.value = ''
    }
    render() {
        return (
            <div className="todo-header">
                <input onKeyUp={this.handleKeyUp} type="text" placeholder="请输入你的任务名称，按回车键确认"/>
            </div>
        )
    }
}
