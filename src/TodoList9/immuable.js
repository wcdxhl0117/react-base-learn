import React, { Component } from 'react';
// Map, fromJS 会生成一个immutable对象
import {Map, fromJS} from 'immutable'

// let m1 = Map({'a': '1', b: '2'})
let m1 = fromJS({'a': '1', b: '2'})

// 单层改变和取值用set和get，如果是多层改变和取值用setIn和getIn: setIn(['a','b'], '2333'),即将a下面的b改变成2333
// 另外一个updateIn：updateIn(['a','b'], value=> {value + 1})，updateIn可一接受一个回掉改变值

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
