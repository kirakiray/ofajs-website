Component(async (load) => {
    await load("../../components/fntui/fnt-tabs -p");

    return {
        tag: "articleAside",
        temp: true,
        data: {
            items: []
        },
        proto: {
            // 设置激活状态
            set titleActive(index) {
                this.$tabs.activeIndex = index;
            },
            get article() {
                return this.$host.$app.currentPage.$article;
            }
        },
        ready() {
            let click_timer;
            this.$tabs.on("click", 'fnt-tabs-item', e => {
                let title = e.delegateTarget.title;

                let targetTitle = this.article.all('h1,h2,h3,h4,h5').find(e => e.text == title);
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