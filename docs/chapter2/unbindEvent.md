# 取消事件绑定函数

绑定事件时，会返回一个事件id；当不需要这个事件绑定的函数，使用 `off` 取消；

<code-run show-code="top">
    <template>
        <codehead>
            <script src="https://cdn.jsdelivr.net/gh/kirakiray/ofa.js/dist/ofa.js"></script>
        </codehead>
        <button id="btn1">Click Me one!</button>
        <br>
        <br>
        <button id="btn2">Click Me two!</button>
        <script>
            let count = 0;
            const btn1 = $("#btn1");
            const btn2 = $("#btn2");
            let eventId = btn1.on("click", () => {
                count = count + 1;
                btn1.text = "click count " + count;
                // 取消事件绑定
                btn1.off(eventId);
            });
            btn2.on("click", () => {
                count = count + 1;
                btn2.text = "click count " + count;
            });
        </script>
    </template>
</code-run>