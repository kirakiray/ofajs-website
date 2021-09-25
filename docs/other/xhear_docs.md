# `$` 使用文档

## 全局

| 属性或方法名 | 类型 | 描述                   |
| ------------ | ---- | ---------------------- |
| **$**        | 方法 | 获取或生成单个元素     |
| **$.all**    | 方法 | 获取符合条件的所有元素 |

## 实例化对象

### 元数据

| 属性或方法名 | 类型                                   | 描述           |
| ------------ | -------------------------------------- | -------------- |
| **tag**      | 属性 <span class="mark or">只读</span> | 元素的标签     |
| **ele**      | 属性 <span class="mark or">只读</span> | 对象的原生元素 |
| **length**   | 属性 <span class="mark or">只读</span> | 子级元素数量   |

## 相对元素

| 属性或方法名 | 类型                                   | 描述                       |
| ------------ | -------------------------------------- | -------------------------- |
| **root**     | 属性 <span class="mark or">只读</span> | 获取根节点                 |
| **host**     | 属性 <span class="mark or">只读</span> | 获取宿主元素               |
| **shadow**   | 属性 <span class="mark or">只读</span> | 获取自定义组件的影子根节点 |
| **parent**   | 属性 <span class="mark or">只读</span> | 获取父元素                 |
| **index**    | 属性 <span class="mark or">只读</span> | 获取当前元素在父元素的序号 |
| **next**     | 属性 <span class="mark or">只读</span> | 获取相邻的下一个元素       |
| **prev**     | 属性 <span class="mark or">只读</span> | 获取相邻的上一个元素       |
| **[Number]** | 属性 <span class="mark or">只读</span> | 获取相应序号的子元素       |
| **parents**  | 方法                                   | 获取所有父层元素           |
| **siblings** | 方法                                   | 获取所有相邻的元素         |
| **$**        | 方法                                   | 查找符合条件的第一个子元素 |
| **all**      | 方法                                   | 查找符合条件的所有子元素   |

### 内容或元素属性（attribute）

| 属性或方法名 | 类型                                                                    | 描述                              |
| ------------ | ----------------------------------------------------------------------- | --------------------------------- |
| **text**     | 属性 <span class="mark cr">可读</span><span class="mark cw">可写</span> | 元素的文本                        |
| **html**     | 属性 <span class="mark cr">可读</span><span class="mark cw">可写</span> | 元素的innerHTML                   |
| **value**    | 属性 <span class="mark cr">可读</span><span class="mark cw">可写</span> | 元素的value                       |
| **class**    | 属性 <span class="mark or">只读</span>                                  | 元素的classList                   |
| **data**     | 属性 <span class="mark or">只读</span>                                  | 元素的dataset                     |
| **attr**     | 方法                                                                    | 获取或设置元素的属性（attribute） |

### 样式

| 属性或方法名 | 类型                                                                    | 描述           |
| ------------ | ----------------------------------------------------------------------- | -------------- |
| **style**    | 属性 <span class="mark cr">可读</span><span class="mark cw">可写</span> | 元素的style    |
| **css**      | 属性 <span class="mark or">只读</span>                                  | 元素的实际样式 |
| **show**     | 属性 <span class="mark cr">可读</span><span class="mark cw">可写</span> | 元素是否隐藏   |


### 尺寸或定位

| 属性或方法名     | 类型                                   | 描述                                            |
| ---------------- | -------------------------------------- | ----------------------------------------------- |
| **width**        | 属性 <span class="mark or">只读</span> | 元素的宽（单位像素）                            |
| **height**       | 属性 <span class="mark or">只读</span> | 元素的高（单位像素）                            |
| **innerWidth**   | 属性 <span class="mark or">只读</span> | 元素的宽，包含padding（单位像素）               |
| **innerHeight**  | 属性 <span class="mark or">只读</span> | 元素的高，包含padding（单位像素）               |
| **offsetWidth**  | 属性 <span class="mark or">只读</span> | 元素的宽，包含padding,border（单位像素）        |
| **offsetHeight** | 属性 <span class="mark or">只读</span> | 元素的高，包含padding,border（单位像素）        |
| **outerWidth**   | 属性 <span class="mark or">只读</span> | 元素的宽，包含padding,border,margin（单位像素） |
| **outerHeight**  | 属性 <span class="mark or">只读</span> | 元素的高，包含padding,border,margin（单位像素） |
| **position**     | 属性 <span class="mark or">只读</span> | 元素的定位信息（相对定位元素）                  |
| **offset**       | 属性 <span class="mark or">只读</span> | 元素的定位信息（相对窗口）                      |

