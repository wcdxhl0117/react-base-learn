import React, { Component } from 'react';
import './share.css'
import Rule from './compentents/rule'

class App extends Component {
	constructor(props) {
	  super(props);
		this.state = {
			ruleShow: 'display: none'
		}
	}
  render() {
    return (
      <div className="container">
        <div className="wrap">
          <div className="topImg">
            <img src={require("./img/itrTop1.png")} />
            <div onClick={this.showRule.bind(this)}>活动规则</div>
          </div>
        </div>
        {/* 规则 */}
        <Rule />
      </div>
    );
  }

  showRule () {
    
  }
}

export default App;
