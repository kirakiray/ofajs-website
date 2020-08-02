ofa = async () => {
    ofa.globalcss = "css/public.css";

    // 顶部和侧边栏组件
    await load("components/ofa-nav -p", "components/ofa-aside -p", "fluent/fnt-tabs -p");

    // 主app
    const app = $("o-app"), nav = $("ofa-nav"), aside = $("ofa-aside");

    // 顶部导航点击切换
    nav.$('fnt-tabs').on("changeTab", (e, target) => {
        if (target) {
            let src = target.data.src;

            if (src) {
                app.navigate({ src });
            }
        }
    });

    // 点击logo返回
    $(".logo").on("click", e => {
        if (!/^pages\/start\/start/.test($("o-app").currentPage.src)) {
            app.navigate("pages/start/start");
        }
    });

    // 获取当前路由修正顶部的导航的激活item
    app.watch("currents", (e, currents) => {
        if (currents.length) {
            let src = app.currentPage.src;

            nav.all("fnt-tabs-item").forEach(e => {
                let reg = new RegExp(`^${e.data.tab}`);
                if (reg.test(src)) {
                    e.attrs.active = "";
                } else {
                    e.attrs.active = null;
                }
            });

            // 文档状态下，允许出现侧边栏
            if (/pages\/docs\//.test(src)) {
                aside.hide = null;
            } else {
                aside.hide = "";
            }
        }
    }, true);

    setTimeout(() => {
        // 去掉loading
        $("#startLoading").class.add("hide");
        setTimeout(() => {
            $("#startLoading").remove();
        }, 500);
    }, 200);
}