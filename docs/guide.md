# 入门

## 准备

首先，你已经会web前端开发的基础的知识（ **html** **Javascript** **css** ），例如新建一个空白页。

其次，建议学习一下 ES6的 [Promise API](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Statements/async_function) 和 ES7 的 [async function](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Statements/async_function)。

然后，将 `ofa.js` 添加到你的页面中；

```html
<script src="https://kirakiray.github.io/ofa.js/dist/ofa.js"></script>
```

在确保 ofa.js被引入成功后，就可以开始正式的教程了。

为了提高教学质量，这里将ofajs的教学分5个阶段，每个阶段都相对容易并学有所获。

## 教程目录

### stage 0: ofa Component 的使用

讲解如何使用ofajs封装的组件；只需要学习ofajs提供的 `load` 方法即可；

stage 0 学习完成后，你也能 **五分钟开发一个markdown编辑器**。

### stage 1: 使用ofa API

ofajs提供的api跟jQuery很相似，是jQuery的精神续作；

stage 1 完成后，能够快速开发页面的小功能。

### stage 2: 开发 ofa Component

讲解如何开发ofajs的组件；(就是 stage 0 中使用的这种组件)

开发 ofa Component 前，需要搭建静态网站服务器；编辑器使用VSCode的话安装 `Live Server` 之类的插件即可；

提供了模板引擎之类的语法，可以使用MVVM的开发方式；

stage 2完成后，能开发出让别人快速使用的组件；

### stage 3: 开发 ofa Page

学习stage3之前，必须先学习过stage2的内容；

就像开发组件那样开发页面，使用模板引擎之类的语法，还有绑定数据；

stage 3 完成后，能够快速开发功能页面；

### stage 4: 开发 ofa APP

学习stage4之前，必须先学习stage3的内容；

开发 ofa APP 的方法很像小程序；但没有编译操作，开发即生效；

stage4完成后，你就能开发全平台通用的应用程序（PWA/Web app）。