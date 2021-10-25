# 模块化入门

ofajs 内部集成了一个微型的模块化库，让模块可以被直接引用；

### load

默认提供了 `load` 函数用于加载资源；使用方法为资源地址直接用 `load` 运行，会返回promise对象（资源进行异步加载）；

load函数默认支持 `js`、`mjs`、`json`、`wasm`、`html` 文件类型，不支持的类型，将返回 [response对象](https://developer.mozilla.org/zh-CN/docs/Web/API/Response)；

<code-run show-code="top">
    <template>
        <codehead>
            <script src="https://cdn.jsdelivr.net/gh/kirakiray/ofa.js/dist/ofa.js"></script>
        </codehead>
        <div id="target">Loading</div>
        <script>
            // 功能类似import("xxxxx")
            load("https://kirakiray.github.io/o-book/comps/code-view/demo.json").then(manifest=>{
                $("#target").text = manifest;
            });
        </script>
    </template>
</code-run>

根据不同的类型，load函数返回的数据也不一样；

* **js** 普通js文件则不会返回值，模块函数则返回模块内容
* **mjs** 返回 es module 模块内容
* **json** 返回对象数据
* **wasm** WebAssembly 编译的函数对象
* **html** 返回字符串

如果想了解更多ofajs模块化系统的知识，参考 [模块化](../drill/guide.md)；

### Component模块

组件模块：用 `Component` 函数定义的 `.js` 文件；

模块函数的参数就包含 `load` 加载器，使用模块内的 `load` 函数，能加载当前模块的相对地址；`./` 为和当前模块文件同目录，`../`为当前模块的上一级目录；

当组件有其他依赖组件或模块时，请使用内部 `load` 函数进行提前加载；

模块函数内返回的值，为该模块的数据；

```javascript
Component(async({load})=>{
    let data = await load("./package.json");

    return {
        data:{
            color:data.color
        }
    };
});
```

框架底层在获取 Component 定义的模块数据后，会立即注册原生组件；

### define模块

普通模块：用 `define` 函数定义的 `.js` 文件；用于管理代码逻辑，使用方法和 `Component` 模块几乎一致（`define`模块没有后处理操作）；

```javascript
// xxx.js
define(async({load})=>{
    let data = await load("./package.json");

    return {
        COMMON_RED:"#ff0000",
        package:data,
        ...
    };
});
```

```javascript
(async()=>{
    const data = await load("xxx.js");
    console.log('COMMON_RED => ',data.COMMON_RED); // => 'COMMON_RED => #ff0000'
    console.log('package => ',data.package);
})();

// 👆🏻上面是es7语法，看起来更线性，跟下面的效果是一样的
// load("xxx.js").then(data=>{
//     console.log('COMMON_RED => ',data.COMMON_RED);
//     console.log('package => ',data.package);
// });
```

demo:

<code-view src="/demo/chapter3/test-define/package.json" style="height:500px;"></code-view>
