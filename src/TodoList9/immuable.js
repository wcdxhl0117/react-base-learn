import React, { Component } from 'react';
import {Map} from 'immutable'

let m1 = Map({'a': '1', b: '2'})
let m2 = m1.set('a', '1111')
console.log(m1.get('a'))
console.log(m2.get('a'))

class TodoItem extends Component {
	constructor(props) {
		super(props)
	}
	render() {
		return (
			<div>123</div>
		)
	}
}

export default TodoItem;
