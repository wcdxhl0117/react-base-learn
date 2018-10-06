import React, { Component } from 'react';
import { Input, Button, List } from 'antd';

class TodoListUI extends Component {
  render() {
    return (
      <div style={{margin:'20px'}}>
				<Input
					placeholder="todo info"
					value={this.props.inputValue}
				  style={{width:'300px'}}
					onChange={this.props.handleInputChange}
				/>
				<Button onClick={this.props.handleBtnClick} type="primary">提交</Button>
				<List
					style={{width: '300px'}}
					bordered
					dataSource={this.props.list}
          // 这个拆分注意方法
          // renderItem={(item, index) => (<List.Item onClick={this.handleDeleteItem.bind(this, index)}>{item}</List.Item>)}
					renderItem={(item, index) => (<List.Item onClick={(index) => {this.props.handleDeleteItem(index)}}>{item}</List.Item>)}
				/>
			</div>
    )
  }
}

export default TodoListUI;
