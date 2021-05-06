## 一、todoList案例相关知识点
## 二、Github搜索案例相关知识点
    1.设计状态时要考虑全面，例如带有网络请求的组件，要考虑请求失败怎么办。
    2.ES6小知识点:解构赋值+重命名
        let obj = {a:{b:1}}
        const {a} = obj;   //传统解构赋值
        const {a:{b}= obj; //连续解构赋值
        const {a:{b:value}}= obj; //连续解构赋值+重命名
    3.消息订阅与发布机制
        1.先订阅，再发布(理解:有一种隔空对话的感觉)
        2.适用于任意组件间通信
        3.要在组件的componentwi1lUnmount中取消订阅
        4.fetch发送请求（关注分离的设计思想) 可以理解为xhr的兄弟
        try {
            const response = await fetch(`http://localhost:3000/api1/search/users?q=${keyWord}`)
            const data = await response.json()
            console.log(data)   
            PubSub.publish('atguigu',{isLoding:false,users:data.items})
        } catch (error) {
            console.log('请求出错',error)
            PubSub.publish('atguigu',{isLoding:false,err:error.message})
        }

## 三、路由的基本使用
        1.明确好界面中的导航区、展示区
		2.导航区的a标签改为Link标签
			<Link to="/xxxx">Demo</Link>
		3.展示区写Route标签进行路径的匹配
			<Route path='/xxxx' component={Demo}/>
		4.<App>的最外侧包裹了一个<BrowserRouter>或<HashRouter>

## 四、路由组件与一般组件
        1.写法不同：
			一般组件：<Demo/>
			路由组件：<Route path="/demo" component={Demo}/>
		2.存放位置不同：
			一般组件：components
			路由组件：pages
		3.接收到的props不同：
			一般组件：写组件标签时传递了什么，就能收到什么
			路由组件：接收到三个固定的属性
                history:
                        go: ƒ go(n)
                        goBack: ƒ goBack()
                        goForward: ƒ goForward()
                        push: ƒ push(path, state)
                        replace: ƒ replace(path, state)
                location:
                        pathname: "/about"
                        search: ""
                        state: undefined
                match:
                        params: {}
                        path: "/about"
                        url: "/about"   

## 五、NavLink与封装NavLink
        1.NavLink可以实现路由链接的高亮，通过activeClassName指定样式名
        2.标签体内容是一个特殊的标签属性
        3.通过this.props.children可以获取标签体内容

## 六、Switch的使用
        1.通常情况下，path和component是一一对应的关系。
		2.Switch可以提高路由匹配效率(单一匹配)。组件匹配到第一个组件时就不会继续向下匹配相同的组件了（组件多个时才包起来）

## 七、解决多级路径刷新页面样式丢失的问题
        1.public/index.html 中 引入样式时不写 ./ 写 / （常用）
		2.public/index.html 中 引入样式时不写 ./ 写 %PUBLIC_URL% （常用）=》React里面才适用
		3.index.js 中 使用HashRouter

## 八、路由的严格匹配和模糊匹配
        1.默认使用的是模糊匹配（简单记：【输入的路径】必须包含要【匹配的路径】，且顺序要一致）
		2.开启严格匹配：<Route exact={true} path="/about" component={About}/>
		3.严格匹配不要随便开启，需要再开，有些时候开启会导致无法继续匹配二级路由

## 九、Redirect的使用
        1.一般写在所有路由注册的最下方，当所有路由都无法匹配时，跳转到Redirect指定的路由
		2.具体编码：
            <Switch>
                <Route path="/about" component={About}/>
                <Route path="/home" component={Home}/>
                <Redirect to="/home"/>
            </Switch>

## 十、嵌套路由
        1.注册子路由时要写上父路由的path值
	    2.路由的匹配是按照注册路由的顺序进行的

