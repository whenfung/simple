var iframes = document.getElementsByTagName("iframe");  // 获取 iframe 标签的所有元素
var Width = iframes[0].offsetWidth;                     // 获取宽度
for(i = 0; i < iframes.length; i++) {                   // 设置 iframe 元素的高度
  iframes[i].setAttribute('height', Width / 16 * 9);
}

// 窗口监听
window.onresize = function() { 
  var Width = iframes[0].offsetWidth;                     // 获取宽度
  for(i = 0; i < iframes.length; i++) {                   // 设置 iframe 元素的高度
    iframes[i].setAttribute('height', Width / 16 * 9);
  }
};
