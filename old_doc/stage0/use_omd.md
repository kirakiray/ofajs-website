# 使用 markdown 组件

## 使用markdown

在使用markdown组件前，先确保你已经对 [markdown](https://guides.github.com/features/mastering-markdown/) 有一定的了解了；

<!-- Markdown 是一种轻量级标记语言，易学易用；开发人员会用 Markdown 编写组件（或库）的说明文档；相关的语法使用说明，请在其他网站上学习； -->

以往预览markdown格式的文章，需借助第三方软件查看，就像html需要浏览器预览一样；若想要在网页上预览markdown文章，需要提前导出为 html 使用；

在使用 **o-md**组件（基于 ofa.js 开发markdown渲染组件）后，很轻松的在网页上查看渲染后的样式；

## o-md 组件介绍

[o-md仓库和使用文档](https://github.com/kirakiray/ofa_lib/tree/master/v2/o-md)

## 如何使用

ofajs加载完成后，使用`load`函数添加 `o-md` 库；

```html
<script src="ofa.js"></script>
<script>
    // 加载o-md库
    // load("https://kirakiray.github.io/ofa_lib/v2/o-md -p");
    // 因为 o-md 是官方库，可以使用 @libs/ 前缀引用
    load("@libs/o-md -p");
</script>
```

接下来，就可以直接在html内使用了；

```html
<body>
    <o-md>
        <template>
        # 我是大标题

        我是内容
        </template>
    </o-md>
</body>
```

通常我们建议使用引用 `.md` 的方式读取；

```html
<o-md src="README.md">
    正在请求数据中；
</o-md>
```

如果要直接改变readme内的文本，主体数据在实例化对象的 `mdData` 属性内；

```javascript
$('o-md').mdData  // => 得到标签的markdown原始文本

$('o-md').mdData = `# title ...`; // => 直接设置 markdown 的内部文本
```