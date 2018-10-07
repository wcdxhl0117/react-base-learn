import { CHANGE_INPUT_VALUE, ADD_TODO_ITEM, DELETE_TODO_ITEM, INIT_LIST_ACTION, GET_INIT_LIST } from './actionTypes';

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


// saga异步action
export const getInitList = (data) => {
  return {
    type: GET_INIT_LIST
  }
}
