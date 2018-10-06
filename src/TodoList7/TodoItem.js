import React, { Component } from 'react';

class TodoItem extends Component {
	constructor(props) {
		super(props)
		this.handleClick = this.handleClick.bind(this)
	}
	render() {
		const { content } = this.props 
		return (
			<div
				onClick={this.handleClick}
			>{content}</div>
		)
	}

	/* 
		componentWillReceiveProps
		一个组件从父组件接受参数
		如果这个组件第一次存在于父组件中,不会执行
		如果之前已经存在于父组件中,才会执行
	*/
	componentWillReceiveProps() {
		console.log('child:componentWillReceiveProps')
	}

	// componentWillReceiveProps: 组件即将从页面中剔除时,会被执行
	componentWillUnmount() {
		console.log('child: componentWillReceiveProps')
	}

	handleClick() {
		const { index, deleteItem } = this.props 
		deleteItem(index)
	}
}

export default TodoItem;