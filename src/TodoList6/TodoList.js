import React, { Component, Fragment } from 'react';
import TodoItem from './TodoItem'
import './style.css'

// 虚拟Dom理论:如果没有react, 自己实现render的思路
/*
	方法一
		1.定义state数据
		2.有一个模板,对应react中render的jsx
		3.把数据和模板相结合,生成真实DOM,渲染到页面
		4.state改变
		5.数据加模板生成真是DOM,替换原始DOM
		致命缺陷:第一次生成一个完整的DOM片段,第二次又称成一个完整的DOM片段,第二次DOM替换第一次的DOM,非常耗性能
	
	方法二:
		1.定义state数据
		2.有一个模板,对应react中render的jsx
		3.把数据和模板相结合,生成真实DOM, 渲染到页面
		4.state改变
		5.数据加模板结合,生成真实DOM,但并不替换原始DOM
		6.新的DOM和原始DOM做对比,找差异
		7.找出发生的变化
		8.只用新的DOM中改变的部分替换老的DOM中对应的DOM
		这种方式性能有所提升,因为DOM比对很耗新能,替换部分节约很多性能
		问题:虽然提升了DOM替换的性能,但有消耗了对比的性能,性能提升不明显

	方法三(react的方式):
		1.定义state数据
		2.有一个模板,对应react中render的jsx
		3.生成虚拟DOM(虚拟DOM就是一个js对象,用来描述真是DOM)
		4.把数据和模板相结合,生成真实DOM,来显示
			真实:<div id='abc'><span>hello word</span></div>
			虚拟:['div',{id: 'abc'}, ['span, {}, 'hello world']]
		5.state发生变化
		6.生成新的虚拟DOM   ['div',{id: 'abc'}, ['span, {}, 'ha ha']]
		7.比较原始虚拟dom和新的虚拟dom的区别,找到区别是span内容
		8.直接操作DOM,改变span中的内容
		优点:js创建一个js对象很简单,但是创建一个dom的性能损耗是比较大的
*/

/*
	深入了解虚拟DOM

		> render里的jsx首先被变成虚拟dom,就是对象,然后在被转换为真实dom
		> react的虚拟dom写法(render里面渲染div写法,非jsx,一般用jsx是为了方便): 
			return React.createElement('div', {}, 'item')  <=> return (<div>item</div>)
		> 虚拟dom好处总结:
			1.性能大幅提升
			2.使得跨端应用得以实现,react-native,原生应用可没有dom概念,js对象的虚拟dom能在原生识别,可以用虚拟dom在原生生成原生的组件
*/

/*
	虚拟DOM中的Diff算法
		> 虚拟dom比对的方式就是Diff算法.
		> 同级比较: 从第一层开始比较, 一直往下比较, 直到不同, react就把不同的dom下面的所有虚拟dom全部删除掉
		  重新生成一遍下面的dom. 同层比对好处就是算法简单, 这样比对速度快
		> 所以循环需要key, 这样虚拟dom比对时能知道谁是谁, 节约性能, 同时如果用index做key, 虚拟dom渲染时, 导致key不稳定, 无法关联			
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
