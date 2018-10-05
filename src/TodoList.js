import React, { Component, Fragment } from 'react';
// 引入一个不被显示的包裹元素---Fragment占位符

class TodoList extends Component {
  render() {
    return (
			<Fragment>
				<div>
					<input />
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
