Component(async () => {
    return {
        attrs: {
            // 轮播时间（单位毫秒）
            time: 2000,
            // 动画时长（单位毫秒）
            animeTime: 800,
            // 当前所属页数，从0开始
            currentId: 0
        },
        data: {
        },
        watch: {
            // currentId修正，确保在size范围内
            currentId(currentId) {
                if (!this.size) {
                    return;
                }

                if (currentId >= 0) {
                    this.currentId = currentId % this.size;
                } else {
                    this.currentId = currentId % this.size + this.size;
                }

                // 根据 currentId 修正项目
                this.all("[smpl-item][show]").forEach(e => e.attr("show", null));
                this.all("[smpl-item]")[this.currentId].attr("show", "");

                this.triggerHandler("changecurrent", {
                    current: this.currentId,
                });
            },
            animeTime(time) {
                this.shadow.$("#itemStye").html = `
                    ::slotted([smpl-item]) {
                        transition: all ease ${time}ms;
                    }
                `;
            }
        },
        proto: {
            // 获取item个数
            get size() {
                return this.all('[smpl-item]').length;
            },
            _initTimer() {
                this._timer = setTimeout(() => {
                    this.currentId++;
                    this._initTimer();
                }, this.time);
            }
        },
        attached() {
            this._initTimer();
        },
        detached() {
            clearTimeout(this._timer);
        }
    };
});