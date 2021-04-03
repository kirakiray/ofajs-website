# 使用 $

## 选择元素

和 jQuery 一样，ofajs 使用 `$` 定位元素对象；

```html
<body>
    <p id="paragraph01">I am paragraph</p>
</body>
<script>
    let target = $("#paragraph01");
    
    console.log(target.html); // => I am paragraph
</script>
```

选择器支持和 [document.querySelector](https://developer.mozilla.org/zh-CN/docs/Web/API/Document/querySelector) 保持一致，具体支持定位元素请查阅 [css选择器](https://cn.bing.com/search?q=css%E9%80%89%E6%8B%A9%E5%99%A8);

## 常用属性

#### ele

获取原始Element对象

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

获取元素的实际样式属性；和style不同的，`css`属性值**只允许获取样式，不能设置样式**；

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
    console.log(target.style.color); // => 'red'
    console.log(target.style.fontSize); // => '20px'
    console.log(target.style.fontSize); // => '20px'

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

### 数据修改

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

## 常用方法