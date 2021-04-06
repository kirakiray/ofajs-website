# 事件

### on

对元素进行事件绑定；

```html
<body>
    <div id="shower"></div>
    <button id="testEle">测试按钮</button>
</body>
<script>
// 统计点击次数
let num = 0;

 $("#testEle").on("click",function(event){
     num++;
     $("#shower").html= num;
 });
</script>
```

当点击 测试按钮 时，按钮上面会显示点击次数；

`on` 支持 [Web Event](https://developer.mozilla.org/zh-CN/docs/Web/Events)（原生事件）和 自定义事件，事件机制和原生事件基本保持一致。

> **自定义事件** 不是原生的事件，就是自定义事件

### 事件冒泡

事件会向上冒泡，如下代码，每次点击将会被 `+2`；

```html
<body>
    <div id="shower"></div>
    <div id="targetDiv">
        <button id="testEle">测试按钮</button>
    </div>
</body>
<script>
// 统计点击次数
let num = 0;

 $("#testEle").on("click",function(event){
     num++;
     $("#shower").html = num;
 });

 $("#targetDiv").on("click",function(event){
     num++;
     $("#shower").html = num;
 });
</script>
```

当触发完 `#testEle` 的 click事件，该事件会冒泡，向上一级触发click；而 `#targetDiv` 也绑定了click事件，所以又会被触发一次；

可以修正 `event` 对象的 `bubble` 禁止事件向上冒泡；

```html
<body>
    <div id="shower"></div>
    <div id="targetDiv">
        <button id="testEle">测试按钮</button>
    </div>
</body>
<script>
// 统计点击次数
let num = 0;

 $("#testEle").on("click",function(event){
     num++;
     $("#shower").html = num;
     event.bubble = false; // 设置禁止冒泡，默认值为true
 });

 $("#targetDiv").on("click",function(event){
     // 因为上面禁止冒泡了，这个事件函数不会被触发
     num++;
     $("#shower").html = num;
 });
</script>
```

代码改良后，targetDiv 绑定的 click 不会被触发；跟原生事件的 [stopPropagation](https://developer.mozilla.org/zh-CN/docs/Web/API/Event/stopPropagation) 保持一致；

### one

对元素绑定事件，并且事件只会被触发一次；

```html
<body>
    <div id="shower"></div>
    <button id="testEle">测试按钮</button>
</body>
<script>
// 统计点击次数
let num = 0;

 $("#testEle").one("click",function(event){
     num++;
     $("#shower").html= num;
 });
</script>
```

当点击过一次 `testEle` 后，绑定相应的 `click` 事件函数就会失效。

### emit

触发$元素上相应事件的函数（主要用于触发自定义事件）；

```html
<body>
    <div id="shower"></div>
    <div id="targetDiv">
        <div id="testEle">测试元素</div>
    </div>
</body>
<script>
// 统计点击次数
let num = 0;

$("#testEle").on("haha",function(event){
    num++;
    $("#shower").html = num;
});

$("#targetDiv").on("haha",function(event){
    num++;
    $("#shower").html = num;
});

$("#testEle").emit("haha");
</script>
```

上面代码在 `targetDiv` 和 `testEle` 上绑定了一个名为 `haha` 的事件，然后通过 `emit` 可以主动触发事件；

每次 `$("#testEle").emit("haha")` 被调用，`haha`事件在触发`#testEle`后冒泡到`#targetDiv`，`#shower`内数字都会被+2，

### emitHandler

触发$元素上相应事件的函数，但不会产生冒泡；

```html
<body>
    <div id="shower"></div>
    <div id="targetDiv">
        <div id="testEle">测试元素</div>
    </div>
</body>
<script>
// 统计点击次数
let num = 0;

$("#testEle").on("haha",function(event){
    num++;
    $("#shower").html = num;
});

$("#targetDiv").on("haha",function(event){
    // 这个事件函数不会被触发，因为emitHandler只会触发对应元素事件，没有冒泡到#targetDiv这个元素
    num++;
    $("#shower").html = num;
});

$("#testEle").emitHandler("haha");
</script>
```

### off

注销绑定的事件；

```html
<body>
    <div id="shower"></div>
    <button id="testEle">测试按钮</button>
</body>
<script>
// 统计点击次数
let num = 0;

function tFun(event){
    num++;
    $("#shower").html = num;
}

$("#testEle").on("click",tFun);

setTimeout(function(){
    $("#testEle").off("click",tFun);
},5000);
</script>
```

5秒前点击 **测试按钮** 会递增显示数字，5秒后失效。

## 事件相关

### cancel 放弃所有事件

```html
<body>
    <div id="shower"></div>
    <div id="targetDiv">
        <button id="testEle">测试按钮</button>
    </div>
</body>
<script>
// 统计点击次数
let num = 0;

$("#testEle").on("click",function(event){
    num++;
    $("#shower").html = num;
    event.cancel = true; // 设置禁止走后续事件，默认值为false
});

$("#testEle").on("click",function(event){
    // 因为上面先触发的事件 cancel 被设置为true，这个事件函数不会被触发
    num++;
    $("#shower").html = num;
});

$("#targetDiv").on("click",function(event){
    // 因为上面先触发的事件 cancel 被设置为true，冒泡也会被禁止，这个事件函数不会被触发
    num++;
    $("#shower").html = num;
});
</script>
```

event的`cancel`属性被设置为true后，后续所有该事件绑定的函数都不会被触发，对应类似api是 [stopImmediatePropagation](https://developer.mozilla.org/zh-CN/docs/Web/API/Event/stopImmediatePropagation)

### preventDefault 禁止默认行为

可以通过 [preventDefault](https://developer.mozilla.org/zh-CN/docs/Web/API/Event/preventDefault) 禁用元素的默认行为；

```html
<body>
    <div id="shower"></div>
    <a id="testEle" href="https://developer.mozilla.org/">测试按钮</a>
</body>
<script>
// 统计点击次数
let num = 0;

$("#testEle").on("click",function(event){
    event.preventDefault(); // 禁止默认行为
    num++;
    $("#shower").html = num;
});
</script>
```

有些原生事件一般会带有默认行为，像上面 `a` 标签链接，通常情况下点击会跳转到 `href` 上的地址；

使用 `event.preventDefault()` 可以禁用掉默认行为（上面a标签的的跳转行为会被禁止）；

> 像 `drop`、`keydown` 和 `mousedown`等等在某些情况下会有默认行为

