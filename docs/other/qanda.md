# 问与答

##### 和其他前端框架相比之下，ofajs的优势在哪？

ofajs 内部集成了一个微型工程化框架（模块化，组件化和文件处理等操作），直接运行在浏览器上，已经包含了工程化的代码；

其它框架的设计逻辑，是让代码编译为浏览器支持的格式；ofajs的设计逻辑，是让浏览器直接支持这些代码；

因为这个特性，直接引用 ofajs，就能进入最佳开发运行环境；

如果直接引用 Vue 和 React，没办法达到最佳开发体验；

Vue 开发最少要支持 `.vue` 文件引用，React 最少要支持 `jsx` 的环境下，才能进入相对舒服的开发体验，而要进入这个流程，避免不了学习 nodejs => npm => cli/webpack 套餐；

> 理论上 Vue 也能用 drill.js 来添加对 `.vue` 文件支持，替换 node+webpack 开发流程，实现纯浏览器运行状态；

ofajs 的设计之本（设计思维）就是直接引用；直接引用就能完整体验前端开发的美；

ofajs 拥有很低很低的学习成本；

比如基于ofajs开发的电子书应用 [o-book](https://kirakiray.github.io/o-book/website/)，直接引用一个标签，就能制作电子书网页；

而简化的使用成本会给前端带来一个全新的世界，后面会专门开一个篇章来讲；