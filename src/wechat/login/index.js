import React, { Component } from 'react';
import './style.js'
import axios from 'axios'


class Login extends Component {
	constructor(props) {
	  super(props);
		this.state = {

		}
	}
  render() {
		return (
			<div>
				<input placeholder='账号' />
				<input placeholder='密码' type='password' />
				<button>登陆</button>
			</div>
		)
	}

}

export default Login;
