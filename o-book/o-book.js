define(async (load) => {
    // 设置全局样式
    ofa.globalcss = 'o-book/css/public.css';
    await load('o-book/css/public.css');

    // 加载关键组件
    await load("./components/book-aside -p");

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

});