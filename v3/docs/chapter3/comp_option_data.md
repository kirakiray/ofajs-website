# data

设置组件自身的数据，**data上的数据变动**会触发模板渲染；

> 案例中为文本渲染，更多的模板渲染语法在后面教程会讲

下面案例用`btntext`字段替代插槽功能；

<code-view src="/demo/chapter3/test-btn-data/package.json" style="height:500px;"></code-view>

当组件渲染完成后，外部可获取或修改数据；

在 **data** 上的数据才能被修改重置，不在 **data** 上的字段将会设置失败；

```javascript
// 修改按钮内容
$("test-btn").btnText = "change text";

// test-btn 组件没有 btnText2 这个字段的数据，设置将不会成功
$("test-btn").btnText2 = "btnText2 haha";
console.log('btnText2 => ', $("test-btn").btnText2); // btnText2 => undefined
```