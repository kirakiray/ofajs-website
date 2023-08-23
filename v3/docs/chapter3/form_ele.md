# 表单元素

**表单元素**是允许用户在表单中 (比如:文本域,下拉列表,单选框,复选框等等)输入信息的元素，最主要的作用就是收集信息。

ofajs 提供专用 `form` 方法，快速获取表单数据；

```javascript
$("xxx").form("input,textarea,select");
```

参数为 **选择器表达式**，默认情况下，已经是 `"input,textarea,select"`，覆盖了所有表单格式；

```javascript
// $("xxx").form("input,textarea,select");
$("xxx").form(); // 不传参数的情况下，默认使用"input,textarea,select"
```

所以可以修正 `form` 的传参，来筛选表单数据；

```javascript
$("xxx").form("input");  // 只要 input元素 的数据
```

<code-view src="/demo/chapter3/form-test/package.json" style="height:500px;"></code-view>

## form方法和表单特性

form方法生成的 **表单数据**，是根据表单特性动态修正的；

表单元素的 `name` 为表单数据的key；

除了 `type="radio"` 和 `type="checkbox"` 的元素外，表单数据的值取元素的`value`；

**type** 为 `radio` 的元素，取 `checked` 为 `true` 的元素的 `value`作为对应值；

**type** 为 `checkbox` 的元素，取 `checked` 为 `true` 的元素的 `value` 添加到对应表单数据的数组中；

可以从 `value` 获取元素的值，也能用 `watch`、`watchKey` 等方法，监听元素值变动；

<code-run show-code="top">
    <template>
        <codehead>
            <script src="https://cdn.jsdelivr.net/gh/kirakiray/ofa.js@3.0.13/dist/ofa.js"></script>
        </codehead>
        <input type="text" id="target" />
        <div id="consoler"></div>
        <script>
        $("#target").watchKey({
            value(){
                $("#consoler").text = $("#target").value;
            }
        });
        </script>
    </template>
</code-run>
