import React, { Component } from 'react';

class TodoItem extends Component {
	constructor(props) {
		super(props)
		this.handleClick = this.handleClick.bind(this)
	}
	render() {
		console.log('child--render')
		const { content } = this.props
		return (
			<div
				onClick={this.handleClick}
			>{content}</div>
		)
	}
	
	// 防止父组件render执行时,子组件render也执行
	// shouldComponentUpdate 接受两个参数,接下来props变成什么样(nextProps),接下来state变成什么样(nextStates)
	// 用nextProps, nextStates和现在的Prop和state做对比,决定是否执行render
	shouldComponentUpdate(nextProps, nextStates) {
		console.log('child--shouldComponentUpdate')
		// 是否render决定于props.content
		if (nextProps.content !== this.props.content) {
			// 有变化,需要执行render
			return true
		} else {
			// 没有变化,不需要render
			return false
		}
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
		console.log('child: componentWillUnmount')
	}

	handleClick() {
		const { index, deleteItem } = this.props
		deleteItem(index)
	}
}

export default TodoItem;
