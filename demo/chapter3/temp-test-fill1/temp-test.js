Component(async ({ load }) => {
    return {
        data: {
            // 测试用宿主的数据
            hostval: "I am host",
            // 测试用被渲染的数组
            arr: [{
                val: "test one",
                color: "#ff0000"
            }, {
                val: "test two",
                color: "#00ff00"
            }, {
                val: "test three",
                color: "#0000ff"
            }]
        }
    };
});