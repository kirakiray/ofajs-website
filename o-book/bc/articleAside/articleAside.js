Component(async (load) => {
    await load("../../components/fntui/fnt-tabs -p");

    return {
        tag: "articleAside",
        temp: true,
        proto: {
            // 更新右侧列表数据
            initItems(listData) {
                let html = "";

                listData.forEach((e, i) => {
                    html += `
                    <fnt-tabs-item title="${e.v}" ${i == 0 ? 'active' : ''}> ${e.v} </fnt-tabs-item>
                    `;
                });

                this.$tabs.html = html;
            },
            // 设置激活状态
            setTitleActive(index) {
                this.$tabs.setActive(index);
            }
        },
        ready() {
            let click_timer;
            this.$tabs.on("click", 'fnt-tabs-item', e => {
                let title = e.delegateTarget.attrs.title;

                let targetTitle = this.$host.$app.currentPage.$article.all('h1,h2,h3,h4,h5').find(e => e.text == title);
                targetTitle.ele.scrollIntoView({
                    behavior: "smooth", block: "start", inline: "nearest"
                });
                this._inScroll = 1;
                clearTimeout(click_timer);
                click_timer = setTimeout(() => {
                    this._inScroll = 0;
                }, 400);
            });
        }
    };
})