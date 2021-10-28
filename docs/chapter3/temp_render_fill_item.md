# 模板数据传递

递归渲染列表需要传递特定层数据到下一级模板时，在递归填充元素上使用 `item:` 语法传递；下一级模板从 `$item` 上获取传递的值；

`item:` 传递的属性不能使用 `sync:` 双向同步；

<code-view src="/demo/chapter3/temp-test-fill3/package.json" style="height:500px;"></code-view>