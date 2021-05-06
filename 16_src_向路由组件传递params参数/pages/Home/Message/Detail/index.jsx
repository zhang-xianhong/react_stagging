import React, { Component } from 'react'
const DetailData = [
    {id:'001',content:'我爱中国'},
    {id:'002',content:'我爱我的家乡'},
    {id:'003',content:'加油，未来因奋斗而精彩'},
]

export default class Detail extends Component {
    render() {
        console.log(this.props)
        const {id,title} = this.props.match.params
        const contentResult = DetailData.find(detailObj=>{
            return detailObj.id === id
        })
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
