import React, { Component } from 'react';

class TodoItem extends Component {
	constructor(props) {
		super(props)
		this.handleClick = this.handleClick.bind(this)
	}
	render() {
		//// es6的方式,等价于const content = this.props.content
		const { content } = this.props 
		return (
			<div
				onClick={this.handleClick}
			>{content}</div>
		)
	}
	handleClick() {
		const { index, deleteItem } = this.props 
		console.log(index)
		// 调用父组件的方法
		deleteItem(index)
	}
}

export default TodoItem;