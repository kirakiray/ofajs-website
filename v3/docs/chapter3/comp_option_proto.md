# proto

设置组件原型对象上的数据（组件原型链），通常用来设置组件的方法；

> 如果你了解 JavaScript 原型链，这个属性会很好理解；

虽然也可以用来设置普通数据，但是proto 上的数据变动，不会触发组件的渲染；可以用来设置组件的常量数据；一般情况下，组件数据请设置到 [`data`](./comp_option_data.md) 上；

proto 上能使用 `get` 和 `set` 语法；

proto上设置的方法，运行后的 `this` 指向相应实例化的组件元素；

<code-view src="/demo/chapter3/test-btn-proto/package.json" style="height:500px;"></code-view>