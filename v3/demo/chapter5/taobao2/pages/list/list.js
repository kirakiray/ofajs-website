Page(async ({ load }) => {
    return {
        data: {
            products: new Promise(res => { })
        },
        proto: {
            loadData() {
                this.products = new Promise(resolve => {
                    setTimeout(() => {
                        // 模拟请求数据
                        resolve([{
                            id: 10,
                            name: "桃木葫芦",
                            price: 100
                        }, {
                            id: 11,
                            name: "桃木橱柜",
                            price: 110
                        }, {
                            id: 12,
                            name: "桃色吊灯",
                            price: 1020
                        }, {
                            id: 13,
                            name: "桃木办公桌",
                            price: 1030
                        }, {
                            type: "xianyu",
                            id: 611,
                            name: "咸柴鱼干",
                            price: 11
                        }]);
                    }, 1000);
                });
            },
            clickItem(item) {
                if (!item.type) {
                    // 跳转到详情
                    this.navigateTo({
                        path: "pages/detail -p",
                        state: {
                            productId: item.id,
                            price: item.price,
                            productName: item.name
                        }
                    });
                } else if (item.type == 'xianyu') {
                    // 跳转到详情
                    this.navigateTo({
                        path: "@xianyu/pages/detail -p",
                        state: {
                            productId: item.id,
                            price: item.price,
                            productName: item.name
                        }
                    });
                }
            }
        },
        ready() {
            // 触发请求
            this.loadData();
        }
    };
})