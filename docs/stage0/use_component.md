# 使用ofa Component

在开发 ofa Component 前，先尝试使用 ofa Componet，体验使用组件的便捷，使用ofa Component 并不需要学习成本；

> **因为ofajs相关辅助性工具，都是以组件的形式开发的，在浏览器上直接运行，所以 ofa Component 很容易制作使用文档；一般情况下开发好的 ofa Component 都会有相应的使用文档**；要使用 ofa Component，须先查看使用文档；

### fntui

**fntui** 是作者根据微软的 [flunt UI](https://developer.microsoft.com/en-us/fluentui#/) 制作的UI库；是为了方便教程还有当前项目的开发而制作的ui库；目前(2020-09-16)已完成了按钮组件、输入框组件和tab切换组件，后续会逐渐添加其他更多组件；

[fntui仓库地址](https://github.com/kirakiray/ofa_lib/tree/master/v2/fntui)

下面就以使用 **fntui** 的**按钮**组件为例；

### fnt-button

点击链接进入 [fnt-button的使用文档](https://kirakiray.github.io/ofa_lib/v2/fntui/fnt-button/demo.html)

将 `ofa.js` 引入后，用 `load` 方法加载 `fnt-button`（已经下载到本地）;

```html
<script src="ofa.js"></script>
<script>
    load("fntui/fnt-button -p");
</script>
``` 

然后就能直接使用了

```html
<fnt-button>我是fnt-button</fnt-button>
```

<fnt-button>我是fnt-button</fnt-button>

现在来尝试使用教程里提供的属性。

```html
<fnt-button theme="primary">Button1</fnt-button>
<fnt-button theme="success" type="circle">Button2</fnt-button>
<fnt-button theme="danger" type="outlined">Button3</fnt-button>
```
<fnt-button theme="primary">Button1</fnt-button>
<fnt-button theme="success" type="circle">Button2</fnt-button>
<fnt-button theme="danger" type="outlined">Button3</fnt-button>