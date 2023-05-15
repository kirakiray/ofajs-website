# 组件介绍

ofajs 的 组件功能，是基于 [Web Components](https://developer.mozilla.org/zh-CN/docs/Web/Web_Components) 封装，可以完美支持 [Web Components](https://developer.mozilla.org/zh-CN/docs/Web/Web_Components) 的api；

### 什么是组件？

广义上讲（web前端开发领域），一份满足需求的代码，只用**标签**的形式就能被部署，不污染使用的环境，这个被封装好的功能（标签）就是**组件**；

<!-- > **不污染使用的环境**：代码初始化不会修改原节点结构； -->

狭义来讲（web前端开发领域），使用 [Web Components](https://developer.mozilla.org/zh-CN/docs/Web/Web_Components) 技术封装的，带有功能的标签，就是**组件**；

下面来回顾一下 bs-button 组件；

<code-run show-code="top">
    <template>
        <script src="https://cdn.jsdelivr.net/gh/kirakiray/ofa.js@3.0.13/dist/ofa.js"></script>
        <!-- 引用按钮模块 -->
        <script src="https://cdn.jsdelivr.net/gh/kirakiray/o_blog/bootstrap-ofa/components/bs-button/bs-button.js"></script>
        <!-- 直接标签使用 -->
        <bs-button>I am bootstrap button</bs-button>
    </template>
</code-run>