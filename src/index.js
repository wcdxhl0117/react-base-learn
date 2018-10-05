import React from 'react';
import ReactDOM from 'react-dom';
// 第1个,功能完整的版本
// import TodoList from './TodoList1/TodoList';
// 第2个,组件拆分的版本
// import TodoList from './TodoList2_zujianchaifen/TodoList';
// 第3个,组件拆分的版本
import TodoList from './TodoList3_daimayouhua/TodoList';


// PWA, 在支持https服务器上，具备：如果没网，也能看到网页缓存
// import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<TodoList />, document.getElementById('root'));