## 十一、向路由组件传递参数
        1.params参数
            路由链接(携带参数)：<Link to='/demo/test/tom/18'}>详情</Link>
            注册路由(声明接收)：
            <Route path="/demo/test/:name/:age" component={Test}/>
            接收参数：const {name,age} = this.props.match.params
		2.search参数
            路由链接(携带参数)：<Link to='/demo/test?name=tom&age=18'}>详情</Link>
            注册路由(无需声明，正常注册即可)：
            <Route path="/demo/test" component={Test}/>
            接收参数：this.props.location.search
            备注：获取到的search是urlencoded编码字符串，需要借助querystring库解析
        3.state参数
            路由链接(携带参数)：<Link to={{pathname:'/demo/test',state: {name:'tom',age:18}}}>详情</Link>
            注册路由(无需声明，正常注册即可)：
            <Route path="/demo/test" component={Test}/>
            接收参数：this.props.location.state
            备注：刷新也可以保留住参数

## 十二、编程式路由导航
        借助this.prosp.history对象上的API对操作路由跳转、前进、后退
            -this.prosp.history.push()
            -this.prosp.history.replace()
            -this.prosp.history.goBack()
            -this.prosp.history.goForward()
            -this.prosp.history.go()

## 十三、withRouter的使用
        引入withRouter函数，解决一般组件中没有路由组件的API的问题
        withRouter可以加工一般组件，让一般组件具备路由组件所特有的API
        withRouter返回值是一个新组件

## 十四、BrowserRouter与HashRouter的区别
        1.底层原理不一样：
            BrowserRouter使用的是H5的history API，不兼容IE9及以下版本。
            HashRouter使用的是URL的哈希值。
		2.path表现形式不一样
            BrowserRouter的路径中没有#,例如：localhost:3000/demo/test
            HashRouter的路径包含#,例如：localhost:3000/#/demo/test
		3.刷新后对路由state参数的影响
            (1).BrowserRouter没有任何影响，因为state保存在history对象中。
            (2).HashRouter刷新后会导致路由state参数的丢失！！！
		4.备注：HashRouter可以用于解决一些路径错误相关的问题。

## 十五、ant的按需引入+自定义主题（3.x版）
        1.安装依赖：yarn add react-app-rewired customize-cra babel-plugin-import less less-loader
		2.修改package.json
				....
					"scripts": {
						"start": "react-app-rewired start",
						"build": "react-app-rewired build",
						"test": "react-app-rewired test",
						"eject": "react-scripts eject"
					},
				....
		3.根目录下创建config-overrides.js
				//配置具体的修改规则
				const { override, fixBabelImports,addLessLoader} = require('customize-cra');
				module.exports = override(
					fixBabelImports('import', {
						libraryName: 'antd',
						libraryDirectory: 'es',
						style: true,
					}),
					addLessLoader({
						lessOptions:{
							javascriptEnabled: true,
							modifyVars: { '@primary-color': 'green' },
						}
					}),
				);
			4.备注：不用在组件里亲自引入样式了，即：import 'antd/dist/antd.css'应该删掉

## 十六、antd的按需引入+自定义主题（4.x版）

        1、此时我们需要对 create-react-app 的默认配置进行自定义，这里我们使用 craco （一个对 create-react-app 进行自定义配置的社区解决方案）。
        现在我们安装 craco 并修改 package.json 里的 scripts 属性。
        $ yarn add @craco/craco || npm install @craco/craco
        2、修改package.json (+号部分替换-号部分)
            "scripts": {
            -   "start": "react-scripts start",
            -   "build": "react-scripts build",
            -   "test": "react-scripts test",
            +   "start": "craco start",
            +   "build": "craco build",
            +   "test": "craco test",
            }
        3、在项目根目录创建一个 craco.config.js 用于修改默认配置。
                自定义主题
                将App.jsx中的- import '~antd/dist/antd.css' 替换为 import '~antd/dist/antd.less';
                然后安装 craco-less 并修改 craco.config.js 文件如下。
                $ yarn add craco-less || npm install craco-less (--force)
                //modifyVars: { '@primary-color': 'pink' },可以修改自定义的主题颜色
                const CracoLessPlugin = require('craco-less');
                    module.exports = {
                    plugins: [
                        {
                        plugin: CracoLessPlugin,
                        options: {
                            lessLoaderOptions: {
                            lessOptions: {
                                modifyVars: { '@primary-color': '#1DA57A' },
                                javascriptEnabled: true,
                            },
                            },
                        },
                        },
                    ],
                    };