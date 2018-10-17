import React, { Component } from 'react';
import axios from 'axios'
// 引入store
import store from './store/'
// 引入actionCreators里面的action
import { getInputChangeAction, getAddItemAction, getDeleteItemAction, initListAction } from './store/actionCreators';

// antd样式
import 'antd/dist/antd.css';

/*
	UI组件和容器组件：
		逻辑和render拆分，UI组件页面渲染，容器组件负责页面逻辑
*/
// UI组件
import TodoListUI from './TodoListUI';
// 无状态组件
// import TodoListUI from './TodoListUI_noState';

class TodoList extends Component {
	constructor(props) {
		super(props);
		this.handleInputChange = this.handleInputChange.bind(this);
		this.handleStoreChange = this.handleStoreChange.bind(this);
		this.handleBtnClick = this.handleBtnClick.bind(this);
		// 拆分UI组件时，先绑定this指向
		this.handleDeleteItem = this.handleDeleteItem.bind(this);
		this.state = store.getState();
		store.subscribe(this.handleStoreChange)
	}

 // UI组件负责渲染页面
  render() {
    return (
			<TodoListUI
				inputValue={this.state.inputValue}
				handleInputChange={this.handleInputChange}
				handleBtnClick={this.handleBtnClick}
				list={this.state.list}
				handleDeleteItem={this.handleDeleteItem}
			/>
		)
	}

////// 演示redux如何异步获取数据
	componentDidMount() {
		axios.get('/list.json').then((res) => {
			console.log(res);
			const data = res.data;
			// 调用actionCreator里的异步方法, 去改变redux里的state
			const action = initListAction(data);
			store.dispatch(action);

		}).catch((error) => {
			console.log(error)
		})
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
