# 获取元素

把 ofajs 当成是一个库，可以简化 JavaScript 编程。

使用 `$` 或 `$.all`，可快速获取 指定选择器匹配的元素的实例化对象；

> 记得先引用 `ofa.js`

### 使用 `$`

<code-run show-code="top">
    <template>
        <codehead>
            <script src="https://cdn.jsdelivr.net/gh/kirakiray/ofa.js/dist/ofa.js"></script>
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

当点击 id 为 btn 的元素时，将在#consoler元素的文本改变为 Hello world；

#### 注意：

**当 $ 匹配发现有多个元素时，只会返回匹配的第一个元素**

### 使用 `all`

## 选择器

ofajs 的 `$` 选择是基于 [querySelector](https://developer.mozilla.org/zh-CN/docs/Web/API/Document/querySelector) 或 [querySelectorAll](https://developer.mozilla.org/zh-CN/docs/Web/API/Document/querySelectorAll) 封装的，支持 [CSS选择器](https://developer.mozilla.org/zh-CN/docs/Web/CSS/CSS_Selectors) 获取元素；

下面来讲解一下比较常用的选择器；

### id

<code-run show-code="top">
    <template>
        <codehead>
            <script src="https://cdn.jsdelivr.net/gh/kirakiray/ofa.js/dist/ofa.js"></script>
        </codehead>
        <div id="target">1</div>
        <div>2</div>
        <div>3</div>
        <script>
            $("#target").text = "change the element";
        </script>
    </template>
</code-run>

选取 `id` 为 `target` 的元素；

#id 选择器选取带有指定 id 的元素。

id 引用 HTML 元素的 id 属性。

> 注意：id 属性在文档内必须是唯一的；不要使用数字开头的 id 属性！在某些浏览器中可能出问题。

### class

<code-run show-code="top">
    <template>
        <codehead>
            <script src="https://cdn.jsdelivr.net/gh/kirakiray/ofa.js/dist/ofa.js"></script>
        </codehead>
        <div>1</div>
        <div class="target">2</div>
        <div>3</div>
        <script>
            $(".target").text = "change the element";
        </script>
    </template>
</code-run>

若想获取多个元素，请使用下一章的 `all` 方法；

### 属性选择器

<code-run show-code="top">
    <template>
        <codehead>
            <script src="https://cdn.jsdelivr.net/gh/kirakiray/ofa.js/dist/ofa.js"></script>
        </codehead>
        <div>1</div>
        <div>2</div>
        <div data-target="1">3</div>
        <script>
            $('[data-target="1"]').text = "change the element";
        </script>
    </template>
</code-run>


