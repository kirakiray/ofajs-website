# data

可设置组件的data数据，并且采用文本模板渲染 data 上的字段；

> 更多的模板语法在后面教程会讲

下面案例用`btntext`字段替代插槽功能；

<code-view src="/demo/chapter3/test-btn2/package.json" style="height:500px;"></code-view>

当组件渲染完成后，可获取并修改相应字段的数据；

在 **data** 上的数据才能被修改重置，不在 **data** 上的字段将会设置失败；

```javascript
// 修改按钮内容
$("test-btn").btnText = "change text";

// test-btn 组件没有 btnText2 这个字段的数据，设置将不会成功
$("test-btn").btnText2 = "btnText2 haha";
console.log('btnText2 => ', $("test-btn").btnText2); // btnText2 => undefined
```