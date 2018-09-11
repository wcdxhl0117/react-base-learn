import React, { Component } from 'react';
import './share.scss'
import Rule from './compentents/rule'
import axios from 'axios'

class App extends Component {
	constructor(props) {
	  super(props);
		this.state = {
			ruleShow: false,
			startY: '',
			moveY: '',
			moveLong: '',
			initH: '',
			minH: '',
			maxH: ''
		}
	}
  render() {
    return (
      <div className="container">
        <div className="wrap">
					{/* top--img */}
          <div className="topImg">
            <img src={require("./img/itrTop1.png")} alt='' />
            <div
							className="rulePop"
							onClick={this.showRule.bind(this)}
						>活动规则</div>
          </div>
        </div>

				{/* btm 结构 */}
				<div id="content">
					<div className="topImg">
						<img src={require("./img/1.png")} alt='' />
					</div>
					<img onClick={this.goDetail.bind(this)} className="btmImg" src={require("./img/2.jpg")} alt='' />
				</div>
				{/* 上拉组建 */}
		    <div className="btmWrap"
					ref={this.btmWrap}
					onTouchStart={this.Tstart.bind(this)}
					onTouchMove={this.Tmove.bind(this)}
					onTouchEnd={this.Tend.bind(this)}
				>
		        <div className="topTitle">此活动必须父母才能领取</div>
		        <div id="toParent" className="comBtn">微信分享给父母，进行解锁领取</div>
		        <div id="toQQ" className="comBtn">QQ分享给父母，进行解锁领取</div>
		        <div id="toStu" className="comBtn">将好消息告诉其他同学</div>
		    </div>
				<div ref="minH" className="minH"></div>
		    <div ref="maxH" className="maxH"></div>
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
		axios.get('/ycorrect/user/login?username=七八九九&password=123456')
      .then( (response)=> {
				console.log(response)
			})
      .catch(function (error) {
          console.log(error);
      })
	}

	// onTouchstart
	Tstart (e) {
		const touch = e.touches[0]
		this.setState({
			startY: touch.pageY,
			initH: document.querySelectorAll('.btmWrap')[0].clientHeight,
			minH: document.querySelectorAll('.minH')[0].clientHeight,
			maxH: document.querySelectorAll('.maxH')[0].clientHeight
		})
	}
	// onTouchMove
	Tmove (e) {
		const touch = e.touches[0]
		this.setState({
			moveY: touch.pageY,
			{/* 笔记本键盘真是特别难用，特别是在使用数字真是别不爽 */}
			moveLong: this.state.startY - this.state.moveY
		})
		let AllH = this.state.startY - this.state.moveY + this.state.initH
		if (AllH > this.state.maxH) {
				AllH = this.state.maxH
		} else if (AllH < this.state.minH) {
				AllH = this.state.minH
		} else {
				AllH = this.state.startY - this.state.moveY + this.state.initH
		}
		document.querySelectorAll('.btmWrap')[0].style.height = AllH + 'px'
	}
	// onTouchEnd
	Tend () {
		if (this.state.moveLong > 30) {
				document.querySelectorAll('.btmWrap')[0].style.height = this.state.maxH + 'px'
		} else if (this.state.moveLong > 0 && this.state.moveLong <= 30) {
				document.querySelectorAll('.btmWrap')[0].style.height = this.state.minH + 'px'
		} else if (this.state.moveLong < -30) {
				document.querySelectorAll('.btmWrap')[0].style.height = this.state.minH + 'px'
		} else if (this.state.moveLong > -30 && this.state.moveLong < 0) {
				document.querySelectorAll('.btmWrap')[0].style.height = this.state.maxH + 'px'
		}
	}
}

export default App;
