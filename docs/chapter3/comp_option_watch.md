# watch

当 组件被渲染成功 或 相应属性的值发生变动，会触发 `watch` 对象内对应 key 的方法；

<code-view src="/demo/chapter3/test-btn-watch/package.json" style="height:500px;"></code-view>

与其它前端框架不同，`watch`内的函数，在组件渲染完成后，必须被执行一次；

它的意义不在于监听，而是数据的值和行为的绑定，所以是不能取消首次初始化运行的；

watch 特性让组件开发更加灵活；但请不要滥用 `watch` 用于**随意**修改其它地方的值；