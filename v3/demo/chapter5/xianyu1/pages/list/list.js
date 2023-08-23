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
                            id: 610,
                            name: "咸鸭蛋",
                            price: 10
                        }, {
                            id: 611,
                            name: "咸柴鱼干",
                            price: 11
                        }, {
                            id: 612,
                            name: "咸崂山水",
                            price: 102
                        }, {
                            id: 613,
                            name: "咸金桔",
                            price: 103
                        }, {
                            id: 614,
                            name: "咸猪手",
                            price: 104
                        }]);
                    }, 1000);
                });
            },
            clickItem(item) {
                // 跳转到详情
                this.navigateTo({
                    path: "pages/detail -p",
                    state: {
                        productId: item.id,
                        price: item.price,
                        productName: item.name
                    }
                });
            }
        },
        ready() {
            // 触发请求
            this.loadData();
        }
    };
})