# 绑定一次性事件

使用 `one` 方法绑定函数，在被触发一次后，会自动注销；

<code-run show-code="top">
    <template>
        <codehead>
            <script src="https://cdn.jsdelivr.net/gh/kirakiray/ofa.js@3.0.13/dist/ofa.js"></script>
        </codehead>
        <button id="btn1">Click Me one!</button>
        <br>
        <br>
        <button id="btn2">Click Me two!</button>
        <script>
            let count = 0;
            const btn1 = $("#btn1");
            const btn2 = $("#btn2");
            // 绑定一次性函数
            btn1.one("click", () => {
                count = count + 1;
                btn1.text = "click count " + count;
            });
            btn2.on("click", () => {
                count = count + 1;
                btn2.text = "click count " + count;
            });
        </script>
    </template>
</code-run>