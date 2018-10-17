import React from 'react';
import ReactDOM from 'react-dom';
import './static/iconfont/iconfont.css';

// css3过度，css3动画,react-transtion-group动画
// import TodoList from './animation/index';

// 第1个,功能完整的版本
// import TodoList from './TodoList1/TodoList';
// 第2个,组件拆分的版本
// import TodoList from './TodoList2_zujianchaifen/TodoList';
// 第3个,代码优化
// import TodoList from './TodoList3_daimayouhua/TodoList';
// 第4个,Proptypes与DefaultProps
// import TodoList from './TodoList4_canshujiaoyan/TodoList';
// 第5个,Props,State与render的关系
// import TodoList from './TodoList5/TodoList';
// 第6个,虚拟dom,
// import TodoList from './TodoList6/TodoList';
// 第7个,ref,setState的第二个参数，生命周期函数,生命周期使用场景
// import TodoList from './TodoList7/TodoList';
// 第8个,Charles数据模拟，
// import TodoList from './TodoList8/TodoList';



// redux,antd实现TodoList
// 第1个,搭建TodoList项目，最初版本的store流程
// import TodoList from './1redux-antd-todolist/TodoList';
// 第2个,ActionTypes的拆分
// import TodoList from './2redux-antd-todolist/TodoList';
// 第3个,使用actionCreator创建action,Redux知识点复习补充
// import TodoList from './3redux-antd-todolist/TodoList';
// 第4个,UI组件和容器组件拆分, 无状态组件
// import TodoList from './4redux-antd-todolist/TodoList';
// 第5个,Redux发送异步请求获取数据
// import TodoList from './5redux-antd-todolist/TodoList';
// 第6个,Redux-thunk中间件运行ajax求情发送,中间件概念
// import TodoList from './6redux-antd-todolist/TodoList';
// 第7个,Redux-saga中间件
// import TodoList from './7redux-antd-todolist/TodoList';
// 第8个,Raect_Redux的使用
import TodoList from './8redux-antd-todolist/TodoList';

// mycode自己敲一遍
// import TodoList from './1Mycode/TodoList';



// React-Redux开始
import { Provider } from 'react-redux';
import store from './8redux-antd-todolist/store/'

const App = (
  // Provider提供器连接了store,那么Provider里面的组件都能使用store了
  <Provider store={store}>
    <TodoList />
  </Provider>
);
ReactDOM.render(App, document.getElementById('root'));
// React-Redux结束


// 非React-Redux项目使用以下方式
// ReactDOM.render(<TodoList />, document.getElementById('root'));
