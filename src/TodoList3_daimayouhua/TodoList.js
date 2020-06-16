import React, { Component, Fragment } from 'react';
import TodoItem from './TodoItem'
// 样式引入放最下面
import './style.css'

class TodoList extends Component {
	constructor(props) {
		super(props)
		this.state = {
			inputValue: '',
			list: []
		}
		// this绑定统一放到constructor里面,提升性能
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
						// 数组的map方法
						// this.state.list.map((item, index) => {
						// 	return (
						// 		<TodoItem
						// 			key={index}
						// 			// 传入props
						// 			content={item}
						// 			index={index}
						// 			// 将方法传入子组件,this指向父组件
						// 			deleteItem={this.handleDeleteItem}
						// 		/>
						// 	)
						// })

						// jsx里一般是页面需要显示的内容,这里map柔和一些逻辑,会使得jsx看上去很长,可以提出来,放到一个方法里面
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
					// 传入props
					content={item}
					index={index}
					// 将方法传入子组件,this指向父组件
					deleteItem={this.handleDeleteItem}
				/>
			)
		})
	}
	// 输入
	handleInputChange(e) {
		// console.log(e.target.value)
		// console.log(this)
		// 新版改变state更推荐的方式,是返回一个函数; 甚至es6一个对象可以写一行,不要return了
		// 这种方式是异步的设置,所以需要对value做一个保存,再在setstate中使用就不会报错
		const value = e.target.value
		this.setState(() => {
			return {
				inputValue: value
			}
		})
		// this.setState({
		// 	inputValue: e.target.value
		// })
	}
	// 新增
	handleBtnClick() {
		// state修改方式,注意setState接收一个参数是prevState,是修改数据之前一次的值
		this.setState((prevState) => {
			return {
				list: [...prevState.list, prevState.inputValue],
				inputValue: ''
			}
		})
		// this.setState({
		// 	// es6的展开运算符
		// 	list: [...this.state.list, this.state.inputValue],
		// 	// 添加之后，清空输入框内容
		// 	inputValue: ''
		// })
	}
	// 删除
	handleDeleteItem(index) {
		//// state修改方式
		this.setState((prevState) => {
			const list = [...prevState.list]
			list.splice(index, 1)
			return {
				list
			}
		})

		// // console.log(index)
		// const list = [...this.state.list]
		// // 下标为index的项删除
		// list.splice(index, 1)
		// this.setState({
		// 	list: list
		// })
	}
}
export default TodoList;
