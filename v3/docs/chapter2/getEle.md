# 获取元素

把 ofajs 当成是一个库，可以简化 JavaScript 编程。

使用 `$` 或 `$.all`，可快速获取 指定选择器匹配的元素的实例化对象；（all的使用方法在下下一节）

> 记得先引用 `ofa.js`

### 使用 `$`

<code-run show-code="top">
    <template>
        <codehead>
            <script src="https://cdn.jsdelivr.net/gh/kirakiray/ofa.js@3.0.13/dist/ofa.js"></script>
        </codehead>
        <div id="consoler">I am consoler</div>
        <button id="btn">Click Me!</button>
        <script>
            $("#btn").on("click", () => {
                $("#consoler").text = "Hello world!";
            });
        </script>
    </template>
</code-run>

**text**属性是元素的文本内容；赋值 **text** 就能修改文本；

当点击 id 为 btn 的元素时，将在#consoler元素的文本改变为 Hello world；

#### 注意：

**当 $ 匹配发现有多个元素时，只会返回匹配的第一个元素**