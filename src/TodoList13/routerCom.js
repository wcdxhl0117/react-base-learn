import React, { Component } from 'react';
import ReactDOM from 'react-dom';

// Router是路由容器，route代表一条路由规则
// 两种路由：HashRouter：通过路径里面的法系变量实现 和 BrowRouter：利用H5的history API实现
// 一般开发用HashRouter，上线用Browrouter
import {Router, Route} from 'react-router-dom'

let Home = () => <div>首页</div>
let User = () => <div>个人中心</div>
let Profile = () => <div>个人设置</div>

import React, { Component } from 'react';

class Toast extends Component {
	render() {
		return (
			<Router>
				<div>
					<Route path="./Home" component={Home}></Route>
					<Route path="./User" component={User}></Route>
					<Route path="./Profile" component={Profile}></Route>
				</div>
			</Router>
		)
	}
}

export default Toast;
   