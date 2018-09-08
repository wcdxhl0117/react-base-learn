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
        {  }
      </div>
    );
  }

  showRule () {

  }
}

export default App;
