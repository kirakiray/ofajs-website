# 微应用

这里的理解是（作者的粗暴理解），应用内能使用其他应用；

ofajs 约定了一套 post message 规则，让使用 ofajs 开发的app之间快速互通数据；

> 这个标准还在实验中，后期还会更改，请暂时用于线上项目；

[iframe方式调用 webapp](https://kirakiray.github.io/ofa.js/lib/frame-app/demo/test.html)

[打开新窗口方式调用 webapp](https://kirakiray.github.io/ofa.js/libtest/opentest/open.html)

想象一下应用场景，在一个网页后台上传图片，图片的修改可以调用一个 web ps软件改图，完成后再调用另一个 web压缩图片，最后得到的图通过后台上传；其中 ps改图 和 压缩图片 都是纯前端实现，只有上传图片一个地方调用公司的后台接口；而 web ps 软件 和 压缩图片 这两个 webapp 是独立存在的，能被任何网站调用，真正万物(app)互通；（当然，没后端介入做数据交换，只通过postMessage交换）