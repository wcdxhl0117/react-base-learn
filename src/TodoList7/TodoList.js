import React, { Component, Fragment } from 'react';
import TodoItem from './TodoItem'
import './style.css'

class TodoList extends Component {
	constructor(props) {
		super(props)
		this.state = {
			inputValue: '',
			list: []
		}
		this.handleInputChange = this.handleInputChange.bind(this)
		this.handleBtnClick = this.handleBtnClick.bind(this)
		this.handleDeleteItem = this.handleDeleteItem.bind(this)
	}
  render() {
    return (
			<Fragment>
				<div>
					<label htmlFor='inputLabel'>请输入内容</label>
					<input 
						// ref引用dom节点
						ref={(input) => {this.input = input}}
						id='inputLabel'
						className='ipt'
						value={this.state.inputValue} 
						onChange={this.handleInputChange}
					/>
					<button
						onClick={this.handleBtnClick}
					>提交</button>
				</div>
				<ul ref={(ul) => {this.ul = ul}}>
					{	
						this.getTodoItem()
					}
				</ul>
			</Fragment>
    	)
	}
	getTodoItem() {
		return this.state.list.map((item, index) => {
			return (
				<TodoItem 
					key={index}
					content={item}
					index={index}
					deleteItem={this.handleDeleteItem}
				/>
			)
		})
	}
	// 输入
	handleInputChange(e) {
		// 在react中可以用e.target获取到元素节点，也可以用ref
		console.log(e.target)
		console.log(this.input)
		const value = e.target.value
		this.setState(() => {
			return {
				inputValue: value
			}
		})
	}
	// 新增
	handleBtnClick() {
		// setState第二个参数,setState是异步函数，第二个函数是setState执行完再执行
		this.setState((prevState) => {
			return {
				list: [...prevState.list, prevState.inputValue],
				inputValue: ''
			}
		}, () => {
			// 这里能拿到正确的长度
			console.log(this.ul.querySelectorAll('div').length)
		})
		// 不能得到正确的长度，因为setState是异步执行，所以这里是设置之前的长度
		console.log(this.ul.querySelectorAll('div').length)
	}
	// 删除
	handleDeleteItem(index) {
		this.setState((prevState) => {
			const list = [...prevState.list]
			list.splice(index, 1)
			return {
				list
			}
		})
	}
}
export default TodoList;
