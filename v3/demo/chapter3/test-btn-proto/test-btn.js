Component(async () => {
    return {
        data: {
            num1: 10,
            num2: 20
        },
        proto: {
            randomNum() {
                this.num1 = parseInt(Math.random() * 50);
                this.num2 = parseInt(Math.random() * 50);
            },
            get numsum() {
                return this.num1 + this.num2;
            }
        },
        ready() {
            this.on("click", () => {
                this.randomNum();
            });
        }
    };
});