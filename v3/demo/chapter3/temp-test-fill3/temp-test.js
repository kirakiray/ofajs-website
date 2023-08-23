Component(async ({ load }) => {
    return {
        data: {
            // 测试用被渲染的数组
            arr: [{
                val: "test one",
                color: "#ff0000"
            }, {
                val: "test two",
                color: "#00ff00",
                childs: [{
                    val: "test two sub ①",
                    color: "#00aa00"
                }, {
                    val: "test two sub ②",
                    color: "#008800",
                    childs: [{
                        val: "test two sub ② sub",
                        color: "#005500"
                    }]
                }]
            }, {
                val: "test three",
                color: "#0000ff"
            }]
        }
    };
});