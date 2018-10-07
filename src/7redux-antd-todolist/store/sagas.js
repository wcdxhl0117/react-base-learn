// takeEvery是redux-saga提供的一个方法
// saga派发action用put,所以需要引入put这个方法
import { takeEvery, put } from 'redux-saga/effects';

// 引入异步的action的type
import { GET_INIT_LIST } from './actionTypes';
// 异步操作返回的结果需要initListAction,所以引入
import { initListAction } from './actionCreators'
import axios from 'axios'

// saga引入的必须是Generator函数
function* mySaga() {
  // 挡接收到GET_INIT_LIST,执行gitInitList,gitInitList可以是普通函数也可以是Generator函数,建议为Generator函数
  yield takeEvery(GET_INIT_LIST, gitInitList);
}

// 这能直接执行,因为当todolist派发action时,saga也能接收到,这里监听了GET_INIT_LIST,所以能执行
function* gitInitList() {
  // 异步逻辑
  try{
    const res = yield axios.get('/list.json');
    const action = initListAction(res.data);
    yield put(action);
  }catch(e) {
    // 失败
  }


  // 在Generator函数中不需要用promise写法了
  // axios.get('/list.json').then((res) => {
  // 	console.log(res);
  // 	const data = res.data;
  // 	const action = initListAction(data);
  //   // saga派发action用put
  //   put(action)
  // 	// store.dispatch(action);
  //
  // }).catch((error) => {
  // 	console.log(error)
  // })
}

export default mySaga;
