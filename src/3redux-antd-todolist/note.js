1.redux工作流：
    组件要从redux里获取某个数据，需要通过actionCreators创建并派发一个action给store,store将请求交给reducers处理，
    reducer处理好交给store,store将数据交给组件

2.redux原则
  > store是唯一
  > 只有store能改变自己的内容，看上去是reducer在改变内容，其实并不是，reducer只是生成一个新的数据
    交给store,store拿到reducer新内容，自己改变自己的state
  > reducer必须是一个纯函数，纯函数指：给定固定输入，就一定会有固定输出，而且不会有任何副作用
  
