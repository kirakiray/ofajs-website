# 修改内容

内容修改关键三个属性，如下描述；

* **text** 获取或修改元素的文本内容
* **html** 获取或修改元素的 HTML语法表示的元素的后代
* **value** 获取或修改表单元素的value值

### text

<code-run show-code="top">
    <template>
        <codehead>
            <script src="https://cdn.jsdelivr.net/gh/kirakiray/ofa.js/dist/ofa.js"></script>
        </codehead>
        <div id="target">target</div>
        <script>
            $("#target").text = `change target text`;
        </script>
    </template>
</code-run>

### html

<code-run show-code="top">
    <template>
        <codehead>
            <script src="https://cdn.jsdelivr.net/gh/kirakiray/ofa.js/dist/ofa.js"></script>
        </codehead>
        <div id="target">target</div>
        <script>
            $("#target").html = `<span style="color:green;">change target text</span>`;
        </script>
    </template>
</code-run>

### value

<code-run show-code="top">
    <template>
        <codehead>
            <script src="https://cdn.jsdelivr.net/gh/kirakiray/ofa.js/dist/ofa.js"></script>
        </codehead>
        <input type="text" id="target" value="default value" />
        <script>
            $("#target").value = 'change target value';
        </script>
    </template>
</code-run>