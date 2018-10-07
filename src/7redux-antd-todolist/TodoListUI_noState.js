import React, { Component } from 'react';
import { Input, Button, List } from 'antd';

// 其实无状态组件就是一个函数，如果一个组件只有一个render的话，我们完全可以用一个无状态组件来替换这个组件
// 无状态组件因为他就是一个函数，所以性能高，普通组件是一个类，里面有很多生命周期函数，所以性能远不如无状组件
// UI组件一般都能改为无状态组件
const TodoListUI = (props) => {
  // 就不需要this.props，直接使用props
  return (
    <div style={{margin:'20px'}}>
      <Input
        placeholder="todo info"
        value={props.inputValue}
        style={{width:'300px'}}
        onChange={props.handleInputChange}
      />
      <Button onClick={props.handleBtnClick} type="primary">提交</Button>
      <List
        style={{width: '300px'}}
        bordered
        dataSource={props.list}
        // 这个拆分注意方法
        renderItem={(item, index) => (<List.Item onClick={() => {props.handleDeleteItem(index)}}>{item}</List.Item>)}
      />
    </div>
  )
}

export default TodoListUI;
