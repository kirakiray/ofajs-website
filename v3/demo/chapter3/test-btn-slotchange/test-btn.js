Component(async () => {
    return {
        data: {
            // 统计子元素改变次数
            count: 0,
        },
        ready() {
            // 监听slot变动
            this.shadow.$("slot").on("slotchange", e => {
                this.count++;
            });
        }
    };
});