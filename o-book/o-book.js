define(async (load) => {
    // 加载关键组件
    await load("./components/book-aside -p");

    // 加载 book.json
    const book = await load("book.json");
    const { summaryToData } = await load("./summaryToData");

    // 加载summary
    let summary = await load(book.SUMMARY);

    let data = summaryToData(summary);

    // 转换item数据为element
    function transToItem(itemData) {
        let itemEle = $(`<ba-item name="${itemData.name}"></ba-item>`);

        itemData.childs.forEach(childData => {
            let c_ele = transToItem(childData);

            itemEle.push(c_ele);
        });

        return itemEle;
    };

    const aside = $("#aside");

    // 填充侧边栏
    data.forEach(e => {
        if (e.type == "item") {
            let ele = transToItem(e);

            aside.push(ele);
        }
    });

});