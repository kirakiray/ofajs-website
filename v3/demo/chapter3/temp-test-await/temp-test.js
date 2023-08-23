Component(async ({ load }) => {
    return {
        data: {
            count: Promise.resolve(100),
        },
        proto: {
            resetCount() {
                this.count = new Promise((resolve, reject) => {
                    setTimeout(() => {
                        let num = Math.floor(Math.random() * 100);

                        if (num > 50) {
                            resolve(num);
                        } else {
                            reject(num);
                        }
                    }, 300);
                });
            }
        }
    };
});