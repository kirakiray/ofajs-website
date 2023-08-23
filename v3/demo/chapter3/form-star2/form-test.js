Component(async ({ load }) => {
    await load("./form-star.js");

    return {
        data: {
            formdata: {}
        },
        proto: {
            verifyStar1(e) {
                let star = e.$target.value;

                if (star == 1) {
                    e.msg = new Error("Not eligible for 1 star");
                } else if (star == 5) {
                    e.msg = 'Confirm that the score will not be too high? ';
                }
            }
        },
        ready() {
            // 必须指定选择器
            this.formdata = this.shadow.form("[target-form]");
        }
    };
})