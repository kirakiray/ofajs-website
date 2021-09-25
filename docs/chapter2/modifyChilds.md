# 增删子元素

使用类数组的方法，增删子元素；使用方法可参考数组的方法；

| 方法名      | 描述                                     |
| ----------- | ---------------------------------------- |
| **push**    | 从结尾插入内容，并返回子元素数量         |
| **pop**     | 删除并返回最后一个子元素                 |
| **unshift** | 开头添加一个或更多元素，并返回子元素数量 |
| **shift**   | 删除并返回第一个子元素                   |
| **splice**  | 添加或删除子元素                         |

比如下面案例；

<code-run show-code="top">
    <template>
        <codehead>
            <script src="https://cdn.jsdelivr.net/gh/kirakiray/ofa.js/dist/ofa.js"></script>
        </codehead>
        <button onclick="pushli()">push li</button>
        <button onclick="popli()">pop li</button>
        <button onclick="unshiftli()">unshift li</button>
        <button onclick="shiftli()">shift li</button>
        <button onclick="spliceli()">splice li</button>
        <ul>
            <li>default 1</li>
        </ul>
        <script>
            let count = 0;
            function pushli() {
                $("ul").push(`<li>${count++}</li>`);
            }
            function popli(){
                $("ul").pop();
            }
            function unshiftli(){
                $("ul").unshift(`<li>${count++}</li>`);
            }
            function shiftli(){
                $("ul").shift();
            }
            function spliceli(){
                $("ul").splice(0,1,`<li>${count++}</li>`);
            }
        </script>
    </template>
</code-run>

## 直接删除元素

可以使用 `remove` 直接删除元素；

<code-run show-code="top">
    <template>
        <codehead>
            <script src="https://cdn.jsdelivr.net/gh/kirakiray/ofa.js/dist/ofa.js"></script>
        </codehead>
        <button id="btn">Bye Bye!</button>
        <script>
            $("#btn").on("click", () => {
                $("#btn").remove();
            });
        </script>
    </template>
</code-run>