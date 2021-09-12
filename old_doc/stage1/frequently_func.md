# 常用方法

除了 [事件机制](./event.md) 的几个方法外，还有几个比较常用的方法；

### is(expr)

检测元素是否符合这个给定的表达式expr；

> 表达式为 [CSS选择器](https://developer.mozilla.org/zh-CN/docs/Web/CSS/CSS_Selectors)

```html
<body>
    <div class="a" title="It is a">
        <button id="testEle" class="a1" data-color="red">I am a1</button>
    </div>
</body>
<script>
    let target = $("#testEle");

    console.log(target.is(".a1")); // => true
    console.log(target.is('[data-color="red"]')); // => true
    console.log(target.is(".a")); // => false
    console.log(target.parent.is(".a")); // => true
    console.log(target.parent.is(".a[title]")); // => true
</script>
```

### siblings(expr)

获取符合表达式的兄弟元素；

没表达式的情况下，获取所有兄弟元素；

返回的数据为 Array 类型；

```html
<body>
    <div class="a" title="It is a">
        <button id="testEle" class="a1" data-color="red">I am a1</button>
        <div class="a2">I am a2</div>
        <p class="a3">I am a3</p>
        <span class="a4">I am a4</span>
    </div>
</body>
<script>
    let target = $("#testEle");
    
    // 一共四个元素，除了testEle外还剩3个
    console.log(testEle.siblings().length); // => 3

    // 符合div是.a2一个
    console.log(testEle.siblings("div").length); // => 1

    // 符合div和span的条件是.a2 和 .a4 两个
    console.log(testEle.siblings("div,span").length); // => 2
</script>
```

### parents(expr,until)

获取符合表达式expr的所有父层元素;

没有表达式expr的情况下，获取所有父层元素；

until存在的情况下，在到达符合until表达式的情况下，停止向上查找父元素；返回的结果不包含符合 until表达式的内容

```html
<html lang="en">
<body>
    <div class="a" title="It is a">
        <div class="b">
            <div class="c">
                <div class="d"></div>
            </div>
        </div>
    </div>
</body>
<script>
    let target = $(".d");
    
    console.log(target.parents().length); // => 5 // 所有的父元素，按顺序分别是 .c .b .a body html 5个

    console.log(target.parents("[class]").length); // => 3 // 符合带class属性的父元素，.c .b .a 都符合条件

    console.log(target.parents("", ".a").length); // => 2 // 父层条件到 .a 的时候禁止再向上查找，所以 .c .b 符合条件；
</script>
</html>
```

### clone()

克隆一份新的元素；

```html
<body>
    <div class="a" data-val="data a">I am a</div>
</body>
<script>
    let newEle = $(".a").clone();

    // 具有和 .a 一样的数据，但并不是 .a
    console.log(newEle.text); // => I am a
    console.log(newEle.data.val); // => data a

    console.log(newEle === $(".a")); // => false
</script>
```

### all(expr)

查找所有符合表达式expr的子级元素；

```html
<body>
    <button>I am a1</button>
    <div class="a2">I am a2</div>
    <p class="a3">I am a3</p>
    <span class="a4">I am a4</span>
</body>
<script>
    // let eles = $.all("[class]"); // 这个是全局搜索
    let eles = $("body").all("[class]");

    console.log(eles.length); // => 3 // .a2 .a3 .a4 符合带class的条件
</script>
```