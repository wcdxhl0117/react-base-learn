import React, { Component } from 'react';
import './share.css'

class App extends Component {
	constructor(props) {
	  super(props);
		this.state = {
			
		}
	}
  render() {
    return (
      <div className="container">
        <div className="wrap">
        <div className="topImg">
          <img src={require("./img/itrTop1.png")} />
          <div>活动规则</div>
        </div>
        </div>
      </div>
    );
  }
}

export default App;
