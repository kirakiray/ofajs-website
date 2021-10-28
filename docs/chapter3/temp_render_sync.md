# 属性数据双向同步

使用 `sync:` 开头，紧跟要传递到该元素上的属性key；值为宿主的key；

> 和上一节 数据传递 不同，此时的值**不能**是函数表达式；

主要用于 宿主组件 和 影子容器内组件 或 **表单元素** 进行 **数据互相同步**；

<code-view src="/demo/chapter3/temp-test-sync/package.json" style="height:500px;"></code-view>