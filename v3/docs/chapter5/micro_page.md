# 微页面

基于 ofajs 开发的页面，能很好的解耦并被使用；下面举个例子：

比如你公司旗下有 *网络购物平台* 和 *二手交易平台* 两个app产品，代号为 **桃宝** 和 **咸鱼**；

下面为模拟app；

<div>
    <div>桃宝</div>
    <iframe src="demo/chapter5/taobao1/index.html" style="width:320px;height:480px;"></iframe>
</div>

<div>
    <div>咸鱼</div>
    <iframe src="demo/chapter5/xianyu1/index.html" style="width:320px;height:480px;"></iframe>
</div>

开始时两个业务是相对独立发展的，到了后来 **桃宝** 需要接入 **咸鱼** 的部分业务，咸鱼的 page模块 几乎可以直接被调用，而桃宝app也无需把咸鱼的页面迁移进来；

> 当然还是要修改一定量的代码，比如同步账户数据之类的

```javascript
// 桃宝app初始化处
...
ofa.config({
    paths: {
        // 设置咸鱼仓库
        "@xianyu/": location.origin + '/demo/chapter5/xianyu1/'  // ⭐️⭐️⭐️⭐️ 注册咸鱼的仓库
    }
});
...
```

```javascript
// 桃宝点击商品跳转详情处
...
clickItem(item) {
    if (!item.type) {
        // 跳转到默认桃宝详情
        this.navigateTo({
            path: "pages/detail -p",
            state: {
                productId: item.id,
                price: item.price,
                productName: item.name
            }
        });
    } else if (item.type == 'xianyu') {
        // 跳转到咸鱼的详情
        this.navigateTo({
            path: "@xianyu/pages/detail -p",   // ⭐️⭐️⭐️⭐️ 直接使用 @xianyu 的仓库代码
            state: {
                productId: item.id,
                price: item.price,
                productName: item.name
            }
        });
    }
}
...
```

<div>
    <div>桃宝</div>
    <iframe src="demo/chapter5/taobao2/index.html" style="width:320px;height:480px;"></iframe>
</div>


因为 ofajs 的 page模块 能独立运行，很轻易的就能做到页面单元测试（直接建一个html就行了）；只要维护好单元测试模块，使用的时候参照demo，合作交接就非常通畅了；