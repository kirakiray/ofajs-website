# 引用组件资源

只需要将 ofa.js 和相应的组件js文件引入，就可使用基于 ofajs 开发的组件；

下面我们来使用 bootstrap-ofa 的按钮组件；

> 基于 [bootstrap](https://getbootstrap.com/docs/5.0/getting-started/introduction/) 和 ofajs 封装的框架 bootstrap-ofa；

[bs-button 使用文档](bootstrap-ofa/components/bs-button/demo.html)

新建一个html，将 ofajs 和引用；

```html
<head>
    <script src="https://cdn.jsdelivr.net/gh/kirakiray/ofa.js@3.0.13/dist/ofa.js"></script>
    <script src="https://cdn.jsdelivr.net/gh/kirakiray/o_blog/bootstrap-ofa/components/bs-button/bs-button.js"></script>
</head>
```

接下来就能使用该组件了；

```html
<body>
    <bs-button>Test button</bs-button>
</body>
```

预览效果：

<bs-button>Test button</bs-button>
