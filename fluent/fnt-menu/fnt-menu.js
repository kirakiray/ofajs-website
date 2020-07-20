Component(async (load) => {
    await load("./fnt-menu-item -p");

    return {
        tag: "fnt-menu",
        temp: true,
        css: true,
        attrs: {
            // 是否锤子
            vertical: null,
            // 颜色
            color: null,
            // 是否反色模式
            inverted: null,
            // 线的颜色
            lineColor: null
        },
        watch: {
            vertical() {
                $.nextTick(() => {
                    this.refreshLine();
                });
            },
            lineColor(e, color) {
                if (color) {
                    if (color && !/^rgb/.test(color.trim()) && !/^#/.test(color.trim())) {
                        // 不是颜色开头的，设置变量色
                        color = `var(--fnt-${color})`;
                    }
                    this.$line.style.backgroundColor = color;
                } else {
                    this.$line.style.backgroundColor = "";
                }
            },
        },
        proto: {
            // 刷新UI的激活线
            refreshLine() {
                let activeItem = this.$("fnt-menu-item[active]");

                if (this.vertical === null) {
                    Object.assign(this.$line.style, {
                        width: activeItem.width + "px",
                        height: "",
                        left: activeItem.ele.offsetLeft + "px",
                        top: ""
                    });
                } else {
                    Object.assign(this.$line.style, {
                        width: "",
                        height: activeItem.height + "px",
                        left: "",
                        top: activeItem.ele.offsetTop + "px"
                    });
                }
            }
        },
        ready() {
            this.on("click", "fnt-menu-item", e => {
                this.all(`fnt-menu-item[active]`).forEach(e => e.attrs.active = null);
                e.target.attrs.active = "";
                this.refreshLine();
            });

            setTimeout(() => {
                this.refreshLine();
            }, 100);
        }
    };
});