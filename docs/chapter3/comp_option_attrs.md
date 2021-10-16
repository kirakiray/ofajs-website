# attrs

与 [data](./comp_option_data.md) 一样设置组件的数据；

区别在于 `attrs` 上的数据的字段允许传递属性(attribute)；并且 attrs 上的字段数据发生变化，会同步改变元素的属性(attribute);

<code-view src="/demo/chapter3/test-btn-attrs/package.json" style="height:500px;"></code-view>

#### 注意

设置组件标签值时，attrs上的属性不能直接使用大写字母；使用`-`代表下一个字符为大写字符；如下

```html
<test-btn btnText="set btn text"></test-btn> ❌ <!--错误写法-->

<test-btn btn-text="set btn text"></test-btn> ✅ <!--正确设置btnText属性-->
```

attrs 的数据建议使用 **Number** 和 **String** 类型的数据；