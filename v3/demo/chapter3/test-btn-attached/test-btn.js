Component(async () => {
    return {
        data: {
            count: 0
        },
        attached() {
            this.on("click", () => {
                this.count--;
            });
            // 可直接设置下划线开头的属性
            this._timer = setInterval(() => {
                this.count++;
            }, 1000);
        },
        detached() {
            clearInterval(this._timer);
        }
    };
});