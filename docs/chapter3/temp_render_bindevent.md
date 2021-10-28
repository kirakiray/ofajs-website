# 事件绑定

使用 `@` 开头，绑定事件名，值为需要绑定的方法，或者函数表达式；若是函数表达式，则 `$args` 变量为原 [arguments](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Functions/arguments) 转换的数组对象；

可以绑定原生事件或自定义事件；

<code-view src="/demo/chapter3/temp-test-event/package.json" style="height:500px;"></code-view>