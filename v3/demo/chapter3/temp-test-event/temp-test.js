Component(async ({ load }) => {
    return {
        data: {
            count: 0,
            msg: "click count 0"
        },
        proto: {
            multiply() {
                this.count = this.count * 1.2;
            },
            plusNum(num) {
                this.count = this.count + num;
            }
        }
    };
});