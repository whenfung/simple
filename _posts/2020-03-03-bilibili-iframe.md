---
title: 如何嵌入 B 站视频
---

B 站支持 iframe 视频嵌入，因此本主题实现了 B 站视频嵌入，样例如下

<iframe src="//player.bilibili.com/player.html?bvid=BV1ps411U7xc&page=1&high_quality=1&danmaku=0" allowfullscreen></iframe>

在 B 站视频的 URL 中，有几个参数的含义如下

1. `bvid` 是 B 站每个视频的标识符
2. `page=1` 表示选集中的第 1 个视频
3. `high_quality=1` 表示最高画质
4. `danmaku=0` 表示关闭弹幕
5. `allowfullscreen` 表示允许全屏
