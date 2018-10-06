// state默认值
const defaultState = {
    inputValue: '',
    list: []
}

export default (state = defaultState, action) => {
    // 输入
      const newState = JSON.parse(JSON.stringify(state));
      newState.inputValue = action.value;
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

    return state;
}
