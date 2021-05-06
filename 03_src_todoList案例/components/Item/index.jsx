import React, { Component } from 'react'
import './index.css'

export default class Item extends Component {

    state = {mouse:false}
    // 鼠标进入移出的回调
    handleMouse = (flag)=>{
        return ()=>{
            this.setState({mouse:flag})
        }
    }
    // checkbox勾选不勾选的回调
    handleCheck = (id)=> {
        return (event)=>{
            // console.log(id,event.target.checked)
            this.props.updateTodo(id,event.target.checked)
        }
    }
    // 处理点击删除组件
    handleDelete = (id)=>{
        if(window.confirm('确定删除吗？')) {
            this.props.deleteTodo(id)
        }
        // console.log('通知App删除:',id)
    }
    render() {
        const {id,name,done} = this.props
        const {mouse} = this.state
        return (
            <li style={{backgroundColor:mouse?'#eee':'#fff'}} onMouseEnter={this.handleMouse(true)} onMouseLeave={this.handleMouse(false)}>
                <label>
                    <input type="checkbox" checked={done} onChange={this.handleCheck(id)}/>
                    <span>{name}</span>
                </label>
                <button className="btn btn-danger" onClick={()=>{this.handleDelete(id)}} style={{display:mouse?'block':'none'}}>删除</button>
            </li>
        )
    }
}
