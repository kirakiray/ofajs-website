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
        },
        ready() {
            this.$tabs.on("click", 'fnt-tabs-item', e => {
                let title = e.delegateTarget.attrs.title;

                let targetTitle = this.$host.$app.currentPage.$article.all('h1,h2,h3,h4,h5').find(e => e.text == title);
                targetTitle.ele.scrollIntoView({
                    behavior: "smooth", block: "center", inline: "nearest"
                });
            });
        }
    };
})