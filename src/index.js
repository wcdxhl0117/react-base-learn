import React from 'react';
import ReactDOM from 'react-dom';
// 第一个,功能完整的版本
// import TodoList from './TodoList1/TodoList';
// 第二个,组件拆分的版本
import TodoList from './TodoList2_zujianchaifen/TodoList';


// PWA, 在支持https服务器上，具备：如果没网，也能看到网页缓存
// import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<TodoList />, document.getElementById('root'));
