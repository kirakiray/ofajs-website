# 引用组件资源

只需要将 ofa.js 和相应的组件js文件引入，就可使用基于 ofajs 开发的组件；下面我们来尝试使用 基于 bootstrap 和 ofajs 开发的按钮组件；

<!-- > 当然，你可以将相应的资源下载到你的项目内引用； -->

新建一个html，将 ofajs 和引用；

```html
<head>
    <script src="https://cdn.jsdelivr.net/gh/kirakiray/ofa.js/dist/ofa.js"></script>
    <script src="../bootstrap-ofa/components/bs-button/bs-button.js"></script>
</head>
```

接下来就能使用该组件了；

```html
<body>
    <bs-button>Test button</bs-button>
</body>
```

观看源码：

 <code-view src="demo/chapter1/demo1/demo.json" style="height:500px;"></code-view>
