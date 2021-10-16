# ready

当组件渲染完成后，会进入**ready**状态，触发 `ready` 方法；

`ready` 方法内的 `this` 指向被渲染的组件，可以在 `ready` 方法上，编写初始化逻辑；

<code-view src="/demo/chapter3/test-btn-ready/package.json" style="height:500px;"></code-view>