Component(async (load) => {
    await load("./aside-item");

    return {
        tag: "ofa-aside",
        temp: true,
        attrs: {
            hide: null
        },
        data: {},
        proto: {
            _reloadActive() {
                this.forEach(item => {
                    const reg = new RegExp(`^${item.data.reg}`);

                    if (reg.test($("o-app").currentPage.src)) {
                        item.active = "";
                        // 激活的情况打开
                        item.open = "";
                    } else {
                        item.active = null;
                    }

                    item.all("a").forEach(a => {
                        if (a.attrs.href.replace("#", "") === $("o-app").currentPage.src) {
                            a.attrs.active = "";
                        } else {
                            a.attrs.active = null;
                        }
                    });
                });
            }
        },
        ready() {
            // 修正激活状态
            setTimeout(() => {
                this._reloadActive();
            }, 300);

            // 监听app变动
            $("o-app").on("navigate", e => {
                this._reloadActive();
            });
        }
    };
});