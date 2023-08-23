# o-app路由绑定

当 `o-app` 标签初始化完成后，通过访问 `router` 属性，查看当前 `o-app` 标签的路由数据；

使用官方提供的 `address` 插件，让 `o-app` 和地址栏路由绑定；

<!-- ```javascript
load("@lib/router/address.js").then(init => {
    // 初始化 o-app标签
    init($('o-app'));
});
``` -->

路由绑定的逻辑一般会写在 `o-app` 的 `src` 模块上；

```javascript
// o-app初始化用模块
define(async ({ load }) => {
    return {
        data: {
            home: "pages/home -p"
        },
        ready(){
            load("@lib/router/address.js").then(init => init(this));
        }
    };
});
```

请注意，页面内只能和地址栏**绑定一次**；

## 路由分享

配置路由分享字段 `shareHash`，能让分享的地址也定位到当前页；

```javascript
define(async ({ load }) => {
    return {
        data: {
            home: "pages/home -p"
        },
        proto: {
            // shareHash 的 get 和 set 一定要成对应关系
            // 显示出来的hash
            get shareHash() {
                // 可设置
                return this.currentPage.src;
            },
            // 通过外部 shareHash 进入的app
            // 只会在最开始加载时候进入一次，如果没有带hash数据就不会触发这个设置
            set shareHash(hash) {
                // 直接添加
                this.router.push(hash);
            }
        },
        ready() {
            load("@lib/router/address.js").then(init => init(this));
        }
    };
});
```

[demo地址](demo/chapter4/app-test2/demo.html)