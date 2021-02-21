Component(async (load, { DIR }) => {
    // 加载全局样式
    ofa.globalcss = await load('./css/public.css -getLink');

    // 加载关键组件
    await load("./components/book-aside -p", "./bc/articleAside -p");

    ofa.config({
        paths: {
            "@obook/": DIR
        }
    });

    return {
        tag: "o-book",
        temp: true,
        hostcss: "./css/host.css",
        attrs: {
            src: "book.json"
        },
        data: {
            loaded: 0,
            // 是否展示左边栏
            hideLeft: localStorage.getItem("hideLeftAside") == 1 ? 1 : 0
        },
        proto: {
            clicAsideBtn() {
                if (this.$app.$host.hideLeft == 1) {
                    this.$app.$host.hideLeft = 0;
                    localStorage.hideLeftAside = 0;
                } else {
                    this.$app.$host.hideLeft = 1;
                    localStorage.hideLeftAside = 1;
                }
            },
            // 左侧点击后，跳转到相应地址
            clickitem(e, { target }) {
                let path = target.path;

                if (path) {
                    this.$app.navigate({
                        // type: this.$app.currents.length > 1 ? "replace" : "to",
                        type: "to",
                        src: `@obook/pages/mdPage/mdPage?url=${path}`
                    });
                }
            },
            // 修正左侧树状结构激活状态
            async fixLeftSide() {
                await this.$app.watchUntil(`launched`);

                // 去掉旧的激活
                this.$shadow.all("ba-item[active]").forEach(item => item.active = null);

                let activeItem = this.$shadow.$(`ba-item[path="${this.$app.currentPage.params.url}"]`);
                if (activeItem) {
                    activeItem.active = 2;
                    this.$mainTitle.class.remove("active");
                } else {
                    this.$mainTitle.class.add("active");
                }
            },
            // 修正有侧边栏菜单激活状态
            async fixRightSide() {
                await this.$app.watchUntil(`launched`);
                await this.$app.currentPage.watchUntil('initMd == 1');

                let article = this.$app.currentPage.$article

                let titles = [];
                // 根据正文内容，更新右侧边栏
                article.all("h1,h2,h3,h4,h5").forEach(titleEle => {
                    titles.push({
                        t: titleEle.tag.replace("h", ""),
                        v: titleEle.text
                    });
                });

                this.$articleAside.items = titles;
            }
        },
        async ready() {
            // 加载 book.json
            const [book, pubData] = await load(this.src, "./data");
            const { summaryToData } = await load("./summaryToData");
            const { transToItem } = await load("./util");

            this.loaded = 1;

            // 加载summary
            let summary = await load(book.SUMMARY);

            this.loaded = 2;

            let summaryData = pubData.summary = summaryToData(summary);
            const aside = this.$aside;

            this.$mainTitle.text = summaryData.title;

            // 填充侧边栏
            summaryData.items.forEach(e => {
                let ele;
                switch (e.type) {
                    case "item":
                        ele = transToItem(e);
                        break;
                    case "title":
                        ele = $(`<h2 class="ob_left_title2">${e.text}</h2>`);
                        break;
                    case "line":
                        ele = $(`<hr />`);
                        break;
                }
                ele && aside.push(ele);
            });

            // 首页设置
            const app = this.$shadow.$('o-app');

            // 使用路由模式
            app.router = "1";

            // 添加首页
            app.push(`<o-page src="@obook/pages/mdPage/mdPage?url=${book.index}"></o-page>`);

            // 路由跳转时更换
            app.on("navigate", (e, data) => {
                this.fixLeftSide();
                this.fixRightSide();
            });

            // 等待app初始化结束
            await this.$app.watchUntil(`launched`);
            await this.$shadow.$("o-app").currentPage.watchUntil('initMd == 1');

            this.fixLeftSide();
            this.fixRightSide();

            this.loaded = 'finish';
        }
    };
});