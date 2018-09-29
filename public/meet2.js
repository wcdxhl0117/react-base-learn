
1.improt 和 link 区别
  a.link属于html标签，不仅能用于引入css同时也可以用于定义RSS，定义rel连接属性的作用，但是@import只能用于引用css
  b.两者加载到额时机不同，link在页面加载的同时载入，而@import实在页面记载完才加载
  c.link不会有兼容问题，@import是css2.1 才引入的，所以IE5以上才兼容
  d.link支持js控制dom改变样式，但是@import不支持

2.不同浏览器内核
  浏览器内核主要分为两部分，渲染引擎和js引擎，渲染引擎用于渲染页面内容，js引擎用于解析和执行js实现动态效果
  主流浏览器内核如下：
    TriDent内核：IE,360,搜狐等浏览器
    Gecko内核：火狐浏览器
    Presto内核：Opera浏览器（后来和谷歌一起高了个Blink内核）
    WebKit内核：Safari，chrome(chrome现在为Blink)

3.HTML5有哪些新特性，HTML5的兼容问题如何处理？怎么区分HTML和HTML5？
  a.新增标签：
    绘画canvas
    媒介：video和audio元素
    本地离线储存：长期储存localStorage,浏览器关闭数据不丢失；临时储存sessionStorage，关闭浏览器自动删除
    一些语义化标签：article、footer、header、nav、section
    新增表单控件：calendar、date、time、email、url、search
    新的技术webworker, websocket, Geolocation
  b.如果浏览器不支持h5标签怎么办？
    IE8/IE7/IE6支持通过document.createElement方法产生的标签
    也可以直接使用成熟的框架、比如html5shim;
       <!--[if lt IE 9]>
          <script> src="http://html5shim.googlecode.com/svn/trunk/html5.js"</script>
       <![endif]-->
  c.如何区分HTML5?
    主要看文档申明，是否含有新增结构元素，是否存在h5的功能元素

4.如何理解HTML语义化？
  该用什么标签就用什么标签，是标题就用H1(2,3,4,5,6)，是头部Header,底部fotter等
  HTML语义化会让页面内容结构化，结构更清晰，便于浏览器和搜索引擎解析
  搜索引擎也是依赖html标记来确定上下文和关键字权重，语义化的html利于seo
  便于代码阅读和理解，便于后期维护

5.








。
  >特别感谢guanghua的分享，本文是拜读大佬文章做的总结，也是对大佬的总结做了精简，留下一些我觉得遇到频率非常高的题。 大佬文章传送门：https://segmentfault.com/a/1190000016504891
