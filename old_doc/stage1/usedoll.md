# 使用 $

## 选择元素

和 jQuery 一样，ofajs 使用 `$` 定位元素对象；

```html
<body>
    <p id="paragraph01">I am paragraph</p>
</body>
<script>
    let target = $("#paragraph01");
    
    // html:获取目标元素的html内容，更多属性的使用在下一篇文章
    console.log(target.html); // => I am paragraph
</script>
```

使用$获取或生成的对象，名为 **$元素**;

$选择器支持和 [document.querySelector](https://developer.mozilla.org/zh-CN/docs/Web/API/Document/querySelector) 保持一致，具体支持定位元素请查阅 [css选择器](https://developer.mozilla.org/zh-CN/docs/Web/CSS/CSS_Selectors);

## 查找子元素

可以在`$元素`上再使用`$`方法查找子元素；

```html
<body>
    <div id="testdiv">
        <div class="a">I am a</div>
        <div class="b">I am b</div>
        <div class="c">I am c</div>
    </div>
</body>
<script>
    // let tdiv = $("#testdiv");
    // let target = tdiv.$(".a");
    let target = $("#testdiv").$(".a");
    
    console.log(target.html); // => I am a
    console.log(target === $("#testdiv .a"));  // => true
</script>
```

**注意：** 通过`$`方法只能获取匹配条件的元素的第一个；

```html
<body>
    <div id="testdiv">
        <div class="a">I am 1</div>
        <div class="a">I am 2</div>
        <div class="a">I am 3</div>
    </div>
</body>
<script>
    let target = $("#testdiv").$(".a");

    console.log(target2.html); // => I am 1
    console.log(target2 === $("#testdiv .a"));  // => true
</script>
```

若想获取所有匹配元素，请使用下面的 `all` 方法；

## 获取所有匹配的元素

通过 `$.all` 或者 `$`元素上的`all`方法查找；

```html
<body>
    <div id="testdiv">
        <div class="a">3</div>
        <div class="a">6</div>
        <div class="a">9</div>
    </div>
</body>
<script>
    // $.all是查找全局的
    // let targets = $.all(".a"); 

    // 查找 #testdiv 内的所有 .a 元素
    // 得到的是一个数组对象
    let targets = $("#testdiv").all(".a");

    console.log(targets.length); // => 3

    let num = 0;
    targets.forEach(e=>{
        num+= parseInt(e.text);
    });
    console.log(num); // => 18

</script>
```

## 获取子节点元素

和 `jQuery` 相似，`$元素` 也是 伪数组([ArrayLike](https://cn.bing.com/search?q=%E4%BB%80%E4%B9%88%E6%98%AFArrayLike)) 对象，它的子节点就是数组内相应index的数据；

```html
<body>
    <div id="testdiv">
        <div class="a">
            <div class="a1">I am a1</div>
            <div class="a2">I am a2</div>
            <div class="a3">I am a3</div>
        </div>
        <div class="b">
            <div class="b1">I am b1</div>
            <div class="b2">I am b2</div>
            <div class="b3">I am b3</div>
            <div class="b3">I am b4</div>
        </div>
</body>
<script>
    let tdiv = $("#testdiv");

    // testdiv 的第一个元素是 .a 匹配的第一个元素
    console.log(tdiv[0] === $(".a")); // => true

    console.log(tdiv.length); // => 2  // #testdiv下有两个元素，分别是 .a和.b
    console.log(tdiv[0].length); // => 3 // .a 下有三个元素
    console.log(tdiv[1].length); // => 4 // .b 下有四个元素

    console.log(tdiv[0][0] === $(".a1")); // => true
    console.log(tdiv[0][1] === $(".a2")); // => true
    console.log(tdiv[1][0] === $(".b2")); // => true

    console.log(tdiv[1][0].html); // => I am b1
</script>
```

> 因此 `$元素` 没有 `children` 这个属性 （看不懂的可以忽略这条）

## 子节点操作

### 新增子元素

下面我们要在目标元素内添加一个新的子元素；

```html
<body>
    <div id="testdiv">
        <div class="a1">I am a1</div>
    </div>
</body>
<script>
    let target = $("#testdiv");

    console.log(target.length); // => 1

    target.push('<div class="a2">I am a2</div>');

    console.log(target.length); // => 2
</script>
```

通过 `push` 方法，在 `#testdiv` 元素内的末尾添加一个 `.a2` 的元素；

生成新元素的方法，大致为以下几种；

```javascript
// 使用原生web元素生成的方法，方便与下面几种方法进行对比
// 不推荐在实际生产中用这种方式生成
// 生成原生element的方式，再进行初始化
let ele = document.createElement("div");
ele.setAttribute("class","a2");
ele.innerHTML = "I am a2";

let tempDiv = $(ele);
```

```javascript
// html方式
let tempDiv = $('<div class="a2">I am a2</div>');
```

```javascript
// Object方式
let tempDiv = $({
    tag:"div",
    class:"a2",
    html:"I am a2"
});
```

生成新元素后就可以，就能把节点添加到相应位置；

### 子元素修改

如果你使用过 Array 对象的方法，对 `$元素` 的增删子元素操作肯定不陌生；

```html
<body>
    <div id="testdiv">
        <div class="a1">I am a1</div>
    </div>
</body>
<script>
    let target = $("#testdiv");

    // 在末尾增加一个元素
    target.push('<div class="a2">I am a2</div>');

    // 在开头添加一个元素
    target.unshift('<div class="a0">I am a0</div>');

    // 删除第一个子元素
    target.shift();

    // 删除最末的子元素
    target.pop();

    // 删除第一个元素
    target.splice(0,1);
    // 删除第一个元素，并替换为新的元素
    // target.splice(0,1,'<div class="a_rep">I am rep</div>');

    // 对所有子元素顺序进行反转
    target.reverse();

    // 子元素排序
    // target.sort();
</script>
```

对`$元素`子元素的增删，基本和Array保持一致，可查阅 [Array修改器方法](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array#%E4%BF%AE%E6%94%B9%E5%99%A8%E6%96%B9%E6%B3%95)；

> 会改变子元素的方法，目前支持 `splice`、`push`、`pop`、`unshift`、`shift`、`reverse` 和 `sort`；

当然，也可用[Array的访问方法或迭代方法](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array#%E8%AE%BF%E9%97%AE%E6%96%B9%E6%B3%95)，使用参数和Array保持一致；

> 不会改变 $元素 数据的方法，`forEach`、`map`、`concat`、`every`、`filter`、`find`、`findIndex`、`slice`、`some`、`indexOf`、`lastIndexOf`、`includes`和`join`；

### 插入元素

从目标$元素的前面或后面插入新元素；

**before** 从目标元素前方插入；

**after** 从目标元素后方插入；

```html
<body>
    <div class="container">
        <div id="testEle">I am testEle</div>
        <div>I am last element</div>
    </div>
</body>
<script>
let target = $("#testEle");

console.log($(".container").length); // => 2

console.log($(".container")[0].text); // => I am testEle
console.log($(".container")[1].text); // => I am last element

// 向 #testEle 前插入元素
target.before('<div>I am insert before Element</div>');

// 向 #testEle 后插入元素
target.after('<div>I am insert after Element</div>');


console.log($(".container").length); // => 4

console.log($(".container")[0].text); // => I am insert before Element
console.log($(".container")[1].text); // => I am testEle
console.log($(".container")[2].text); // => I am insert after Element
console.log($(".container")[3].text); // => I am last element
</script>
```

### 注意事项

`$元素` 具有**唯一性**，被添加到元素后，不能再被添加，不然会造成数据位移；

```html
<body>
    <div id="test1">
        <div class="a1">I am a1</div>
    </div>
    <div id="test2">
        <div class="b1">I am b1</div>
        <div class="b2">I am b2</div>
        <div class="b3">I am b3</div>
    </div>
</body>
<script>
console.log($("#test1").length); // => 1
console.log($("#test2").length); // => 3

// .a1 被从 #test1 剪切过去 #test2末尾 了
let target = $("#test1")[0];
$("#test2").push(target);

console.log($("#test1").length); // => 0
console.log($("#test2").length); // => 4
</script>
```

如下案例，实战中常见的问题。

```html
<body>
    <div id="test1">
        <div class="a1">I am a1</div>
    </div>
    <div id="test2">
        <div class="b1">I am b1</div>
        <div class="b2">I am b2</div>
        <div class="b3">I am b3</div>
    </div>
</body>
<script>
console.log($('#test1').length); // => 1
console.log($('#test2').length); // => 3

// 生成新元素
let tempEle = $('<div class="new_div">I am new div</div>');
// 添加到 #test1 内
$('#test1').push(tempEle);

console.log($('#test1').length); // => 2

// tempEle 再被添加，原来在test1的位置，会被位移到test2中
$('#test2').push(tempEle);

console.log($('#test1').length); // => 1
console.log($('#test2').length); // => 4

</script>
```

为了避免位移情况，请使用 `clone` 方法进行重新生成后添加

```html
<body>
    <div id="test1">
        <div class="a1">I am a1</div>
    </div>
    <div id="test2">
        <div class="b1">I am b1</div>
        <div class="b2">I am b2</div>
        <div class="b3">I am b3</div>
    </div>
</body>
<script>
console.log($('#test1').length); // => 1
console.log($('#test2').length); // => 3

// 生成新元素
let tempEle = $('<div class="new_div">I am new div</div>');
// 添加到 #test1 内
$('#test1').push(tempEle);

console.log($('#test1').length); // => 2

// 添加一份克隆的元素
$('#test2').push(tempEle.clone());

console.log($('#test1').length); // => 2
console.log($('#test2').length); // => 4

</script>
```


