import React, { Component } from 'react';
// 引入store
import store from './store/'
import 'antd/dist/antd.css';
import { Input, Button, List } from 'antd';

class TodoList extends Component {
	// 在constructor去调用store
	constructor(props) {
		super(props);
		// store提供一个获取store的方法--getState()
		console.log(store.getState());
		this.state = store.getState();
	}

  render() {
    return (
			<div style={{margin:'20px'}}>
				<Input placeholder="todo info" value={this.state.inputValue} style={{width:'300px'}} />	
				<Button type="primary">提交</Button>
				<List
					style={{width: '300px'}}
					bordered
					dataSource={this.state.list}
					renderItem={item => (<List.Item>{item}</List.Item>)}
				/>
			</div>
    	)
	}
}
export default TodoList;
