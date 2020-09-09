Component(async (load) => {
    await load("../../components/fntui/fnt-tabs -p");

    return {
        tag: "articleAside",
        temp: true
    };
})