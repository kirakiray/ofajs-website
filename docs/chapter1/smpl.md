# 轮播组件

接下来尝试使用一下最简单的轮播组件 `smpl-carousel`；

文档在这里 [smpl-carousel 最简单的轮播组件](components/smpl-carousel/demo.html)；

```html
<head>
    <script src="https://cdn.jsdelivr.net/gh/kirakiray/ofa.js@3.0.13/dist/ofa.js"></script>
    <script src="https://cdn.jsdelivr.net/gh/kirakiray/o_blog/components/smpl-carousel/smpl-carousel.js"></script>
</head>

<body>
    <smpl-carousel time="3500" style="width: 480px;height: 320px;">
        <div smpl-item style="background-color: red;color:#fff;">1</div>
        <div smpl-item style="background-color: green;color:#fff;">2</div>
        <div smpl-item style="background-color: blue;color:#fff;">3</div>
    </smpl-carousel>
</body>
```

<code-run frame-height="350">
    <template>
        <codehead>
            <script src="https://cdn.jsdelivr.net/gh/kirakiray/ofa.js@3.0.13/dist/ofa.js"></script>
            <script src="https://cdn.jsdelivr.net/gh/kirakiray/o_blog/components/smpl-carousel/smpl-carousel.js"></script>
        </codehead>
        <smpl-carousel time="3500" style="width: 480px;height: 320px;">
            <div smpl-item style="background-color: red;color:#fff;">1</div>
            <div smpl-item style="background-color: green;color:#fff;">2</div>
            <div smpl-item style="background-color: blue;color:#fff;">3</div>
        </smpl-carousel>
    </template>
</code-run>