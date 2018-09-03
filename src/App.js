import React, { Component } from 'react';

class App extends Component {
	constructor(props) {
	  super(props);
		this.state = {
			inputVulue: '我是最开始的值',
			list: ['麻痹我是第一项', '大爷的我是第二项']
		}
	}
  render() {
    return (
      <div className="App" onClick={this.clickEvent.bind(this)}>
				{this.state.inputVulue}
				{
					// 列表 
				}
				<ul>
					{
						this.state.list.map((item, index) => {
							return <li key={index}>{item}</li>
						})
					}
				</ul>
      </div>
    );
  }
	
	clickEvent() {
		// 改变 
		this.setState({
			inputVulue : '我是改变的值'
		})
	}
}

export default App;
