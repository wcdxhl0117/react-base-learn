import { CHANGE_INPUT_VALUE, ADD_TODO_ITEM, DELETE_TODO_ITEM, INIT_LIST_ACTION } from './actionTypes';
import axios from 'axios'

export const getInputChangeAction = (value) => {
  return {
    type: CHANGE_INPUT_VALUE,
    value
  }
}

export const getAddItemAction = () => {
  return {
    type: ADD_TODO_ITEM
  }
}

export const getDeleteItemAction = (index) => {
  return {
    type: DELETE_TODO_ITEM,
    index
  }
}

// 异步获取数据
export const initListAction = (data) => {
  return {
    type: INIT_LIST_ACTION,
    data
  }
}

// 异步操作redux-thunk
export const getTodoList = () => {
  // 使用了redux-thunk就能return函数, 可以把异步的ajax放在这里了
  // 在actionCreator返回如果是函数式的可直接传入store的dispatch, 这样里面就能直接使用了, 不必再去引入store等一些列流程
  return (dispatch) => {
    axios.get('/list.json').then((res) => {
			console.log(res);
			const data = res.data;
			const action = initListAction(data);
			dispatch(action);
		}).catch((error) => {
			console.log(error)
		})
  }
}
