define(async (load, exports, modules, { DIR }) => {
    // 加载全局样式
    ofa.globalcss = await load('./css/public.css -getLink');
    await load('./css/index.css');

    // 加载关键组件
    await load("./components/book-aside -p");

    ofa.config({
        paths: {
            "@obook/": DIR
        }
    });

    // 加载 book.json
    const book = await load("book.json");
    const { summaryToData } = await load("./summaryToData");
    const { transToItem } = await load("./util");

    // 加载summary
    let summary = await load(book.SUMMARY);

    let data = summaryToData(summary);
    const aside = $("#aside");

    $(".ob_left_title").text = data.title;

    // 填充侧边栏
    data.items.forEach(e => {
        let ele;
        switch (e.type) {
            case "item":
                ele = transToItem(e);
                break;
            case "title":
                ele = $(`
                <h2 class="ob_left_title2">${e.text}</h2>
                `);
                break;
            case "line":
                ele = $(`<hr />`);
                break;
        }
        ele && aside.push(ele);
    });

    // 首页设置
    const app = $('o-app');

    // 使用路由模式
    app.router = "1";

    // 添加首页
    app.push(`<o-page src="@obook/pages/mdPage/mdPage?url=${book.index}"></o-page>`);

    // 修正左侧激活状态
    function fixLeftSide() {
        // 去掉旧的激活
        $.all("ba-item[active]").forEach(item => item.active = null);

        let activeItem = $(`ba-item[path="${app.currentPage.params.url}"]`);
        activeItem && (activeItem.active = 2);
    }

    // 路由跳转时更换
    app.on("navigate", (e, data) => {
        fixLeftSide();
    });

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
});