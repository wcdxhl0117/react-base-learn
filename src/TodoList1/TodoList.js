import React, { Component, Fragment } from 'react';
//// 引入一个不被显示的包裹元素---Fragment占位符

import './style.css'

class TodoList extends Component {
	// react组件中最优先执行的函数
	constructor(props) {
		//// 继承执行下父级的构造函数
		super(props)
		//// react定义数据需要定义在状态里面,react状态在this.state中
		this.state = {
			inputValue: '',
			list: []
		}
	}
  render() {
    return (
			<Fragment>
				<div>
					{
						// label商家for，会认为是循环的for，要用htmlFor代替
					}
					<label htmlFor='inputLabel'>请输入内容</label>
					<input 
						id='inputLabel'
						className='ipt'
						value={this.state.inputValue} 
						onChange={this.handleInputChange.bind(this)}
					/>
					<button
						onClick={this.handleBtnClick.bind(this)}
					>提交</button>
				</div>
				<ul>
					{
						// 数组的map方法
						this.state.list.map((item, index) => {
							return (<li 
								key={index}
								// 传值
								onClick={this.handleDeleteItem.bind(this, index)}
								//// 如果标签不转译写法，两个花括号，这样写的话，标签内的{item}就不需要了
								// dangerouslySetInnerHTML={{__html: item}}
							>{item}</li>)
						})
					}
				</ul>
				{/* 这里是多行注释的方法 */} 
				{
					// 这里是单行注释的方法，注意花括号需要换行
				}
			</Fragment>
    )
	}
	// 输入
	handleInputChange(e) {
		// console.log(e.target.value)
		// console.log(this)
		//// react想改变state里的数据，不能直接改，需要使用this.setState({})方法
		this.setState({
			inputValue: e.target.value
		})
	}
	// 新增
	handleBtnClick() {
		this.setState({
			// es6的展开运算符，叼的一批
			list: [...this.state.list, this.state.inputValue],
			// 添加之后，清空输入框内容
			inputValue: ''
		})
		this.state.list.push(this.state.inputValue)
	}
	// 删除
	handleDeleteItem(index) {
		// console.log(index)
		// 将list做一层拷贝，原因是不能直接改state，react改变数据必须通过setState，下面的方式视乎也行，但是这中方式是错误的做法
					// this.state.list.splice(index, 1)
					// this.setState({
					// 	list: this.state.list
					// })
		// 以上不正确，因为react有个innutable, state不允许我们做任何改变
		const list = [...this.state.list]
		// 下标为index的项删除
		list.splice(index, 1)
		this.setState({
			list: list
		})
	}
}
export default TodoList;
