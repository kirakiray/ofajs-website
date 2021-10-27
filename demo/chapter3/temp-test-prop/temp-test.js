Component(async ({ load }) => {
    // 加载子组件
    await load("./sub-comp -p");
    // 设上面写法一样效果
    // await load("./sub-comp/sub-comp.js");

    return {
        data: {
            count: 0,
        },
        proto: {
            counttext() {
                return `count : <span style="color:green;">${this.count}</span>`;
            }
        },
        attached() {
            this._timer = setInterval(() => {
                this.count++;
            }, 1000)
        },
        detached() {
            clearInterval(this._timer);
        }
    };
});