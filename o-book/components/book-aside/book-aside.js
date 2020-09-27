Component(async (load) => {
    await load("./ba-item");

    return {
        tag: "book-aside",
        temp: true,
        proto: {
        },
        ready() {
        }
    };
})