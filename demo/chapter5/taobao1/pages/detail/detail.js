Page(async () => {
    return {
        data: {
            productId: "",
            productName: "",
            price: ""
        },
        ready() {
            this.productId = this.state.productId;
            this.productName = this.state.productName;
            this.price = this.state.price;
        }
    };
});