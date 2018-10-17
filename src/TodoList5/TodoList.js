import React, { Component, Fragment } from 'react';
import TodoItem from './TodoItem'
import Test from './test'
import './style.css'


class TodoList extends Component {
	constructor(props) {
		super(props)
		// state,props和render的关系
		// 当组件的state或者props发生变化时, render函数就会重新执行
		this.state = {
			inputValue: '',
			list: []
		}
		this.handleInputChange = this.handleInputChange.bind(this)
		this.handleBtnClick = this.handleBtnClick.bind(this)
		this.handleDeleteItem = this.handleDeleteItem.bind(this)
	}
  render() {
	console.log('render')
    return (
			<Fragment>
				{/* 子组件的props改变,子组件的render也会重新执行 */}
				<Test content={this.state.inputValue} />
				<div>
					<label htmlFor='inputLabel'>请输入内容</label>
					<input 
						id='inputLabel'
						className='ipt'
						value={this.state.inputValue} 
						onChange={this.handleInputChange}
					/>
					<button
						onClick={this.handleBtnClick}
					>提交</button>
				</div>
				<ul>
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
		const value = e.target.value
		this.setState(() => {
			return {
				inputValue: value
			}
		})
	}
	// 新增
	handleBtnClick() {
		this.setState((prevState) => {
			return {
				list: [...prevState.list, prevState.inputValue],
				inputValue: ''
			}
		})
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
