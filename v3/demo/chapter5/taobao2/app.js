define(async ({ load }) => {
    ofa.config({
        paths: {
            // 设置咸鱼仓库
            "@xianyu/": location.origin + '/demo/chapter5/xianyu1/'
        }
    });

    return {
        data: {
            home: "pages/list/list.js"
        }
    };
});