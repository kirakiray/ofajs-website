# ofajs

ofajs 是新时代前端渐进式框架；基于 Web Components 和完全异步的模块化方案；

<!-- > **node+npm+webpack** 入门套装，都是伪渐进式 -->

与传统前端框架不一样，ofajs是 **面向开发友好型** 的框架，完全基于浏览器运行，不需要nodejs开发环境；（因此不需要学习npm和webpack之类的）

<!-- > **面向开发友好型**：没有额外的学习成本，开箱即用 -->

<!-- > 古董程序员的知识体系也能用上 -->

如果你被现有前端技术栈劝退过（被脚手架、nodejs或npm之类的知识点迷惑），可以试试 ofajs；

[仓库地址](https://github.com/kirakiray/ofa.js)

[Bug报告](https://github.com/kirakiray/ofa.js/issues)

## 特点

* 非常快速的学习曲线；
* 集成模块化、模板语法、数据同步、路由化和微前端方案，一站式解决所有问题；
* min体积只有41kb；(min+zip为14kb)

### 定位

**银弹型**前端框架；既能像jQuery那样，快速开发单独功能或页面；也能像Vue/React/Angular那样，开发大型高级项目；

> 虽然作者开发 ofajs 的初衷是方便开发工具类软件的框架

ofajs是尽量和原生web贴近，在原生基础上增加更易用的api；而其它前端框架，是重新封装api，编译成web；


### ofajs 和现有前端框架的区别

| 框架    | 工作执行重心            | 脚本语言  |
| ------- | ----------------------- | --------- |
| ofajs   | 浏览器执行              | js        |
| Vue     | nodejs编译 + 浏览器执行 | js,ts     |
| React   | nodejs编译 + 浏览器执行 | js,jsx,ts |
| Angular | nodejs编译 + 浏览器执行 | ts        |
| svelte  | nodejs编译              | js,ts     |

### 案例

[**o-book**-最简单的书籍网站生成框架](https://kirakiray.github.io/o-book/website/index.html)