# 主动触发事件

使用 `trigger` 可以主动触发事件；

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
            // 每秒主动触发一次 click 事件
            setInterval(()=>{
                $("#btn").trigger("click");
            },1000);
        </script>
    </template>
</code-run>

### 自定义事件

你可以给元素自定义事件，用 `trigger`方法触发；

<code-run show-code="top">
    <template>
        <codehead>
            <script src="https://cdn.jsdelivr.net/gh/kirakiray/ofa.js/dist/ofa.js"></script>
        </codehead>
        <button id="btn">Click Me!</button>
        <script>
            let count = 0;
            // 监听 haha 事件
            $("#btn").on("haha", () => {
                count = count + 1;
                $("#btn").text = "haha count " + count;
            });
            // 点击按钮后，主动触发两次 haha 事件
            $("#btn").on("click", () => {
                $("#btn").trigger("haha");
                $("#btn").trigger("haha");
            });
        </script>
    </template>
</code-run>

### 附带数据触发事件

主动触发事件可以附带一个数据；

<code-run show-code="top">
    <template>
        <codehead>
            <script src="https://cdn.jsdelivr.net/gh/kirakiray/ofa.js/dist/ofa.js"></script>
        </codehead>
        <button id="btn">Click Me!</button>
        <script>
            $("#btn").on("haha", e => {
                $("#btn").text = "haha count " + e.data.num;
            });
            let count = 0;
            $("#btn").on("click", () => {
                $("#btn").trigger("haha",{
                    num: ++count
                });
            });
        </script>
    </template>
</code-run>