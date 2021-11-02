Page(async ({ load }) => {
    return {
        data: {
            title: "demo page",
            ua: "",
            screen: {}
        },
        ready() {
            this.ua = navigator.userAgent;
            this.screen.width = screen.width;
            this.screen.height = screen.height;
        }
    };
});