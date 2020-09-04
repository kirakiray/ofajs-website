# ofa的模块化简介

ofajs 的模块化系统是基于 <a href="https://github.com/kirakiray/drill.js" class="csp" target="_blank">drill.js</a>
开发的；

## 教程前说明

每个案例说明前，都会先描述案例的目录结构和文件内容，测试页面基本都是 `index.html`；

而 `ofa.js` 都会放在案例的 `js/` 目录下；

案例支持es6的浏览器上跑，但是在es7的浏览器才好用（是为了es7设计的），所以后面的案例需要浏览器支持es7(async await)；

使用前，需要学习一下[异步函数(async
function)](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/AsyncFunction)的知识；

## ofa模块化教程目录

1. 基础使用
    - 开始使用
    - 完成后操作
    - define模块简易使用
    - task模块简易使用
2. define模块详细使用
    - 直接定义模块
    - 依赖其它模块
    - 相对路径
    - 定义id
3. task模块详细使用
    - `task模块`和`define模块`的异同
    - 模块依赖
    - 传递数据
    - task模块常用的一种应用场景
    - 相对路径
    - 定义id
    - 非主流task模块写法
4. ofa.js模块化进阶
    - 并行加载
    - pend加载中回调
    - 初始配置
    - baseUrl
    - paths
    - 初始化函数定义
    - 报错机制