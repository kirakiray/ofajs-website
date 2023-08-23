Component(async ({ load }) => {
    return {
        data: {
            count: 0,
        },
        proto: {
            changeCount() {
                this.count++;
                if (this.count == 4) {
                    this.count = 0;
                }
            }
        }
    };
});