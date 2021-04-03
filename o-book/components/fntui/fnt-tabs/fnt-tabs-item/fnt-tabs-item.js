Component({
    tag: "fnt-tabs-item",
    temp: true,
    attrs: {
        // 是否激活状态
        active: null,
        // 属于多少级
        level: "1",

    },
    data: {
        // 是否竖的方向，默认横向
        vertical: null,
        // 内容
        title: null,
    },
    watch: {
        active() {
            if (this.parent && this.parent.is("fnt-tabs") && this.parent._refreshLine) {
                this.parent._refreshLine();
            }
        }
    }
})