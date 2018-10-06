import React, { Component, Fragment } from 'react';
import TodoItem from './TodoItem'
import './style.css'

/* 
	生命周期函数是指在某一个时刻组件会自动调用执行的函数
	注意：constructor符合生命周期定义，但是他不是react独有的，他是ES6自带的，所以不归类在react生命周期函数里
	1.Mounting(挂在)：componentWillMount(挂载前)，render(渲染)，componentDidMount(挂载完毕)
	2.Updation:
		props改变：componentWillReceiveProps(props改变时特有)
				  shouldComponentUpdate(返回true时往下执行，返回false不执行下面更新的周期函数)
				  componentWillUpdate(即将更新，即更新前执行)
				  render(跟新)
				  componentDidUpdate(跟新结束)

		state改变：shouldComponentUpdate(返回true时往下执行，返回false不执行下面更新的周期函数)
				  componentWillUpdate(即将更新，即更新前执行)
				  render(跟新)
				  componentDidUpdate(跟新结束)

	3.Unmounting: componentWillUnmount(组件卸载前)
	注意:生命周期函数都可以没有,除了render必须存在!!!!!
*/

/*
	生命周期函数使用场景:
		1.父组件的render被执行,子组件的render也会被执行,这样有性能损耗:
			优化: 子组件中用生命周期函数中的shouldComponentUpdate来规避子组件不必要的render
		2.
*/

/*
	总结下目前为止,react性能优化的点:
		1.事件的改变this指向,放在constructor中,这样能保证作用于绑定操作只执行一次
		2.setState是一部操作,可以将多次数据改变结合成一次来做
		3.react用了虚拟DOM概念,还有同层比对,以及key等概念,来提升虚拟dom比对速度,从而提升react性能
		4.借助shouldComponentUpdate,防止不必要的render,节约性能
*/


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

	// componentWillMount：当组件即将被挂载到页面的时刻执行（一次）
	componentWillMount() {
		console.log('1.componentWillMount')
	}

	// render
	render() {
		console.log('2.render')
		return (
			<Fragment>
				<div>
					<label htmlFor='inputLabel'>请输入内容</label>
					<input 
						// ref引用dom节点
						ref={(input) => {this.input = input}}
						id='inputLabel'
						className='ipt'
						value={this.state.inputValue} 
						onChange={this.handleInputChange}
					/>
					<button
						onClick={this.handleBtnClick}
					>提交</button>
				</div>
				<ul ref={(ul) => {this.ul = ul}}>
					{	
						this.getTodoItem()
					}
				</ul>
			</Fragment>
    	)
	}

	// componentDidMount：当组建挂载之后执行（一次）
	componentDidMount() {
		console.log('3.componentDidMount')
	}

	// shouldComponentUpdate（组件被更新之前被执行）: 必须返回布尔值，返回true则继续，返回false中断
	shouldComponentUpdate() {
		console.log('shouldComponentUpdate')
		return true
	}

	/* 
		componentWillUpdate,组件更新之前执行，但是在shouldComponentUpdate之后执行，
		如果shouldComponentUpdate返回true执行，如果返回false，就不执行了
	*/
	componentWillUpdate() {
		console.log('componentWillUpdate')
	}

	// componentDidUpdate: 组件更新完成之后执行
	componentDidUpdate() {
		console.log('componentDidUpdate')
	}

	// componentWillReceiveProps:在TodoItem有props,这个效果在TodoItem
	componentWillReceiveProps() {
		console.log('father: componentWillReceiveProps')
	}

	// componentWillUnmount: 在TodoItem看效果
	componentWillUnmount() {
		console.log('father: componentWillUnmount')
	}


//////////////////////////////////////////////////////////////////////////////////////////////////////////////////
	// 下面都是私有函数
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
		// 在react中可以用e.target获取到元素节点，也可以用ref
		// console.log(e.target)
		// console.log(this.input)
		const value = e.target.value
		this.setState(() => {
			return {
				inputValue: value
			}
		})
	}
	// 新增
	handleBtnClick() {
		// setState第二个参数,setState是异步函数，第二个函数是setState执行完再执行
		// setState和ref合用会有坑，记得将ref放在第二个参数函数里面
		this.setState((prevState) => {
			return {
				list: [...prevState.list, prevState.inputValue],
				inputValue: ''
			}
		}, () => {
			// 这里能拿到正确的长度
			console.log(this.ul.querySelectorAll('div').length)
		})
		// 不能得到正确的长度，因为setState是异步执行，所以这里是设置之前的长度
		console.log(this.ul.querySelectorAll('div').length)
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
