# App组件

使用 `o-app` 标签，轻松的制作**单页面应用**；

`o-app` 标签设置 `src` 属性为app初始化模块地址，模块内容为`define`模块；模块内容对象的 `data` 上的 `home` 属性为该app的默认首页地址；

<code-view src="/demo/chapter4/app-test1/package.json" style="height:500px;"></code-view>

路由数据在app标签的 `router`属性上;

在app标签内的 page 模块，会解锁 `navigateTo`、`replaceTo`和`back`方法和`app`属性；

* **navigateTo(url)** 在当前app标签内，调换到某个页面；
* **replaceTo(url)** 替换当前页并跳转到某个页面；
* **back()** 返回上一页；
* **app** page的app标签元素；

当前状态下页面刷新后， `o-app` 标签内的数据将会重新加载；下一节将进行 o-app 和路由绑定的教程；