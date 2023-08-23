Component(async () => {
    return {
        attrs: {
            count: 0
        },
        watch: {
            count(count) {
                switch (parseInt(count)) {
                    case 2:
                        this.style.color = "white";
                        this.style.backgroundColor = "red";
                        break;
                    case 5:
                        this.style.color = "white";
                        this.style.backgroundColor = "blue";
                        break;
                    case 7:
                        this.style.color = "white";
                        this.style.backgroundColor = "green";
                        break;
                    default:
                        if (count >= 10 && count <= 15) {
                            this.style.color = "black";
                            this.style.backgroundColor = "yellow";
                            break;
                        }
                        this.style.color = "";
                        this.style.backgroundColor = "";
                }
            }
        },
        ready() {
            this.on("click", e => {
                this.count++;
            });
        }
    };
});