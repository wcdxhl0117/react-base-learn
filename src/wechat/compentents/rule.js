import React, { Component } from 'react';
import './rule.css'

class App extends Component {
	constructor(props) {
	  super(props);
		this.state = {

		}
	}

  render() {
    return (
      <div className={ `rule ${this.props.show?'showRule':''}` }>
        <div className='popContent'>
					<div className="paragraph">1.活动时间：即日起至2018.09.07;</div>
					<div className="paragraph">2.每个用户可领取1次会员，每天最多给别人助力3次;</div>
					<div className="paragraph">3.邀请7位好友助力后，才可获得7天VIP培优会员;</div>
					<div className="paragraph">4.新关注公众号的用户可额外再获得1天VIP培优会员（每个微信号仅可得1次);</div>
					<div className="paragraph">5.获得的VIP培优会员预计在24小时内到账，如有问题，请添加客服微信：yoomath1 进行咨询;</div>
					<div onClick={this.props.hideRule} className="btn">知道了</div>
			</div>
      </div>
    );
  }

}

export default App;
