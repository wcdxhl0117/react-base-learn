// 需要使用redux-thunk等中间件的话, 需要引入applyMiddleware, 我们说的中间件是redux的中间件, 不是react的
// 要使用redux-tools, 有需要中间件的话, 需要改写调试引入方式, 要用到redux中的compose
import { createStore, applyMiddleware, compose } from 'redux';
import reducer from './reducer';
import createSagaMiddleware from 'redux-saga';
// 创建一个文件sagas专门放异步操作
import todoSagas from './sagas';
// 调用createSagaMiddleware
const sagaMiddleware = createSagaMiddleware();

const composeEnhancers =
  window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ?
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
    }) : compose;
const enhancer = composeEnhancers(
  applyMiddleware(sagaMiddleware)
);

const store = createStore(
  reducer,
  enhancer
);

// 创建好store后, 就运行saga
sagaMiddleware.run(todoSagas)

export default store;
