import React, { Component } from 'react';
// 引入store
import store from './store/'
import 'antd/dist/antd.css';
import { Input, Button, List } from 'antd';

class TodoList extends Component {
	// 在constructor去调用store
	constructor(props) {
		super(props);
		this.handleInputChange = this.handleInputChange.bind(this);
		this.handleStoreChange = this.handleStoreChange.bind(this);
		this.handleBtnClick = this.handleBtnClick.bind(this);
		// store提供一个获取store的方法--getState()
		console.log(store.getState());
		this.state = store.getState();
		// 监听store变化，触发更新，subscribe方法接受一个函数来更新组件的state
		store.subscribe(this.handleStoreChange)
	}

  render() {
    return (
			<div style={{margin:'20px'}}>
				<Input
					placeholder="todo info"
					value={this.state.inputValue}
				  style={{width:'300px'}}
					onChange={this.handleInputChange}
				/>
				<Button onClick={this.handleBtnClick} type="primary">提交</Button>
				<List
					style={{width: '300px'}}
					bordered
					dataSource={this.state.list}
					renderItem={(item, index) => (<List.Item onClick={this.handleDeleteItem.bind(this, index)}>{item}</List.Item>)}
				/>
			</div>
    	)
	}


	// 下面是私有方法
	//////////////////////////////////////////////////////////////////////////////
	handleInputChange(e) {
		// console.log(e.target.value)
		// 创建一个action
		const action = {
			type: 'change_input_value',
			value: e.target.value
		}
		// 派发action给store, store会把action的信息转发给reducer, reducer来做具体事情
		store.dispatch(action);
	}

	// store变化出发此方法
	handleStoreChange() {
		 console.log('store--change');
		 // 当store变化，重新调用store.getState()方法，设置组件的state
		 this.setState(store.getState());
	}

	// 点击添加item的store逻辑
	handleBtnClick() {
		const action = {
			type: 'add_todo_item'
		}
		store.dispatch(action)
	}

	// 删除item逻辑
	handleDeleteItem(index) {
		// console.log(index)
		const action = {
			type: 'delete_todo_item',
			index
		}
		store.dispatch(action);
	}
}

export default TodoList;
