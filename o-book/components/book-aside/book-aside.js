Component(async (load) => {
    await load("./ba-item");

    return {
        tag: "book-aside",
        temp: true,
        ready() {
            this.on("click", "ba-item", e => {
                let { delegateTarget } = e;

                // 去掉已激活的item
                let target = this.$(`ba-item[active="2"]`);

                if (target) {
                    if (target === delegateTarget) {
                        return;
                    } else {
                        target.attrs.active = null;
                    }
                }

                delegateTarget.attrs.active = 2;

                this.all(`ba-item[active="1"]`).forEach(ele => ele.attrs.active = null);

                // 往前的ba-item级都要加active = 1
                delegateTarget.parents(null, this).forEach(ele => {
                    ele.attrs.active = 1;
                });
            });
        }
    };
})