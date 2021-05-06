import React, { Component } from 'react'
import axios from 'axios'

export default class App extends Component {
    // 1、配置代理服务器解决跨域问题
    // getStudentsData = ()=>{
    //     axios.get('http://localhost:3000/students').then(response=>{
    //         console.log('成功了',response.data)
    //     },err=>{
    //         console.log('出错啦',err)
    //     })
    // }

    // 第二种方法，配置setupProxy.js实现
    getStudentsData = ()=>{
        axios.get('http://localhost:3000/api1/students').then(response=>{
            console.log('成功了',response.data)
        },err=>{
            console.log('出错啦',err)
        })
    }
    getCarsData = ()=>{
        axios.get('http://localhost:3000/api2/cars').then(response=>{
            console.log('成功了',response.data)
        },err=>{
            console.log('出错啦',err)
        })
    }
    render() {
        return (
            <div>
                <button onClick={this.getStudentsData}>点击获取学生数据</button>
                <button onClick={this.getCarsData}>点击获取汽车数据</button>
            </div>
        )
    }
}
