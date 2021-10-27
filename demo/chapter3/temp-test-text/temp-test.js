Component(async ({ load }) => {
    return {
        data: {
            count: 0,
            msg: "click count 0"
        },
        proto: {
            plusOne(count) {
                return count + 1;
            }
        },
        ready() {
            this.shadow.$("#btn").on("click", e => {
                this.msg = 'start click ' + this.count++;
            });
        }
    };
});