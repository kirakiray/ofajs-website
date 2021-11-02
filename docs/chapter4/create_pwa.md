# 制作PWA

PWA既 渐进式 Web 应用，可以简单理解让网页有app的体验；

> [PWA（Progressive Web Apps，渐进式 Web 应用）](https://developer.mozilla.org/zh-CN/docs/Web/Progressive_web_apps)运用现代的 Web API 以及传统的渐进式增强策略来创建跨平台 Web 应用程序。

ofajs 已提供模拟app界面交互的功能；

填写正确的 [manifest](https://developer.mozilla.org/zh-CN/docs/Web/Progressive_web_apps/Installable_PWAs)，让网页应用添加到桌面；

离线文件存储，请使用 [Service Workers](https://developer.mozilla.org/zh-CN/docs/Web/API/Service_Worker_API/Using_Service_Workers) 接口封装；后期 ofajs 会添加 离线存储文件的功能，作为独立模块(feature)添加到项目内；