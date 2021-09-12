# 基础使用

## 如何开始使用 ofa.js模块化系统

将 ofa.js的主体js文件引入；

`index.html`

```html
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <title>base use</title>
    <script src="js/ofa.js"></script>
</head>

<body>
</body>

</html>
```

## 开始使用

目录结构:

* index.html
* js/
    * ofa.js
    * a.js


`index.html`↓

```html
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <title>01</title>
    <script src="js/ofa.js"></script>
</head>

<body>
    <script>
        load('js/a');
    </script>
</body>

</html>
```

`a.js`↓

```javascript
(function(){
    console.log('I am a.js');
})();
```

控制台的结果是

```
I am a.js
```

解释：

`load` 函数将 `js/a.js` 的文件引用，；

ofa.js 会自动补齐 `.js` 后缀（加上`.js`后缀也没关系）；

当重复 `load` 引用同一文件，那个文件不会被重复载入，只会载入一次；

例如我们改动 `index.html`

```html
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <title>01-2</title>
    <script src="js/ofa.js"></script>
</head>

<body>
    <script>
        load('js/a');
        
        load('js/a');

        setTimeout(()=>{
            load('js/a');
        },1000);
    </script>
</body>

</html>
```


控制台的结果还是一样

```
I am a.js
```

`js/a.js` 只会被载入一次，不会因为重复的使用 `load` 函数而被重复载入；

到目前阶段，你可以理解 `ofa.js` 是 **文件载入器**；

## 完成后操作

案例结构同上

load函数运行后返回的是一个 [Promise](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Promise) 对象，加载文件完成后进入 `fulfilled` 状态，使用如下:

`index.html`

```html
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <title>01-3</title>
    <script src="js/ofa.js"></script>
</head>

<body>
    <script>
        load('js/a').then(()=>{
            console.log('run ok');
        })
    </script>
</body>

</html>
```

控制台的结果

```
I am a.js
run ok
```

通常情况下，会使用 `await` 优化代码；

`index.html`

```html
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <title>01-4</title>
    <script src="js/ofa.js"></script>
</head>

<body>
    <script>
    (async ()=>{
        await load('js/a');
        console.log('run ok');
    })();
    </script>
</body>

</html>
```

控制台结果同上；

```
I am a.js
run ok
```

## define模块

目录结构:

* index.html
* js/
    * ofa.js
    * d1.js
    * d2.js

`d1.js`↓

```javascript
define({
    val:"I am d1.js"
});
```

`d2.js`↓

```javascript
define(async (load) => {
    let d1 = await load('js/d1');

    return {
        val: "I am d2.js",
        d1_val: d1.val
    };
});
```

`index.html`↓

```html
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <title>01-5</title>
    <script src="js/ofa.js"></script>
</head>

<body>
    <script>
    (async ()=>{
        // let [d1,d2] = await load('js/d1','js/d2');

        let d1 = await load('js/d1');

        console.log(d1.val);

        let d2 = await load('js/d2');

        console.log(d2.val);

        console.log(d1.val === d2.d1_val);
    })();
    </script>
</body>

</html>
```

控制台结果:

```
I am d1.js
I am d2.js
true
```

与 [AMD规范模块](https://github.com/amdjs/amdjs-api/wiki/AMD) **相似**，通过 js文件 定义 `define` 函数设置我们的模块；

同路径的define模块文件只会被加载一次，后面都是加载内存的；

`ofa.js` 的define模块是通过函数内返回的Promise对象来确定模块的载入状态；

关于更多 `ofa.js` 的define模块的使用方法，参照 [define模块的详细使用](02.md)；

## task模块

目录结构:

* index.html
* js/
    * ofa.js
    * t1.js
    * t2.js

`t1.js`↓

```javascript
task(async (load,data)=>{

    let {a,b} = data;

    return a * b;
});
```

`t2.js`↓

```javascript
task(async (load,data)=>{
    let {a,b} = data;
    
    a *= 2;
    b *= 2;

    let t2_val = await load('js/t1').post({
        a,b
    });

    return t2_val;
});
```

`index.html`↓

```html
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <title>01-5</title>
    <script src="js/ofa.js"></script>
</head>

<body>
    <script>
    (async ()=>{
        let t1_val = await load('js/t1').post({
            a:20,
            b:30
        });

        console.log(t1_val);
        //  => 20 * 30 = 600

        let t2_val = await load('js/t2').post({
            a:20,
            b:30
        });

        console.log(t2_val);
        //  => (20 * 2) * (30 * 2) = 2400  
    })();
    </script>
</body>

</html>
```

控制台结果:

```
600
2400
```

通过 `load` 函数运行后返回的 Promise对象 的 `post`方法传递数据，在 `task` 函数的第二个参数得到传送过来的数据；

同路径的task模块文件也只会被加载一次，但是每次引用都会从新运行task函数内定义的函数；

更多关于 `task模块` 的使用方法，参照 [task模块详细使用](03.md);

接下来进入进阶使用 [→进阶使用](04.md)

## 载入其他文件

ofa.js同样支持载入 `.css` 、 `.json` 和 `.wasm` 文件；

```javascript
await load('xx/index.css');

let data = await load("main.json");

let addFun = await load("addFun.wasm");
```

载入css文件无返回数据，会在 `head` 内添加相应的 css文件的`<link>`标签载入；

## frame模块

通过网页内嵌一个iframe来达到多线程的目的；

相对 `WebWorker`，frame模块能使用 `element` 等api；

frame模块其实也是html文件；

`index.html`️⤵️

```html
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <title>frameTest</title>
    <script src="js/ofa.js"></script>
</head>

<body>
    <script>
    (async ()=>{
        let val = await load('testFrame1.frame').post({
            v1: 9,
            v2: 100,
            v3: 99999
        });

        console.log(val);
        // => 89999100
    })();
    </script>
</body>

</html>
```

`testFrame1.html (testFrame1.frame)`⬇️

```html
<body>
    <script>
        window.addEventListener('message', e => {
            let {
                data,
                taskId,
                type
            } = e.data;

            // 返回数据
            parent.postMessage({
                taskId,
                data: data.v1 * data.v2 * data.v3
            }, "*");
        });
    </script>
</body>
```

frame适合于计算量大的模块上；

frame模块只会加载一个iframe来计算，靠传过来的taskId辨别任务进程；所以返回数据的时候，不要忘了带taskId；
