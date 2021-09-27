# 开始制作组件

组件的核心文件有两个，**组件模块**文件(js)和**组件模板**文件(html)，两个文件必须同名（后缀不一样）；

**组件模块** 使用 `Component` 函数声明组件模块，函数内返回组件参数；

```javascript
Component(async () => {
    return {
        // 这里存放组件参数
    };
});
```

**组件模板** 存放组件的默认html和样式，会渲染到组件的影子文档内，不影响使用的文档环境；

组件模板可使用 `style` `link` 标签添加样式；不可用 `script` 添加脚本，脚本请写到组件模块上；

```html
<!-- 这条是成立的 -->
<link rel="stylesheet" href="xxxx.css">

<div class="main">
    <slot></slot>
</div>

<!-- 下面为错误，模板文件内禁止script -->
<script>
xxxxx
</script>
<script src="xxxxx.js"></script>
```

下面尝试制作一个名为 `test-btn` 的按钮组件；

创建了 `test-btn.js` 和 `test-btn.html` 两个文件，两个在同一个文件夹内；

<!-- > 其实两个文件可以不在一个文件夹内，但官方的标准是放在一个文件夹内； -->

<code-view src="/demo/chapter3/test-btn1/package.json" style="height:500px;"></code-view>

[`slot`](https://developer.mozilla.org/zh-CN/docs/Web/HTML/Element/slot) 为影子文档的插槽元素，组件的内容将会被渲染到影子文档的 [`slot`](https://developer.mozilla.org/zh-CN/docs/Web/HTML/Element/slot) 元素内；（只是渲染视图，实际内元素还是在使用组件的地方）；

在模板文件的样式上使用 [:host](https://developer.mozilla.org/zh-CN/docs/Web/CSS/:host) 伪类，设置自定义组件标签的默认样式；