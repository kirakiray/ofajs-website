Page(async (load) => {
    // md解析器
    await load("./marked.min.js", "./highlight.min.js");

    const pubData = await load("../../data");

    const fixPath = (path, dir) => {
        // 去除所有./
        path = path.replace(/^\.\//, "");
        path = path.replace(/\/\.\//g, "/");

        // 修正上一级
        let n_arr2 = [];
        (dir + path).split("/").forEach(e => {
            if (e == "..") {
                n_arr2.splice(-1);
            } else {
                n_arr2.push(e);
            }
        });

        return n_arr2.join("/");
    }

    return {
        data: {
            prevPageName: "",
            prevPagePath: "",
            nextPageName: "",
            nextPagePath: "",
            initMd: 0
        },
        proto: {
            clickBack() {
                if (this.app.currents.slice(-2)[0].src.replace(/.+url=(.+)/, "$1") == this.prevPagePath.replace(/.+url=(.+)/, "$1")) {
                    this.back();
                } else {
                    this.navigate({ src: this.prevPagePath })
                }
            }
        },
        async ready() {
            // 还原loading
            this.attrs.oLoading = 1;

            let { url } = this.params;

            // 请求并转换数据
            let mdData = await load(url);
            let mdText = marked(mdData);

            // 修正图片资源
            {
                let rootDir = url.replace(/(.+\/).+/, "$1");
                mdText = mdText.replace(/<img.*?>/g, (imgEleStr) => {
                    let newstr = imgEleStr.replace(/src=['"](.+?)['"]/, (srcStr, matchStr) => {
                        if (/^.+:/.test(matchStr)) {
                            return srcStr;
                        } else {
                            return srcStr.replace(matchStr, rootDir + matchStr);
                        }
                    });

                    return newstr;
                });
            }

            // 查找下一篇文章的地址
            let inItem = false;
            let nextItem, prevItem;
            pubData.summary.links.some(e => {
                if (e.type == "item") {
                    if (e.path == url) {
                        inItem = true;
                    } else if (inItem) {
                        nextItem = e;
                        return true;
                    } else {
                        prevItem = e;
                    }
                }
            });

            if (inItem) {
                if (nextItem && nextItem.path) {
                    // 存在下一节的，设置下一页按钮
                    this.nextPageName = nextItem.name
                    this.nextPagePath = `@obook/pages/mdPage/mdPage?url=${nextItem.path}`;
                }

                if (prevItem && prevItem.path) {
                    this.prevPageName = prevItem.name
                    this.prevPagePath = `@obook/pages/mdPage/mdPage?url=${prevItem.path}`;
                }
            }

            this.$article.html = mdText;

            // 对lang内容进行高亮
            this.$article.all('code').forEach(e => {
                let block = e.ele;
                if (block.getAttribute("class")) {
                    hljs.highlightBlock(block);
                } else {
                    Object.assign(block.style, {
                        color: "#24292e",
                        backgroundColor: "#f6f8fa"
                    });
                }
            });

            // 修正a标签跳转路径（md文档）
            this.$article.all("a").forEach(aEle => {
                let href = aEle.attrs.href;
                if (/\.md$/.test(href)) {
                    aEle.on("click", e => {
                        // 禁止默认跳转行为
                        e.preventDefault();

                        let url = this.params.url;
                        let fix_href = fixPath(href, url.replace(/(.+\/).+/, "$1"));

                        this.navigate({
                            src: `@obook/pages/mdPage/mdPage?url=${fix_href}`
                        });
                    });
                } else {
                    // 如果是链接，就新标签打开
                    aEle.attrs.target = "_blank";
                }
            });

            this.$article.class.add("fadein");

            this.initMd = 1;

            let $container = this.$container;
            let scrollTimer = 0;
            const articleAside = this.$host.$articleAside;
            $container.on("scroll", e => {
                if (scrollTimer || articleAside._inScroll) {
                    return;
                }
                scrollTimer = 1;
                setTimeout(() => {
                    let { scrollTop, clientHeight } = $container.ele;

                    // 折中算出的顶部距离
                    // let mTop = clientHeight / 2 + scrollTop;
                    let mTop = scrollTop;

                    // 所有标题距离顶部的高度
                    let titles = this.$article.all("h1,h2,h3,h4,h5")
                    let lastId = titles.length - 1;
                    titles.some((titleEle, index) => {
                        let top = titleEle.ele.offsetTop;

                        if (top >= mTop || index == lastId) {
                            articleAside.titleActive = index;
                            return true;
                        }
                    });

                    scrollTimer = 0;
                }, 100);
            });

            this.attrs.oLoading = null;
        }
    };
});