# 列表渲染

列表渲染跟其他MVVM框架很不一样，`ofajs` 采用填充模板的方式渲染列表；

先设计好静态模板，使用 `temp:` 定义模板（`temp:xxx` 就是定义为 **xxx** 模板）；在需要使用模板的元素上，使用 `fill:` 紧跟着模板名，值为组件的属性或函数表达式，填充值为**数组**的内容；

<code-view src="/demo/chapter3/temp-test-fill1/package.json" style="height:500px;"></code-view>

模板内可使用特殊标识符，常用标识符为 `$data`、`$index` 和 `$host`；

* **$data** 数组填充内的单项数据；
* **$index** 对应数据在数组上的序号，从 `0` 开始计数；
* **$host** 宿主对象；

### 传递数据

