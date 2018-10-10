// state默认值
const defaultState = {
    inputValue: '',
    list: []
}

// reducer可以接受state，但是不能修改state,所以把state拷贝了一份修改
export default (state = defaultState, action) => {
    // console.log(state, action);
    // 输入
    if (action.type === 'change_input_value') {
      // 对state做一次深拷贝
      const newState = JSON.parse(JSON.stringify(state));
      newState.inputValue = action.value;
      // 讲newState return给state
      return newState;
    }
    // 添加
    if (action.type === 'add_todo_item') {
      const newState = JSON.parse(JSON.stringify(state));
      newState.list.push(newState.inputValue);
      newState.inputValue = '';
      return newState;
    }
    // 删除
    if (action.type === 'delete_todo_item') {
      const newState = JSON.parse(JSON.stringify(state));
      newState.list.splice(action.index, 1);
      return newState;
    }



    // 最后把新state返回
    return state;
}
