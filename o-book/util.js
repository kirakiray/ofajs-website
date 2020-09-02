define(() => {
    // 转换item数据为element
    function transToItem(itemData) {
        let itemEle = $(`<ba-item name="${itemData.name}"></ba-item>`);

        itemData.childs.forEach(childData => {
            let c_ele = transToItem(childData);

            itemEle.push(c_ele);
        });

        return itemEle;
    };

    return { transToItem };
});