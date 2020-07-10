Component({
    tag: "fnt-button",
    temp: true,
    css: true,
    attrs: ["color", "disabled", "type"],
    data: {
        disabled: null,
        // 默认null为按钮     circle 圆形模式    text 文本模式     Inverted 颠倒模式
        type: null,
        color: null,
        // 是否深色模式（深色模式字体为白色，背景叠加色更深一点）
        deepmode: 0
    },
    watch: {
        color(e, color) {
            let styleObj = this.$shadow.$('.btn').style;
            if (color) {
                Object.assign(styleObj, {
                    backgroundColor: color,
                    borderColor: color
                });

                // 获取rgb
                let colorStr = styleObj.backgroundColor.replace(/rgba?\((.+)\)/, "$1")

                // 是不是深色
                let isDeep = 0;

                colorStr.split(",").forEach((e, i) => {
                    if (i <= 2 && parseInt(e) < (255 / 2)) {
                        // 有深色的，就进入深色模式
                        isDeep = 1;
                    }
                });

                this.deepmode = isDeep;
            } else {
                Object.assign(styleObj, {
                    backgroundColor: "",
                    borderColor: ""
                });
                this.deepmode = 0;
            }
        }
    },
    proto: {
        clickBtn(e) {
            if (this.disabled != undefined && this.disabled != null) {
                e.bubble = false;
            }
        }
    }
});