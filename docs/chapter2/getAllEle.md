# 获取多个元素

使用 `$.all` 可返回所有符合条件的元素的数组；

<code-run show-code="top">
    <template>
        <codehead>
            <script src="https://cdn.jsdelivr.net/gh/kirakiray/ofa.js/dist/ofa.js"></script>
        </codehead>
        <style>
        p{
            color:red;
        }
        </style>
        <div>1</div>
        <div>2</div>
        <p>3</p>
        <p>4</p>
        <script>
            $.all("p").forEach((ele,index) =>{
                ele.text = "change the element " + index;
            });
        </script>
    </template>
</code-run>
