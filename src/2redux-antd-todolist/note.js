1.redux工作流：
    组件要从redux里获取某个数据，需要通过actionCreators创建并派发一个action给store,store将请求交给reducers处理，
    reducer处理好交给store,store将数据交给组件
