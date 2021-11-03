# 微组件

基于 ofajs 开发出来的组件，耦合性极低，能轻易被使用（不需要部署），本质上就是 **微组件**；

> 得益于 web components 的隔离性 和 全异步模块化，才能让 ofajs 做到这样；

你需要的，是管理好组件，能够被团队直接使用；

你能在 Vue 中使用 ofajs组件，需要定义 [ignoredElements](https://v3.cn.vuejs.org/guide/migration/custom-elements-interop.html#%E6%A6%82%E8%A7%88)；

> 要在vue项目的 `index.html` 引入ofajs运行库和你要用的组件模块

[在 React 中使用](https://zh-hans.reactjs.org/docs/web-components.html)（还未实验）；

当然，作者还是建议直接使用 ofajs 提供的全家桶；