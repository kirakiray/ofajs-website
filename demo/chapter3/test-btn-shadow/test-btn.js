Component(async () => {
    return {
        attached() {
            this._timer = setInterval(() => {
                this.shadow.$("#target_block").text++;
            }, 1000);

            this.on("click", () => {
                this.shadow.$("#target_block").text--;
            });
        },
        detached() {
            clearInterval(this._timer);
        }
    };
});