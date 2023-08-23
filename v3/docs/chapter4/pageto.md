# 页面跳转

页面之间的业务不同，通常需要跳转页面；

## navigateTo(path)

保留当前页面，跳转到某个页面（页面模块）。地址参数为**相对运行网页**的页面模块地址；

```html
<!-- 模板引擎内写法 -->
...
<button @click="navigateTo('pages/p3/p3.js')">go to p3</button>
...
```
```javascript
// 页面模块上的写法
this.navigateTo(`pages/p3/p3.js`); // 跳转到 p3 页面
```

或者传入对象参数，地址属性为 `path`；

```javascript
this.navigateTo({
    path:`pages/p3/p3.js`
}); // 跳转到 p3 页面
```

#### query传参

可以带参数跳转页面，目标页可以通过 `query` 属性获取参数；

query传参的数据，会反应在地址上；

```html
<!-- page template: pages/page01/page01.html -->
...
<button @click="navigateTo('pages/page02/page02.js?color=red&size=big')">go to page02</button>
...
```
```javascript
// page moudule: pages/page02/page02.js 
Page(async()=>{
    return {
        data:{},
        ready(){
            console.log(this.query.color); // => red
            console.log(this.query.size); // => big
        }
    };
});
```

#### state传参

和 query 传参不同，state 数据不会反应在地址上；

```javascript
// 跳转到 p3 页面，并带上 state 数据
this.navigateTo({
    path:`pages/p3/p3.js`,
    state:{
        number:100
    }
}); 
```

```javascript
// page moudule: pages/p3/p3.js
Page(async()=>{
    return {
        data:{},
        ready(){
            console.log(this.state.number); // => 100
        }
    };
});
```
## replaceTo(path)

关闭当前页面，跳转到某个页面（页面模块）；使用方法基本和 **navigateTo** 一样；

## back()

返回上一页；

```html
<!-- page template: pages/page01/page01.html -->
...
<button @click="back()">go back</button>
...
```

```javascript
// page moudule
this.back();
```