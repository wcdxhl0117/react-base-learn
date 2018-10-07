import React, { Component } from 'react';
// 引入store
import store from './store/';
// 引入react-redux连接,就能通过connect方法获取到store里面的数据
import { connect } from 'react-redux';

class TodoList extends Component {
	constructor(props) {
		super(props);

	}
  render() {
		const { inputValue, InputChange, handleClick,handleDeleteItem } = this.props;
    return (
				<div>
					<div>
						<input onChange={InputChange} value={inputValue} />
						<button onClick={handleClick}>提交</button>
					</div>
					<ul>
						{
							this.props.list.map((item, index) => {
								return <li onClick={() => {this.props.handleDeleteItem(index)}} key={index}>{item}</li>
							})
						}
					</ul>
				</div>
    	)
	}
}

// 把store里面的数据映射到组件,变成组件的props
const mapStateToProps = (state) => {
	// 下面时映射关系
	return {
		inputValue: state.inputValue,
		list: state.list
	}
}

// 如果想对store的数据做修改,eact-redux将store的dispatch方,挂载到props上,所以可以通过props调用到dispatch,
const mapDispatchProps = (dispatch) => {
	return {
		// 这里调用dispatch改变store
		InputChange(e) {
			// console.log(e.target.value)
			const action = {
				type: 'change_input_value',
				value: e.target.value
			}
			dispatch(action);
		},
		handleClick() {
			const action = {
				type: 'add_todo_item'
			}
			dispatch(action);
		},
		handleDeleteItem(index) {
			const action = {
				type: 'delete_todo_item',
				index
			}
			dispatch(action);
		}
	}
}

// 其实这下面export的可以理解为容器组件,todolist页完全能拆分为UI组件
export default connect(mapStateToProps, mapDispatchProps)(TodoList);
