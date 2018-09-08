import React, { Component } from 'react';
import './share.css'
import Rule from './compentents/rule'
import axios from 'axios'

class App extends Component {
	constructor(props) {
	  super(props);
		this.state = {
			ruleShow: false
		}
	}
  render() {
    return (
      <div className="container">
        <div className="wrap">
					{/* top--img */}
          <div className="topImg">
            <img src={require("./img/itrTop1.png")} />
            <div
							className="rulePop"
							onClick={this.showRule.bind(this)}
						>活动规则</div>
          </div>
        </div>

				{/* btm 结构 */}
				<div id="content">
					<div className="topImg">
						<img src={require("./img/1.png")} />
					</div>
					<img onClick={this.goDetail.bind(this)} className="btmImg" src={require("./img/2.jpg")} />
				</div>

        {/* 规则 */}
        <Rule hideRule={this.showRule.bind(this)} show={this.state.ruleShow} />
      </div>
    );
  }

  showRule () {
		this.setState({
      ruleShow: !this.state.ruleShow
    });
  }
	goDetail () {
		//  判断是否参加
		// /wx/giveMemberActivity/parent/parentInfo
		// http://yoocorrect.test1.yoomath.com
		axios.get('/ycorrect/user/login?username=秋天&password=654321')
      .then( (response)=> {
				console.log(response)
			})
      .catch(function (error) {
          console.log(error);
      })
	}
}

export default App;
