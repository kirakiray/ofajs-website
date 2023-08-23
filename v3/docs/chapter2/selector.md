# 常用的选择器

ofajs 的 `$` 选择是基于 [querySelector](https://developer.mozilla.org/zh-CN/docs/Web/API/Document/querySelector) 或 [querySelectorAll](https://developer.mozilla.org/zh-CN/docs/Web/API/Document/querySelectorAll) 封装的，支持完整版本的[CSS选择器](https://developer.mozilla.org/zh-CN/docs/Web/CSS/CSS_Selectors) 获取元素；

学习 `$` 选择器知识的同时，也是在学习 [CSS选择器](https://developer.mozilla.org/zh-CN/docs/Web/CSS/CSS_Selectors) 内容；

下面来讲解一下比较常用的选择器；

### id

<code-run show-code="top">
    <template>
        <codehead>
            <script src="https://cdn.jsdelivr.net/gh/kirakiray/ofa.js@3.0.13/dist/ofa.js"></script>
        </codehead>
        <style>
        #target{
            color:red;
        }
        </style>
        <div id="target">1</div>
        <div>2</div>
        <div>3</div>
        <p>4</p>
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
            <script src="https://cdn.jsdelivr.net/gh/kirakiray/ofa.js@3.0.13/dist/ofa.js"></script>
        </codehead>
        <style>
        .target{
            color:blue;
        }
        </style>
        <div>1</div>
        <div class="target">2</div>
        <div>3</div>
        <p>4</p>
        <script>
            $(".target").text = "change the element";
        </script>
    </template>
</code-run>

### 属性选择器

<code-run show-code="top">
    <template>
        <codehead>
            <script src="https://cdn.jsdelivr.net/gh/kirakiray/ofa.js@3.0.13/dist/ofa.js"></script>
        </codehead>
        <style>
        [data-target="1"]{
            color:green;
        }
        </style>
        <div>1</div>
        <div>2</div>
        <div data-target="1">3</div>
        <p>4</p>
        <script>
            $('[data-target="1"]').text = "change the element";
        </script>
    </template>
</code-run>

### 标签选择

<code-run show-code="top">
    <template>
        <codehead>
            <script src="https://cdn.jsdelivr.net/gh/kirakiray/ofa.js@3.0.13/dist/ofa.js"></script>
        </codehead>
        <style>
        p{
            color:red;
        }
        </style>
        <div>1</div>
        <div>2</div>
        <div>3</div>
        <p>4</p>
        <script>
            $("p").text = "change the element";
        </script>
    </template>
</code-run>