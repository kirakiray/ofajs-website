# 常用的属性

### ele

获取原始Element对象；

```html
<body>
    <p id="paragraph01">I am paragraph</p>
</body>
<script>
    let target = $("#paragraph01");
    let targetEle = document.querySelector("#paragraph01");
    
    console.log(target.ele === targetEle); // => true
</script>
```

### 获取父元素

获取当前元素的父节点；

```html
<body>
    <div class="main">
        <div class="m1">I am m1</div>
        <div class="m2">I am m2</div>
    </div>
</body>
<script>
    let m1Ele = $(".m1");
    
    console.log(m1Ele.parent === $(".main")); // => true
</script>
```

### 内容相关

#### html

用于获取或设定元素内的html值

```html
<body>
    <p id="paragraph01">I am paragraph</p>
</body>
<script>
    let target = $("#paragraph01");
    
    console.log(target.html); // => I am paragraph

    // 重新修改内部的html
    target.html = `<div style="color:red;">new html</div>`;
</script>
```

#### text

用于获取或设置元素内容的文本

```html
<body>
    <p id="paragraph01">I am paragraph</p>
</body>
<script>
    let target = $("#paragraph01");
    
    console.log(target.text); // => I am paragraph

    // 重新修改内部文本
    target.text = `new text`;
</script>
```

### 样式相关

#### class

获取元素的 [classList](https://developer.mozilla.org/zh-CN/docs/Web/API/Element/classList)

```html
<body>
    <p id="paragraph01" class="test1">I am paragraph</p>
</body>
<script>
    let target = $("#paragraph01");
    
    // 使用 classList API 移除、添加类值
    target.class.remove("test1"); // test1 class 被去除
    target.class.add("test2"); // test2 class 被添加

    // target.class.toggle("test2"); // 如果 test2 类值已存在，则移除它，否则添加它
</script>
```

#### style

获取元素的 style 属性；设置元素的样式就是设置到该值上

```html
<body>
    <p id="paragraph01" style="color:red">I am paragraph</p>
</body>
<script>
    let target = $("#paragraph01");
    
    console.log(target.style.color); // => red
    target.style.color = "green";
    console.log(target.style.color); // => green
    
    // 整个赋值给style，原来在style上的属性会被清空
    target.style = "font-size:18px;font-weight:600;";
    console.log(target.style.color); // => ''
</script>
```

#### css

获取元素的实际样式属性；

和style不同的，`css`属性值**只允许获取样式，不能设置样式**；设置样式请用style属性；

```html
<style>
    #paragraph01{
        color:red;
    }
</style>
<body>
    <p id="paragraph01" style="font-size:20px;">I am paragraph</p>
</body>
<script>
    let target = $("#paragraph01");
    
    console.log(target.style.color); // => ''
    console.log(target.css.color); // => 'red'
    console.log(target.style.fontSize); // => '20px'
    console.log(target.css.fontSize); // => '20px'

    // target.css.color = "green"; // 无效
</script>
```

#### display

获取或设置元素的display样式

```html
<body>
    <p id="paragraph01">I am paragraph</p>
</body>
<script>
    let target = $("#paragraph01");
    
    console.log(target.display); // => block // 展示实际的display值
    target.display = "none";  // 元素被隐藏，效果和target.style.display = "none" 一致；
    target.display = "";  // 元素被重新展示，效果和target.style.display = "" 一致；
    
</script>
```

### 属性修改

#### attrs

获取或修改元素的属性(DOM上的属性)。

```html
<body>
    <p id="paragraph01" title="paragraph_first">I am paragraph</p>
</body>

<script>
    let target = $("#paragraph01");

    console.log(target.attrs.title); // => paragraph_first
    target.attrs.title = "change title"
    console.log(target.attrs.title); // => change title

    // 设置新的属性，相当于 setAttribute
    target.attrs.newtitle = "new title";
    console.log(document.querySelector("#paragraph01").getAttribute("newtitle")); // => new title 


</script>
```

#### data

获取元素的 [dataset](https://developer.mozilla.org/zh-CN/docs/Web/API/HTMLOrForeignElement/dataset) 属性；

```html
<body>
    <div id="user" data-id="1234567890" data-user="johndoe" data-date-of-birth>John Doe</div>
</body>

<script>
let target = $('#user');

// target.data.id === '1234567890'
// target.data.user === 'johndoe'
// target.data.dateOfBirth === ''

target.data.dateOfBirth = '1960-10-03'; // set the DOB.

// 'someDataAttr' in target.data === false

target.data.someDataAttr = 'mydata';
// 'someDataAttr' in target.data === true
</script>
```

### 盒模型相关

```html
<style>
#testEle{
    width:700px;
    height:400px;
    margin:20px;
    padding:10px;
    border:2px solid red;
}
</style>
<body>
    <div id="testEle"></div>
</body>
<script>
let target = $("#testEle");

console.log(target.width); // => 700
console.log(target.height); // => 400
console.log(target.innerWidth); // => 710
console.log(target.innerHeight); // => 410
console.log(target.offsetWidth); // => 712
console.log(target.offsetHeight); // => 412
console.log(target.outerWidth); // => 732
console.log(target.outerHeight); // => 432
</script>
```

**width** : 目标元素的实际宽度(像素);

**height** : 目标元素的实际宽度(像素);

**innerWidth** : 目标的 [clientWidth](https://developer.mozilla.org/zh-CN/docs/Web/API/Element/clientWidth)，元素 宽度 + padding 的值;

**innerHeight** : 目标的 [clientHeight](https://developer.mozilla.org/zh-CN/docs/Web/API/Element/clientHeight)，元素 高度 + padding 的值;

**offsetWidth** : 目标的 [offsetWidth](https://developer.mozilla.org/zh-CN/docs/Web/API/HTMLElement/offsetWidth)，元素 宽度 + padding + border 的值;

**offsetHeight** : 目标的 [offsetHeight](https://developer.mozilla.org/zh-CN/docs/Web/API/HTMLElement/offsetHeight)，元素 高度 + padding + border 的值;

**outerWidth** : 目标的横向占用像素，元素 宽度 + padding + border + margin 的值;

**outerHeight** : 目标的纵向占用像素，元素 高度 + padding + border + margin 的值;
