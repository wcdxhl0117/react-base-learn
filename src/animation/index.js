import React, { Component } from 'react';
// CSSTransition为react-trantion-group的一部分
import { CSSTransition } from 'react-transition-group';
import './style.css'

class Animation extends Component {
	constructor(props) {
		super(props)
    this.state = {
      show: true
    }
    this.handleToggole = this.handleToggole.bind(this)
	}
	render() {
		return (
      <div>
        {/* css3的transtion过度效果 */}
        {/*
    			<div className={this.state.show ? 'show' : 'hide'}>hello</div>
          <button onClick = {this.handleToggole}>toggole-transtion</button>
        */}
        {/* css3的animation动画效果 */}
        {/*
    			<div className={this.state.show ? 'show' : 'hide'}>hello</div>
          <button onClick = {this.handleToggole}>toggole-animation</button>
        */}
        {/*
           react-transition-group
           如果是多个元素要实现动画，需要引入：TransitionGroup ---> <TransitionGroup></TransitionGroup>
          在具体元素在再用CSSTransition，同时CSSTransition的in不需要了
        */}
        <CSSTransition
          in={this.state.show}
          timeout={1000}
          classNames='fade'
          //  入场动画结束调用
          onEntered={this.enterEnd}
          // 第一次展示也要动画效果，会在入场时增加一个class:fade-appear,在入场过程中增加class:fade-appear-active
          appear={true}
        >
          <div>hello</div>
        </CSSTransition>
        <button onClick = {this.handleToggole}>toggole-react-trantion-group</button>

      </div>
		)
	}

  handleToggole() {
    this.setState(() => {
      return {
        show: !this.state.show
      }
    })
  }

  enterEnd() {
    console.log('enter-end')
  }

}

export default Animation;
