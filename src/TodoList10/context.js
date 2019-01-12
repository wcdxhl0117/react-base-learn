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
		color: PropTypes.string 
	}
	render() {
		 return (
			 <div style={{color: this.context.color}}>
				 这里是内容部分
			 </div>
		 )
	} 
}
 
class HomePage extends Component { 
	static childContextTypes = {
		color: PropTypes.string
	}
	constructor(props) {
		super(props);
		this.state ={
			color: 'red'
		}
	}
	getChildContext() {
		return {
			color: this.state.color
		}
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
   