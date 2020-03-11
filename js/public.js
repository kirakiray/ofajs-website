(() => {
    let script = document.createElement("script");
    // script.setAttribute("type", `text/javascript`);
    // script.setAttribute("src", `https://tajs.qq.com/stats?sId=66526840`);
    // script.setAttribute("charset", `UTF-8`);
    script.innerHTML = `
    var _hmt = _hmt || [];
    (function() {
    var hm = document.createElement("script");
    hm.src = "https://hm.baidu.com/hm.js?c158f6c597f25bc288079cba0d2331e2";
    var s = document.getElementsByTagName("script")[0]; 
    s.parentNode.insertBefore(hm, s);
    })();
    `;
    document.head.appendChild(script);
})()