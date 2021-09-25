
# 常见的DOM事件

### 鼠标事件

#### click

鼠标后点击触发的事件；

<code-run show-code="top">
    <template>
        <codehead>
            <script src="https://cdn.jsdelivr.net/gh/kirakiray/ofa.js/dist/ofa.js"></script>
        </codehead>
        <button id="btn">Click Me!</button>
        <script>
            let count = 0;
            $("#btn").on("click", () => {
                count = count + 1;
                $("#btn").text = "click count " + count;
            });
        </script>
    </template>
</code-run>

#### mouseover

当用户将鼠标的光标移动到某对象范围的上方时触发此事件

<code-run show-code="top">
    <template>
        <codehead>
            <script src="https://cdn.jsdelivr.net/gh/kirakiray/ofa.js/dist/ofa.js"></script>
        </codehead>
        <div id="target" style="width:100px;height:100px;background-color:#eee;">Click Me!</div>
        <script>
            let count = 0;
            $("#target").on("mouseover", () => {
                count = count + 1;
                $("#target").text = "mouseover count " + count;
            });
        </script>
    </template>
</code-run>

### 表单事件

表单元素才会触发的事件；

#### input

当表单元素的value值发生变化时就会触发；

<code-run show-code="top">
    <template>
        <codehead>
            <script src="https://cdn.jsdelivr.net/gh/kirakiray/ofa.js/dist/ofa.js"></script>
        </codehead>
        <div id="consoler"></div>
        <input type="text" id="target" />
        <script>
            $("#target").on("input",e =>{
                $("#consoler").text = $("#target").value;
            });
        </script>
    </template>
</code-run>

#### change

当表单元素的值确定会发生变动时触发；

input标签上的表现是，当元素失去焦点，并且value发生变动时触发；

<code-run show-code="top">
    <template>
        <codehead>
            <script src="https://cdn.jsdelivr.net/gh/kirakiray/ofa.js/dist/ofa.js"></script>
        </codehead>
        <div id="consoler"></div>
        <input type="text" id="target" />
        <script>
            $("#target").on("change",e =>{
                $("#consoler").text = $("#target").value;
            });
        </script>
    </template>
</code-run>

#### focus

当表单元素获得焦点时触发此事件；

<code-run show-code="top">
    <template>
        <codehead>
            <script src="https://cdn.jsdelivr.net/gh/kirakiray/ofa.js/dist/ofa.js"></script>
        </codehead>
        <div id="consoler"></div>
        <input type="text" id="target" />
        <script>
            let count = 0;
            $("#target").on("focus",e =>{
                count = count + 1;
                $("#consoler").text = count;
            });
        </script>
    </template>
</code-run>