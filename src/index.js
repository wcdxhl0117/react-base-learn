import React from 'react';
import ReactDOM from 'react-dom';
import TodoList from './TodoList';
// PWA, 在支持https服务器上，具备：如果没网，也能看到网页缓存
// import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<TodoList />, document.getElementById('root'));
