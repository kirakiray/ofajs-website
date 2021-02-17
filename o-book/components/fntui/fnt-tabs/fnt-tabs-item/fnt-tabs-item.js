Component({
    tag: "fnt-tabs-item",
    temp: true,
    attrs: {
        // 是否激活状态
        active: null,
        title: null
    },
    data: {
        // 是否竖的方向，默认横向
        vertical: null
    },
    watch: {
        active() {
            if (this.parent && this.parent.is("fnt-tabs") && this.parent._refreshLine) {
                this.parent._refreshLine();
            }
        }
    }
})