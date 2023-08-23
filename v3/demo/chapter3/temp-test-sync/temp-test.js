Component(async ({ load }) => {
    // 加载子组件
    await load("./sub-comp -p");
    // 设上面写法一样效果
    // await load("./sub-comp/sub-comp.js");

    return {
        data: {
            count: 0,
        }
    };
});