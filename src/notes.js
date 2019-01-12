// 1.jsx里面编写注释的方法
//     {/* 这里是注释 */}   因为花括号里面代表js语句
//     {
//       // 这里是单行注释
//     }

// 2.父组件想子组件传递内容通过属性传递, 子组件接受通过this.props

// 3.子组件如何向父组件传东西: 可以调用父组件的方法

// 4.关于react衍生的思考:
//     声明式开发/命令式开发, react就是声明式开发, 它面向数据, 它减少大量的dom操作
//     同时react可以与其他框架共存
//     react是组建是开发: 组件定义方式(看具体代码);  组件首字母为大写, 组件之间的传值, 父组件通过属性传值, 子组件调用父组件传过来的方法向父组件传值
//     react的单向数据流: 父组件传入的props, 子组件不能直接修改, 只能读取, 这样目的是防止数据被乱改, 比如一个值传给多个组件, 如果出问题, 就很难定位到底那个组件改变值引起的问题
//     react是视图层的框架: 组件间的层级很多的话, 单单是react的话是远远不够的, 会使组件之间传值很麻烦; 组件通讯需要其他的框架, 如数据框架redux
//     react函数式编程: 其实react编写写的都是一个一个的函数
//                     这样的好处:维护方便
//                               如果是一个个函数组成,自动化测试很方便

// 5.redux流程总结
//     1.首先要在actionCreators去创建action: action的type需要在actionTypes中去统一定义
//     2.在todolist中去调用action方法,在dispatch方法派发action给store,
//       store连同之前的数据一起转发给reducer来处理
//     3.reducer处理好后在交给store改变state


// 6. iconfont使用
//    注册 --> 图标管理-我的项目--> 搜索图标 --> 加入购物车 --> 下载到本地（svg,eot,tff,woff,iconfont.css有用）
//    使用：将有用文件放在同目录，将css文件的iconfont文件引入加入相对路劲（./）, 注意data别加
//         将图标作为全局样式最好
//         复制图标编码，和标签，如：<i class="iconfont">&#xe637;</i>

// 7.reducer的拆分
//   redux提供一个combineReducers函数，来干这件事
//   在reducer中引入combineReducers和子reducer,调用combineReducers，并传入子reducer:
//   import combineReducers from 'redux'
//   import headerReducers from './header/store/'
//   export default combineReducers({
//     header: headerReducers
//   })




/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// Diff算法
    
