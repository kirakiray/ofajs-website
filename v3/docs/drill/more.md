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
define(async ({load}) => {
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