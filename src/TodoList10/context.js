import React, { Component } from 'react';
import PropTypes from 'prop-types'

class Header extends Component{
	render() {
		 return (
			 <div>
				 <Title />
			 </div>
		 )
	}
}

class Main extends Component{
	render() {
		 return (
			 <div>
				 <Content />
			 </div>
		 )
	} 
}

class Title extends Component{
	static contextTypes ={
		color: PropTypes.string 
	}
	render() {
		 return (
			 <div style={{color: this.context.color}}>
				 这里是标题部分
			 </div>
		 )
	} 
}
 
class Content extends Component{
	static contextTypes ={
		color: PropTypes.string,
		setColor: PropTypes.func
	}
	render() {
		 return (
			 <div style={{color: this.context.color}}>
				 这里是内容部分
				 <button onClick={() => this.context.setColor('green')}>变为绿色</button>
				 <button onClick={() => this.context.setColor('yellow')}>变为黄色</button>
			 </div>
		 )
	} 
}
 
class HomePage extends Component { 
	static childContextTypes = {
		color: PropTypes.string,
		setColor: PropTypes.func
	}
	constructor(props) {
		super(props);
		this.state ={
			color: 'red'
		}
	}
	getChildContext() {
		return {
			color: this.state.color,
		 	setColor: this.setColor
		}
	}
	 
	setColor = (color) => {
		this.setState({color})
	}
	render() {
		return (
			<div>
				<Header />
				<Main />
			</div>
		)
	}
}

export default HomePage;
   