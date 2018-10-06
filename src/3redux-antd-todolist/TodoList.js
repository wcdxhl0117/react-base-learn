import React, { Component } from 'react';
// 引入store
import store from './store/'
// import { CHANGE_INPUT_VALUE, ADD_TODO_ITEM, DELETE_TODO_ITEM } from './store/actionTypes'
// 引入actionCreators里面的action
import { getInputChangeAction, getAddItemAction, getDeleteItemAction } from './store/actionCreators'
import 'antd/dist/antd.css';
import { Input, Button, List } from 'antd';

class TodoList extends Component {
	constructor(props) {
		super(props);
		this.handleInputChange = this.handleInputChange.bind(this);
		this.handleStoreChange = this.handleStoreChange.bind(this);
		this.handleBtnClick = this.handleBtnClick.bind(this);
		this.state = store.getState();
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
		// actionCreators用法
		const action = getInputChangeAction(e.target.value)
		store.dispatch(action);
	}

	handleStoreChange() {
		 this.setState(store.getState());
	}

	// 点击添加item的store逻辑
	handleBtnClick() {
		const action = getAddItemAction();
		store.dispatch(action);
	}

	// 删除item逻辑
	handleDeleteItem(index) {
		// console.log(index)
		const action = getDeleteItemAction(index);
		store.dispatch(action);
	}
}

export default TodoList;
