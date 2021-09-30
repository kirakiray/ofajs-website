# 为什么要开发 ofajs

不喜欢前端打包编译方案，并且没有可选的非打包方案，干脆自己造一个；

> 为什么要编译？大项目随便改点东西都要等半天

从底层构建纯异步模块化，替代现有的 node+webpack 方案；

界面层大量参考了 jQuery和主流MVVM框架（主要Vue/Svelte）的 api，开发上能有很舒适的过渡；是 jQuery 的精神续作；

<!-- > 其实是目前的前端框架不满足笔者制作工具类软件的需求 -->

## ofajs的优势

因为去掉了编译层，开发的体验变得很好，像 jQuery 一样 `<script src="xxxx"></script>` 标签引用即可；

入门不再需要学习 nodejs + npm + webpack，能更聚焦前端开发业务本身；

对前端业务而言，nodejs + webpack 只是媒介，但这两货有巨量的学习门槛；经过中间层一转，变成了灰盒开发；

全异步模块化，使得微前端变得可能；

<!-- 主流MVVM框架的功能 ofajs 都有，它们没有的功能 ofajs 也有；[doge] -->

## 不适合使用ofajs的项目

不适合 **需要兼容低版本浏览器** 的项目； **不支持IE浏览器**；

ofajs的运行需要支持 [Web Components](https://developer.mozilla.org/zh-CN/docs/Web/Web_Components) 特性的浏览器；支持该特性的浏览器版本如下：

| 浏览器名称 | 版本 | 对应版本时间 |
| :-----| ----: | :----: |
| Chrome | ≥55 | 2016-12 |
| Safari | ≥11 | 2017-09 |
| Firefox | ≥63 | 2018-10 |
| Edge | ≥79 | 2020-01 |

目前微信安卓版webview已支持ofajs；具体支持到最低版本有待用户反馈；