// 需要使用redux-thunk等中间件的话,需要引入applyMiddleware,我们说的中间件是redux的中间件,不是react的
// 要使用redux-tools,有需要中间件的话,需要改写调试引入方式,要要用到redux中的compose
import { createStore, applyMiddleware, compose } from 'redux';
import reducer from './reducer';
// 引入redux-thunk
import thunk from 'redux-thunk';

/*

*/

// 使用thunk,调试工具需要换方式写 具体指南: https://github.com/zalmoxisus/redux-devtools-extension#usage
const composeEnhancers =
  window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ?
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
    }) : compose;
const enhancer = composeEnhancers(
  applyMiddleware(thunk),
  // applyMiddleware(中间件1,中间2)
);

const store = createStore(
  reducer,
  enhancer
  // 使用thunk
  // 为了中间件和调试工具兼容,用上面的方法引入中间件,这个方法就不用了
  // applyMiddleware(thunk)
  // redux调试工具配置
  // window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;
