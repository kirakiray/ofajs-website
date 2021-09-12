# 目录结构

## 准备工作

因为 ofa Component 的封装涉及到资源请求， **file协议** 下无法获取资源，所以请准备好本地的静态服务器；

[VSCode](https://code.visualstudio.com/) 上有很多静态服务器插件，作者推荐 [Live Server](https://marketplace.visualstudio.com/items?itemName=ritwickdey.LiveServer) 插件；

> **file协议** 可以理解成 `.html` 文件从浏览器直接打开的操作

> **静态服务器** 可以理解成本地用http协议打开 `.html` 文件

## 初始化

ofa Component 是以包（目录）的形式存在的，其中至少包含一个 html 和 js 文件；

正常情况下，主体 html 和 js 文件都是跟包同名的；