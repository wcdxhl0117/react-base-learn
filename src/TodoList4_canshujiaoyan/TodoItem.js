import React, { Component } from 'react';
// 使用PropTypes做props的数据强校验
import PropTypes from 'prop-types';

class TodoItem extends Component {
	constructor(props) {
		super(props)
		this.handleClick = this.handleClick.bind(this)
	}
	render() {
		const { content, test } = this.props 
		return (
			<div
				onClick={this.handleClick}
			>{test} - {content}</div>
		)
	}
	handleClick() {
		const { index, deleteItem } = this.props 
		console.log(index)
		deleteItem(index)
	}
}

// 对TodoList做强校验, 注意是在组件外, 同时外面的propsTypes要小写, 里面的Proptypes要大写, 函数类型func,数组array, 元素element
TodoItem.propTypes = {
	// test父组件没传,但是也不会报错,这是强校验加入个isRequired,这样就能检测到没传值
	test: PropTypes.string.isRequired,
	// 多种默认类型的写法
	content: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
	deleteItem: PropTypes.func,
	index: PropTypes.number
}
// 定义props的默认值
TodoItem.defaultProps = {
	test: 'hello world'
}

export default TodoItem;