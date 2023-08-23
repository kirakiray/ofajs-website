Component(async ({ load }) => {
    await load("./form-star.js");

    return {
        data: {
            formdata: {}
        },
        ready() {
            // 必须指定选择器
            this.formdata = this.shadow.form("[target-form]");
        }
    };
})