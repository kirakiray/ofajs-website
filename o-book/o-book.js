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
            loaded: 0
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
            const aside = this.$shadow.$("#aside");

            this.emit("summary-loaded");

            this.$shadow.$(".ob_left_title").text = summaryData.title;

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

            // 修正左侧激活状态
            const fixLeftSide = () => {
                // 去掉旧的激活
                this.$shadow.all("ba-item[active]").forEach(item => item.active = null);

                let activeItem = this.$shadow.$(`ba-item[path="${app.currentPage.params.url}"]`);
                activeItem && (activeItem.active = 2);
            }

            // 路由跳转时更换
            app.on("navigate", (e, data) => {
                fixLeftSide();
            });

            setTimeout(() => { fixLeftSide() }, 1000);

            // 左侧点击后，跳转到相应地址
            aside.on("active-item", (e, { target }) => {
                let path = target.path;

                if (path) {
                    app.navigate({
                        type: app.currents.length > 1 ? "replace" : "to",
                        src: `@obook/pages/mdPage/mdPage?url=${path}`
                    });
                }
            });

            this.loaded = 'ok';
        }
    };
});