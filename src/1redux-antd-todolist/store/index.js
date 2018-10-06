import { createStore } from 'redux';
import reducer from './reducer'

// 创建store时，需要把reducer传给store（小本本）
const store = createStore(
  reducer,
  // redux调试工具配置
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;
