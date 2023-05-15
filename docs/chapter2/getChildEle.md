# 获取子级元素

直接通过数字键获取子元素；

<code-run show-code="top">
    <template>
        <codehead>
            <script src="https://cdn.jsdelivr.net/gh/kirakiray/ofa.js@3.0.13/dist/ofa.js"></script>
        </codehead>
        <div id="target">
            <div>0</div>
            <div>
                <div class="sub1">1</div>
                <div class="sub2">2</div>
                <p>3</p>
            </div>
            <span>4</span>
        </div>
        <script>
            const target = $("#target");
            target[0].text = "change ele 1";
            target[1][2].text = "change ele 2";
        </script>
    </template>
</code-run>

上面的案例中，下面的逻辑也是成立的；

```javascript
$("#target")[1][0] === $(".sub1"); // => true
$("#target")[1][1] === $(".sub2"); // => true
$("#target")[2] === $("span"); // => true
```

### 查找子元素

得到 `$`实例对象后，再使用对象上的 `$` 方法，能查找自己的元素；

<code-run show-code="top">
    <template>
        <codehead>
            <script src="https://cdn.jsdelivr.net/gh/kirakiray/ofa.js@3.0.13/dist/ofa.js"></script>
        </codehead>
        <style>
            #target p{
                color:red;
            }
            div > div{
                margin-left:20px;
            }
        </style>
        <div id="target">
            <div>0</div>
            <div>
                <div class="sub">1</div>
                <div class="sub">2</div>
                <p>3</p>
            </div>
            <span>4</span>
        </div>
        <script>
            const target = $("#target");
            target.$("p").text = "change the target element";
            // 直接使用选择器的子节点方法也可以
            // $("#target p").text = "change the target sub element 2";
        </script>
    </template>
</code-run>

### 查找所有符合要求的子元素

得到 `$`实例对象后，再使用对象上的 `all` 方法，能查找所有符合条件的元素；

<code-run show-code="top">
    <template>
        <codehead>
            <script src="https://cdn.jsdelivr.net/gh/kirakiray/ofa.js@3.0.13/dist/ofa.js"></script>
        </codehead>
        <style>
            #target .sub{
                color:blue;
            }
            div > div{
                margin-left:20px;
            }
        </style>
        <div id="target">
            <div>0</div>
            <div>
                <div class="sub">1</div>
                <div class="sub">2</div>
                <p>3</p>
            </div>
            <span>4</span>
        </div>
        <script>
            const target = $("#target");
            target.all(".sub").forEach((ele,index)=>{
                ele.text = "change the target element " + index;
            })
            // 直接使用选择器的子节点方法也可以
            // $.all("#target .sub").forEach(ele=>{
            //     ele.text = "change the target sub element 2";
            // })
        </script>
    </template>
</code-run>
