// 检测滚动栏，显示返回顶部的按钮
window.onscroll = function() {
  var t = document.documentElement.scrollTop || document.body.scrollTop;
  var top = document.getElementsByClassName("top");
  if(top.length > 0) {   // 有时候没有获取到 top
    if( t > 300 ) { 
      top[0].style.display = "block";
    } else {
      top[0].style.display = "none";
    }
  }
}

// 回到顶部滚动函数
function toScroll() {
  clearInterval(this.timer);
  this.timer = setInterval(function() {
    var scrolltop = document.documentElement.scrollTop || document.body.scrollTop;
    window.scrollBy(0, -100);
    if (Math.ceil(scrolltop) <= 0) {  // 如果回到了顶部，就清除当前计时函数
        clearInterval(this.timer);
    };
  }, 10)  // 每 10 毫秒调用一次，这样绝对顺滑
}

// 文章内点击图片居中
window.onload = toCenter;
window.onresize = toCenter;

function toCenter() {
  var post = document.getElementsByClassName("post");
  if (post.length > 0) {
    var imgs = document.getElementsByTagName("img");
    for(var i = 0; i < imgs.length; i ++) {
      if(imgs[i].offsetWidth <= post[0].offsetWidth){
        imgs[i].style.marginLeft = (post[0].offsetWidth - imgs[i].offsetWidth) / 2 + "px";
      }
    }
    
    var tables = document.getElementsByTagName("table");
    for(var i = 0; i < tables.length; i++) {
      tables[i].style.marginLeft = 0;   // 初始化
      var trWidth = tables[i].getElementsByTagName("tr")[0].offsetWidth;
      if(trWidth == post[0].offsetWidth) {
        continue;
      } 
      else if (trWidth > post[0].offsetWidth) {      
        tables[i].style.width = "100%"; // 还原
      } 
      else {  // 居中
        tables[i].style.width = trWidth + 1 + "px";
        tables[i].style.marginLeft = (post[0].offsetWidth - trWidth) / 2 + "px"; 
      }
    }
  }
};