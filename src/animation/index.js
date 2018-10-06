import React, { Component } from 'react';
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
  			<div className={this.state.show ? 'show' : 'hide'}>hello</div>
        <button onClick = {this.handleToggole}>toggole-transtion</button>

        {/* css3的animation动画效果 */}
  			<div className={this.state.show ? 'show' : 'hide'}>hello</div>
        <button onClick = {this.handleToggole}>toggole-animation</button>
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

}

export default Animation;
