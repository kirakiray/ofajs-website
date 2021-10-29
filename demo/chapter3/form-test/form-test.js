Component(async () => {
    return {
        data: {
            formdata: {}

        },
        ready() {
            // form方法： 默认参数已经是 "input,textarea,select"，所以使用原生表单元素情况下，可以为空；
            // this.formdata = this.shadow.form();
            this.formdata = this.shadow.form("input,textarea,select");
        }
    };
})