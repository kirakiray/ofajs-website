# attached 和 detached

当组件被添加到 `document` 后，会触发 `attached` 函数；当从 `document` 移除后，会触发 `detached` 函数；

> 不理解这个 document 的话，直接理解成被添加到 body 内就行；body 也是 document 的子元素；

通常用于获取组件尺寸之类的需求（组件被添加到 document 才能得到尺寸定位等相关数据）；