### 子节点操作

| 属性或方法名 | 类型 | 描述                                     |
| ------------ | ---- | ---------------------------------------- |
| **remove**   | 方法 | 删除当前元素                             |
| **push**     | 方法 | 从结尾插入内容，并返回子元素数量         |
| **pop**      | 方法 | 删除并返回最后一个子元素                 |
| **unshift**  | 方法 | 开头添加一个或更多元素，并返回子元素数量 |
| **shift**    | 方法 | 删除并返回第一个子元素                   |
| **splice**   | 方法 | 添加或删除子元素                         |
| **sort**     | 方法 | 对子元素进行排序                         |
| **reverse**  | 方法 | 反转子元素顺序                           |

### 事件相关

| 属性或方法名       | 类型 | 描述                         |
| ------------------ | ---- | ---------------------------- |
| **on**             | 方法 | 注册事件                     |
| **off**            | 方法 | 注销事件                     |
| **one**            | 方法 | 注册运行一次后自动销毁的事件 |
| **trigger**        | 方法 | 主动触发事件                 |
| **triggerHandler** | 方法 | 主动触发事件（不冒泡）       |

### 其他

| 属性或方法名    | 类型 | 描述                           |
| --------------- | ---- | ------------------------------ |
| **is**          | 方法 | 判断当前元素是否符合表达式要求 |
| **clone**       | 方法 | 克隆当前元素                   |
| **extend**      | 方法 | 扩充当前元素的数据             |
| **initSizeObs** | 方法 | 初始化尺寸监听器               |

### 类数组方法

想象成是子元素的集合，对这个集合的操作；

| 属性或方法名    | 类型 | 描述                                                                                                                                  |
| --------------- | ---- | ------------------------------------------------------------------------------------------------------------------------------------- |
| **forEach**     | 方法 | 跟数组方法 [forEach](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array/forEach) 保持一致         |
| **map**         | 方法 | 跟数组方法 [map](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array/map) 保持一致                 |
| **find**        | 方法 | 跟数组方法 [find](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array/find) 保持一致               |
| **findIndex**   | 方法 | 跟数组方法 [findIndex](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array/findIndex) 保持一致     |
| **filter**      | 方法 | 跟数组方法 [filter](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array/filter) 保持一致           |
| **slice**       | 方法 | 跟数组方法 [slice](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array/slice) 保持一致             |
| **some**        | 方法 | 跟数组方法 [some](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array/some) 保持一致               |
| **indexOf**     | 方法 | 跟数组方法 [indexOf](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array/indexOf) 保持一致         |
| **lastIndexOf** | 方法 | 跟数组方法 [lastIndexOf](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array/lastIndexOf) 保持一致 |
| **includes**    | 方法 | 跟数组方法 [includes](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array/includes) 保持一致       |
| **concat**      | 方法 | 跟数组方法 [concat](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array/concat) 保持一致           |
| **every**       | 方法 | 跟数组方法 [every](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array/every) 保持一致             |
| **join**        | 方法 | 跟数组方法 [join](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array/join) 保持一致               |

<!-- 定制样式 -->
<style>
.mark{
    font-size:10px;
    padding:2px 5px;
}
.mark.cr{
    color:#0d6efd;
}
.mark.cw{
    color:#fd7e14;
}
.mark.or{
    color:#dc3545;
}
</style>