import React, { Component } from 'react';
import axios from 'axios'
import { BrowserRouter, Route } from 'react-router-dom'
import Login from './wechat/login/'
import Shore from './wechat/home/'
import Doc from './doc-learn/'

class App extends Component {
	constructor(props) {
	  super(props);
	}
  render() {
    return (
      <BrowserRouter>
        <div className="container">
					<Route path='/' exact component={Doc}></Route>
          <Route path='/share' exact component={Shore}></Route>
          <Route path='/login' exact component={Login}></Route>
        </div>
      </BrowserRouter>
    );
  }

}

export default App;
