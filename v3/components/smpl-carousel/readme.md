# smpl-carousel

最简单的轮播图组件；

## 使用方法

#### 直接引用

```html
<script src="https://cdn.jsdelivr.net/gh/kirakiray/ofa.js@3.0.13/dist/ofa.js"></script>
<script src="https://cdn.jsdelivr.net/gh/kirakiray/o_blog/components/smpl-carousel/smpl-carousel.js"></script>
```

#### 模块内使用

```javascript
load("https://cdn.jsdelivr.net/gh/kirakiray/o_blog/components/smpl-carousel -p");
```

### 使用组件

直接使用 `<smpl-carousel>` 标签，轮播项元素添加 `smpl-item` 属性即可；

```html
<smpl-carousel time="3500" current-id="1" style="width: 480px;height: 320px;">
    <div smpl-item style="background-color: red;color:#fff;">1</div>
    <div smpl-item style="background-color: green;color:#fff;">2</div>
    <div smpl-item style="background-color: blue;color:#fff;">3</div>
</smpl-carousel>
```

<smpl-carousel time="3500" current-id="1" style="width: 480px;height: 320px;">
    <div smpl-item style="background-color: red;color:#fff;">1</div>
    <div smpl-item style="background-color: green;color:#fff;">2</div>
    <div smpl-item style="background-color: blue;color:#fff;">3</div>
</smpl-carousel>

轮播元素会被默认填充至父元素 `smpl-carousel` 的宽高，并在一定时间内轮播；可以自定义轮播元素的内容；

## 属性

#### currentId

当前页的id；可通过标签上直接设置；默认值0；从0开始；

当被设置超出范围的id，将会被自动修正；

#### size

元素内的item总数，不可设置；

```javascript
console.log('size => ',$('smpl-carousel').size);
```

#### time

轮播间隔时间；可通过标签上直接设置；默认值2000（单位毫秒）；

#### animeTime

轮播动画时长；可通过标签上直接设置；默认值800（单位毫秒）；

## 事件

#### changecurrent

当轮播图开始切换时触发的事件，会带上相应数据

```javascript
$("smpl-carousel").on("changecurrent", e => {
    console.log("data => ", e.data);
});
```