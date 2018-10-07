import { CHANGE_INPUT_VALUE, ADD_TODO_ITEM, DELETE_TODO_ITEM } from './actionTypes';
// state默认值
const defaultState = {
    inputValue: '',
    list: []
}

export default (state = defaultState, action) => {
    // 输入
    if (action.type === CHANGE_INPUT_VALUE) {
      console.log(19)
      const newState = JSON.parse(JSON.stringify(state));
      newState.inputValue = action.value;
      return newState;
    }
    // 添加
    if (action.type === ADD_TODO_ITEM) {
      const newState = JSON.parse(JSON.stringify(state));
      newState.list.push(newState.inputValue);
      newState.inputValue = '';
      return newState;
    }
    // 删除
    if (action.type === DELETE_TODO_ITEM) {
      const newState = JSON.parse(JSON.stringify(state));
      newState.list.splice(action.index, 1);
      return newState;
    }

    return state;
}
