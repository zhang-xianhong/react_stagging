import React, { Component } from 'react'
// import 'antd/dist/antd.css' // or 'antd/dist/antd.less'
import 'antd/dist/antd.less' 
// import '~antd/dist/antd.less';
import {Button,Tooltip,DatePicker} from 'antd'
import {WechatOutlined,SearchOutlined} from '@ant-design/icons'
export default class App extends Component {
    render() {
        function onChange(date, dateString) {
            console.log(date, dateString);
        }

        return (
            <div>
                App...
                <button>点我</button>
                <Button type="primary">Primary Button</Button>
                <Button type="danger">Danger Button</Button>
                <Button type="link">Link Button</Button>
                <WechatOutlined />
                <Tooltip title="search">
                    <Button type="primary" shape="circle" icon={<SearchOutlined />} />
                </Tooltip>
                <br/>
                <DatePicker onChange={onChange} />
            </div>
        )
    }
}
