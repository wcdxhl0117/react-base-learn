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
	render() {
		 return (
			 <div>
				 这里是标题部分
			 </div>
		 )
	} 
}
 
class Content extends Component{
	render() {
		 return (
			 <div>
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
   