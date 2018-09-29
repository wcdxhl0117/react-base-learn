1.improt 和 link 区别
  a.link属于html标签，不仅能用于引入css同时也可以用于定义RSS，定义rel连接属性的作用，但是@import只能用于引用css
  b.两者加载到额时机不同，link在页面加载的同时载入，而@import实在页面记载完才加载
  c.link不会有兼容问题，@import是css2.1 才引入的，所以IE5以上才兼容
  d.link支持js控制dom改变样式，但是@import不支持
