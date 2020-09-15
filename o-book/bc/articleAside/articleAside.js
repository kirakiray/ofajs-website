Component(async (load) => {
    await load("../../components/fntui/fnt-tabs -p");

    return {
        tag: "articleAside",
        temp: true,
        proto: {
            // 更新右侧列表数据
            initItems(listData) {
                let html = "";

                listData.forEach(e => {
                    // html += `
                    // <fnt-tabs-item title="${e.v}"> <span style="font-size:${16 - e.t}px;">${e.v}</span> </fnt-tabs-item>
                    // `;
                    html += `
                    <fnt-tabs-item title="${e.v}"> ${e.v} </fnt-tabs-item>
                    `;
                });

                this.$tabs.html = html;
            },
            // 设置激活状态
            setActiveItem(d) {
                let { name } = d;
            }
        }
    };
})