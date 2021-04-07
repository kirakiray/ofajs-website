# ofajs模块化系统——`load`的入门教程

记得先引用 ofa.js 库到项目中；

```html
<script src="https://cdn.jsdelivr.net/gh/kirakiray/ofa.js/dist/ofa.js"></script>
```

当引入 **ofa.js** 文件成功后，会在全局变量内添加一个 `load` 方法

`load`方法是 **模块加载器** ，作用跟ES6的 `import` 和 nodejs的 `require` 相似。但使用 **load** 方法返回的是 [Promise](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Promise) 对象，当操作成功后，会从then内返回当前模块的内容。

```html
<script>
    load("https://ofajs.com/fntui/fnt-button/fnt-button.js").then(() => {
        console.log("fnt-button 加载完成!");
    });
</script>
```

搭配 async function 使用，效果更佳；

> 2017年后更新的浏览器已支持 **async function**

```html
<script>
    (async () => {
        await load("https://ofajs.com/fntui/fnt-button/fnt-button.js");

        console.log("fnt-button 加载完成!");
    })();
</script>
```

## 加载本地文件

上面的教程是加载互联网上的组件，如果已经将组件下载到本地，直接引用相对路径使用；

```html
<script>
    (async () => {
        await load("js/fntui/fnt-button/fnt-button.js");

        console.log("js目录下fntui/fnt-button组件加载成功！");
    })();
</script>
```

## 可省略书写方式

当加载的文件是 `js` 文件时，可以省略 `.js` 后缀；

当加载的文件和目录同名时，可以在目录前后添加 `-p` 参数，就能省略文件名;

```javascript
// 下面三行效果都是一样的
// await load("https://ofajs.com/fntui/fnt-button/fnt-button.js");
// await load("https://ofajs.com/fntui/fnt-button/fnt-button");
await load("https://ofajs.com/fntui/fnt-button -p");
```

同一资源使用`load`方法加载的只会被加载一次；

```javascript
load("test/a.js");
load("test/a.js");
load("test/a.js");
// 同时调用三次加载同一个资源，这个文件也仅只会被加载一次
```

后续的添加脚本请使用 `load` 方法；不要再使用 `script` 标签添加脚本；`ofajs` 的 `load` 提供异步加载普通`js`文件的功能；

ofajs模块化系统还有很多内容，在stage0范围内不是必学内容，你可选择自行学习。

[ofajs的模块化系统](../drill/guide.md)