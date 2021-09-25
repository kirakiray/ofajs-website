# 事件绑定

## 什么是事件？

简单来讲，事件行为是一个触发过程；比如点击了元素会触发元素的click事件；

ofajs 提供 `on` 方法绑定事件函数；

<code-run show-code="top">
    <template>
        <codehead>
            <script src="https://cdn.jsdelivr.net/gh/kirakiray/ofa.js/dist/ofa.js"></script>
        </codehead>
        <button id="btn">Click Me!</button>
        <script>
            $("#btn").on("click", () => {
                $("#btn").text = "Hello world!";
            });
        </script>
    </template>
</code-run>

更多有关事件的知识可查阅 [事件介绍](https://developer.mozilla.org/zh-CN/docs/Learn/JavaScript/Building_blocks/Events);

> 事件是您在编程时系统内发生的动作或者发生的事情，系统响应事件后，如果需要，您可以某种方式对事件做出回应。 -- [MDN](https://developer.mozilla.org/zh-CN/docs/Learn/JavaScript/Building_blocks/Events)

## 事件的特性

## 事件冒泡

元素的事件具有冒泡性，比如：元素b 是 元素a 的子元素，b 触发了 `click` 事件，a 也会被触发 `click`，因为 a 包含 b；

<code-run show-code="top">
    <template>
        <codehead>
            <script src="https://cdn.jsdelivr.net/gh/kirakiray/ofa.js/dist/ofa.js"></script>
        </codehead>
        <div id="a" style="width:200px;height:150px;background-color:#ddd;">
            <span id="a_consoler"></span>
            <div id="b" style="width:100px;height:70px;background:#ff0000;">
                <span id="b_consoler"></span>
            </div>
        </div>
        <script>
            let c1 = 0;
            $("#a").on("click", () => {
                $("#a_consoler").text = c1++;
            });
            let c2 = 0;
            $("#b").on("click", () => {
                $("#b_consoler").text = c2++;
            });
        </script>
    </template>
</code-run>