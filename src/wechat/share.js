import React, { Component } from 'react';
import './share.css'
import Rule from './compentents/rule'

class App extends Component {
	constructor(props) {
	  super(props);
		this.state = {
			ruleShow: true
		}
	}
  render() {
    return (
      <div className="container">
        <div className="wrap">
					{/* top--img */}
          <div className="topImg">
            <img src={require("./img/itrTop1.png")} />
            <div className="rulePop" onClick={this.showRule.bind(this)}>活动规则</div>
          </div>
        </div>

				{/* btm 结构 */}
				<div id="content">

				</div>

        {/* 规则 */}
        <Rule show={this.state.ruleShow} />
      </div>
    );
  }

  showRule () {

  }
}

export default App;
