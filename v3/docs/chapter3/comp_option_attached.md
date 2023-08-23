# attached 和 detached

当组件被添加到 `document` 后，会触发 `attached` 函数；当从 `document` 移除后，会触发 `detached` 函数；

> 不理解这个 document 的话，直接理解成被添加到 body 内就行；body 也是 document 的子元素；

> 粗暴理解，组件被添加触发 `attached`，组件被删除触发 `detached`（必须已被添加到body的元素上）；

通常用于获取组件尺寸之类的需求（组件被添加到 document 才能得到尺寸定位等相关数据）；

也被用于一些需要组件回收的情况；（例如使用了 `setInterval`，组件生命结束时，去掉这个计时）

<code-view src="/demo/chapter3/test-btn-attached/package.json" style="height:500px;"></code-view>