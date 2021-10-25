define(async ({ load }) => {
    let data = await load("./package.json");

    return {
        COMMON_RED: "#ff0000",
        package: data,
    };
})