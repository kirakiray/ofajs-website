Component(async (load) => {
    return {
        tag: "ba-item",
        temp: true,
        attrs: {
            // 当前项的名字
            name: "",
            // 当前项的激活状态
            // null:未激活  1:目录激活   2:选项激活
            active: null
        }
    };
});