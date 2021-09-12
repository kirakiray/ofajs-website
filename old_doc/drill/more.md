# ofa.js模块化进阶

## 并行加载

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
console.log('d1.js');
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
console.log('d2.js');
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
        let [d1,d2] = await load('js/d1','js/d2');

        console.log(d1.val);
        console.log(d2.val);
    })();
    </script>
</body>

</html>
```

控制台结果可能出现两种情况：

```
d1.js
d2.js
I am d1.js
I am d2.js
```

或者

```
d2.js
d1.js
I am d1.js
I am d2.js
```

案例中， `js/d1` 和 `js/d2` 放在一块载入，所以 d1.js 和 d2.js 文件是同时异步加载的，载入顺序是不确定的； 

载入多个模块不在意先后次序，可以用这种载入模块的方法；

### pend加载中回调

还是上面的例子，改造一下：

```javascript
(async ()=>{
    let [d1,d2] = await load('js/d1','js/d2').pend(e=>{
        console.log('id => ' + e.id + ', sum => ' + e.sum);
    });

    console.log(d1.val);
    console.log(d2.val);
})();
```

控制台结果如下：

```
d1.js
id => 0 ,sum => 2
d2.js
id => 1 ,sum => 2
I am d1.js
I am d2.js
```

或者

```
d2.js
id => 1 ,sum => 2
d1.js
id => 0 ,sum => 2
I am d1.js
I am d2.js
```

pend方法设置的callback，提供加载状态数据；

另外还包括已加载的个数 `ready` 和 加载状态 `stat`;

## 初始配置

### 设置baseUrl

之前的案例，我们引用文件的根目录是当前html目录；

如下：

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
        let d1 = await load('js/d1');

        console.log(d1.val);
    })();
    </script>
</body>

</html>
```

其实我们可以更改 `baseUrl`，如下：

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
        ofa.config({
            baseUrl:"js/"
        });

        let d1 = await load('d1');

        console.log(d1.val);
    })();
    </script>
</body>

</html>
```

通过 `config` 方法，我们将根目录变成 `js/`；

通过修改 `baseUrl`，我们还能使用其他服务器下的目录；

假设将 `js` 文件都迁移到CDN服务器（假设CDN服务器是 `http://xxx.com/`），那么可以很快修正目录地址：

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
        ofa.config({
            baseUrl:"http://xxx.com/js/"
        });

        let d1 = await load('d1');

        console.log(d1.val);
    })();
    </script>
</body>

</html>
```

注意：配置 `baseUrl`是目录，所以记得在末尾加上斜杠 `/` 表示目录地址；

### 设置 paths

现在我们多了一个文件 `b.js`，在一个很深的目录里；

目录结构:

* index.html
* js/
    * ofa.js
    * a.js
    * testdir1/
        * testdir2/
            * testdir3/
                * b.js


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
        
        (async ()=>{
            ofa.config({
                baseUrl:"js/"
            });

            await load('a');
           
            await load('testdir1/testdir2/testdir3/b');
        })();
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

`b.js`↓

```javascript
(function(){
    console.log('I am b.js');
})();
```

控制台的结果是

```
I am a.js
I am b.js
```

这个`b.js`所在很深的目录，我们可以通过配置 `paths` 定义它的短路径；

```javascript
(async ()=>{
    ofa.config({
        baseUrl:"js/",
        paths:{
            bjs:"testdir1/testdir2/testdir3/b"
        }
    });

    await load('a');
    
    await load('bjs');
})();
```

改成这样跑的结果是一样的

```
I am a.js
I am b.js
```

注意一点的是，因为我们的 `baseUrl` 是基于 `js/`的，所以 `paths`里定义的路径也是相对 `baseUrl`；

当我们需要使用CDN上的资源，就可以很方便的修改了，如下：

```javascript
(async ()=>{
    ofa.config({
        baseUrl:"js/",
        paths:{
            jq:"http://code.jquery.com/jquery-3.3.1.js"
        }
    });

    await load('jq');
})();
```

这样我们就能很快用上 CDN 的资源；

不仅文件可以配置 `paths`，目录也能配置 `paths`，接着这个案例：

```javascript
(async ()=>{
    ofa.config({
        baseUrl:"js/",
        paths:{
            "test/":"testdir1/testdir2/testdir3/"
        }
    });

    await load('a');
    
    await load('test/b');
})();
```

结果跟上面一样；这里定义了目录 `test/`，所以引用目录会被替换为后面的路径，记得带上斜杠 `/` 结尾，斜杠结尾代表目录；

所以，当我们要引用CDN的资源，也可以用下面的方法；

```javascript
(async ()=>{
    ofa.config({
        baseUrl:"js/",
        paths:{
            "cdn/":"http://xxx.com/cdn/"
        }
    });

    await load('cdn/jquery');
})();
```

用法有点像 `baseUrl`；

## 初始化函数定义

要保证 `ofa.js` 载入完成后才执行的函数，可以直接设置全局变量 `ofa` 定义函数；

如下：

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
    ofa = async ()=>{
        let d1 = await load('js/d1');
        console.log(d1.val);
    }
    </script>
</body>

</html>
```

定义的 ofa 变量的函数，将会保证 `ofa.js` 载入完成后执行；

所以，这时候我们能将 `ofa.js` 的引用script标签改成异步的；

```html
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <title>01-5</title>
    <!-- 改动了这里 ↓ -->
    <script src="js/ofa.js" async></script>
    <!-- 改动了这里 ↑ -->
</head>

<body>
    <script>
    ofa = async (ofa)=>{
        let d1 = await load('js/d1');
        console.log(d1.val);
    }
    </script>
</body>

</html>
```

注意看我们标签上加了 `async` 属性， `ofa.js` 也不会阻塞页面；

无论 `ofa.js` 先载入还是后载入，都会执行下面定义在 `ofa` 全局变量上的函数；

而通过 `ofa.js` 初始化后，原来的全局变量 `ofa` 将会作为参数传递回来，`ofa`全局变量会被替换回来；

## 参数

使用 `load` 函数能使用特定参数，如下

### -r

```javascript
ofa.config({
    baseUrl:"js/"
});
load('a');
load('b -r');
```

如上案例 `load('a')` 会引用 `js/a.js` 文件，而 `load('b -r')` 则会引用根目录的 `b.js` 文件，无视 `baseUrl:"js/"` 的设定

### -pack

```javascript
ofa.config({
    baseUrl:"js/"
});
load('a');
load('b -pack');
```

如上案例 `load('a')` 会引用 `js/a.js` 文件，而 `load('b -pack')` 会载入 `js/b/b.js`；

`-pack` 参数作为 `ofa` 的**包**，包的自动文件是包目录内和包同名的js文件；

## 报错机制

`load`函数运行返回回来的都是 Promise对象，跟处理Promise报错一样做就行了；

```javascript
try{
    let [a,b] = load('js/a','js/b');
}catch(err){
    console.log(err);
}
```

又或者

```javascript
let [a,b] = load('js/a','js/b').catch(err =>{
    console.log(err);
});
```

```javascript
let [a,b] = load('js/a','js/b').catch(err =>{
    console.log(err);
});
```

报错的同时会触发全局的 `ofa.onerror` 方法;

```javascript
ofa.onerror = (err)=>{
    console.log(err);
}
```