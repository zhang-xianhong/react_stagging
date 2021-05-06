import React, { Component } from 'react'
// 导入urlencoded转换的库,可以用于字符串和对象的相互转换，类似于json用法
// import qs from 'querystring'
const DetailData = [
    {id:'001',content:'我爱中国'},
    {id:'002',content:'我爱我的家乡'},
    {id:'003',content:'加油，未来因奋斗而精彩'},
]

export default class Detail extends Component {
    render() {
        console.log(this.props)
        // 接收params参数
        // const {id,title} = this.props.match.params

        // 接收search参数
        // const {search} = this.props.location

        // 接收search参数
        const {id,title} = this.props.location.state || {}
        const contentResult = DetailData.find(detailObj=>{
            return detailObj.id === id
        }) || {}
        return (
            <div>
                <ul>
                    <li>ID: {id}</li>
                    <li>Title: {title}</li>
                    <li>Content: {contentResult.content}</li>
                </ul>
            </div>
        )
    }
}
