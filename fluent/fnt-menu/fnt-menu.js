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
            theme: null
        },
        watch: {
            vertical() {
                $.nextTick(() => {
                    this.refreshLine();
                });
            },
            theme(e, color) {
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

                // 清空默认样式
                Object.assign(this.$line.style, {
                    width: "",
                    left: "",
                    height: "",
                    top: ""
                });

                // 设置非激活状态
                this._setUnActiveLine(activeItem);
            },
            // 设置激活line样式
            _setActiveLine(activeItem) {
                if (this.vertical === null) {
                    Object.assign(this.$line.style, {
                        width: activeItem.width + "px",
                        left: activeItem.ele.offsetLeft + "px",
                    });
                } else {
                    Object.assign(this.$line.style, {
                        height: activeItem.height + "px",
                        top: activeItem.ele.offsetTop + "px"
                    });
                }
            },
            // 设置line为非激活状态
            _setUnActiveLine(activeItem) {
                if (this.vertical === null) {
                    Object.assign(this.$line.style, {
                        width: activeItem.width - 16 + "px",
                        left: activeItem.ele.offsetLeft + 8 + "px",
                    });
                } else {
                    Object.assign(this.$line.style, {
                        height: activeItem.height - 16 + "px",
                        top: activeItem.ele.offsetTop + 8 + "px",
                    });
                }
            }
        },
        ready() {
            this.on("click", "fnt-menu-item", e => {
                this.all(`fnt-menu-item[active]`).forEach(e => e.attrs.active = null);
                e.target.attrs.active = "";
                this.refreshLine();
                this._setActiveLine(e.target);
            });

            // 延迟更新ui
            setTimeout(() => {
                this.refreshLine();
            }, 100);

            // hover更新宽度
            this.on("mouseover", "fnt-menu-item", e => {
                // 横向
                let activeItem = this.$("fnt-menu-item[active]");

                // 判断是否跟激活状态相等，是的话就进行下划线修正
                if (e.target === activeItem) {
                    this._setActiveLine(activeItem);
                }
            });

            this.on("mouseout", "fnt-menu-item", e => {
                let activeItem = this.$("fnt-menu-item[active]");

                if (e.target === activeItem) {
                    this._setUnActiveLine(activeItem);
                }
            });
        }
    };
});