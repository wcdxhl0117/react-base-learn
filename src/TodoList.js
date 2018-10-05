import React, { Component, Fragment } from 'react';
// 引入一个不被显示的包裹元素---Fragment占位符

class TodoList extends Component {
	// react组件中最优先执行的函数
	constructor(props) {
		// 继承执行下父级的构造函数
		super(props)
		// react定义数据需要定义在状态里面,react状态在this.state中
		this.state = {
			inputValue: '',
			list: []
		}
	}
  render() {
    return (
			<Fragment>
				<div>
					<input value={this.state.inputValue} />
					<button>提交</button>
				</div>
				<ul>
					<li>第一项</li>
					<li>第二项</li>
				</ul>
			</Fragment>
    )
  }
}
export default TodoList;
