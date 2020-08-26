Component({
    tag: "aside-item",
    temp: true,
    hostcss: "./aside-item-host.css",
    attrs: {
        active: null,
        open: null
    },
    ready() {
        this.$shadow.$(".name").on("click", e => {
            if (this.open === null) {
                this.open = "";
            } else {
                this.open = null;
            }
        });

        this.on("click", "a", e => {
            let target = e.target;

            let href = target.attrs.href;

            if (href.replace("#", "") === $("o-app").currentPage.src) {
                // 相同的地址
                e.preventDefault();
            }
        });
    }
});