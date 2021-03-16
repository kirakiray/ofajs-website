# 5分钟制作一款markdown编辑器

从前一篇文章[（使用o-md组件）](./use_omd.md)，我们知道 `o-md` 直接设置 `mdData` 属性就能动态设置预览内容；

那么，制作一款readme编辑器，只需要监听文本框内容，在内容改变的同时，修正 mdData属性即可；代码大致如下；

```html
<body>
    <textarea id="inputer"></textarea>
    <o-md id="mdViewer"></o-md>

    <script>
        load("@libs/o-md -p");

        $("#inputer").on("input", e => {
            $("#mdViewer").mdData = $("#inputer").ele.value;
        });
    </script>
</body>
```

要确保 `o-md` 组件加载完成后，功能才生效；

然后再美化一下样式，一个简单的markdown编辑器就大功告成；

```html
<head>
    <script src="ofa.js"></script>
    <style>
        html,
        body {
            padding: 0;
            margin: 0;
            height: 100%;
        }

        .main {
            display: flex;
            height: 100%;
        }

        .block {
            box-sizing: border-box;
            padding: 10px;
            flex: 1;
            height: 100%;
        }

        #loading_layer {
            position: absolute;
            left: 0;
            top: 0;
            width: 100%;
            height: 100%;
            z-index: 10;
            display: flex;
            align-items: center;
            justify-content: center;
            background-color: rgba(255, 255, 255, .8);
            color: #fb4747;
        }

        #inputer,
        #mdViewer {
            box-sizing: border-box;
            padding: 10px;
            display: block;
            width: 100%;
            height: 100%;
            resize: none;
        }

        #mdViewer {
            border: rgb(168, 168, 168) solid 1px;
        }
    </style>
</head>
<body>
    <div id="loading_layer">simple markdown editor loading...</div>
    <div class="main">
        <div class="block">
            <textarea id="inputer"></textarea>
        </div>
        <div class="block">
            <o-md id="mdViewer"></o-md>
        </div>
    </div>
    <script>
        // 确保o-md加载完成才能操作
        load("@libs/o-md -p").then(e => {
            $("#loading_layer").remove();
        });

        $("#inputer").on("input", e => {
            $("#mdViewer").mdData = $("#inputer").ele.value;
        });
    </script>
</body>
```