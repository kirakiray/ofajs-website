# 数据特征

组件定义的 `data` 或 `attrs` 数据改动时，会触发组件的视图渲染；

对象数据会被转换成 stanz 对象，使用起来和普通对象一样；关于 stanz 对象数据特性后面会讲；

组件初始化完成后，不能添加新key的数据；

```javascript
// 定义的 test-btn 组件
Component(async()=>{
    return {
        attrs:{
            color:"red"
        },
        data:{
            count:0,
            // obj:{
            //     val:"I am obj"
            // }
        }
    };
});
```

```html
<test-btn></test-btn>

<script>
$("test-btn").color = "blue";  // 修改成功 ✅
$("test-btn").count = 1;  // 修改成功 ✅
$("test-btn").gender = "male";  // 没有gender属性的初始化，修改失败 ❌

console.log($("test-btn").color); // => blue
console.log($("test-btn").count); // => 1
console.log($("test-btn").gender); // => undefined

console.log(Object.keys($("test-btn"))); // => ["color","count"]
</script>
```

但是可以定义隐式数据；如上组件，写入带下划线开头的数据字段；

```html
<test-btn></test-btn>

<script>
$("test-btn").color = "blue";  // 修改成功 ✅
$("test-btn").count = 1;  // 修改成功 ✅
$("test-btn")._gender = "male";  // 下划线开头属于隐式数据，修改成功 ✅

console.log($("test-btn").color); // => blue
console.log($("test-btn").count); // => 1
console.log($("test-btn")._gender); // => male

console.log(Object.keys($("test-btn"))); // => ["color","count"]
</script>
```

下划线开头为隐式数据，该字段**不能被枚举**；

修改隐式数据不会触发组件的视图渲染；