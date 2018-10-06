import React, { Component, Fragment } from 'react';
import TodoItem from './TodoItem'
import axios from 'axios';
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

	// ajax请求，Charles数据模拟
	componentDidMount() {
		/* charles：
			1.Tools --> map Local... --> add
			2.protocol:http - host:localhost - port:3000 - path:api/todolist - Local path:代理数据路径
			3.勾上Enable Map Local 和杠添加的代理路径
		*/
		axios.get('/api/todolist')
      .then((response)=> {
				console.log(response)
				// 拿到数据，这里setState设置数据
			})
      .catch(function (error) {
          console.log(error);
      })
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
