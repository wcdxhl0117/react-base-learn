import React, { Component, Fragment } from 'react';
import TodoItem from './TodoItem'

import './style.css'

// 将组件拆分为两部分,首先是上面的输入框和按钮为一个组件,然后下面的每一项为一个组件
class TodoList extends Component {
	constructor(props) {
		super(props)
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
				<div>
					{
						// 数组的map方法
						this.state.list.map((item, index) => {
							return (
								<TodoItem 
									key={index}
									// 传入props
									content={item}
									index={index}
									// 将方法传入子组件,this指向父组件
									deleteItem={this.handleDeleteItem.bind(this)}
								/>
								// <li 
								// 	key={index}
								// 	// 传值
								// 	onClick={this.handleDeleteItem.bind(this, index)}
								// 	// dangerouslySetInnerHTML={{__html: item}}
								// >{item}</li>
							)
						})
					}
				</div>
			</Fragment>
    )
	}
	// 输入
	handleInputChange(e) {
		// console.log(e.target.value)
		// console.log(this)
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
	}
	// 删除
	handleDeleteItem(index) {
		// console.log(index)
		const list = [...this.state.list]
		// 下标为index的项删除
		list.splice(index, 1)
		this.setState({
			list: list
		})
	}
}
export default TodoList;
