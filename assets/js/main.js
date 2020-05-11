// 检测滚动栏，显示返回顶部的按钮
window.onscroll = function() {
  var t = document.documentElement.scrollTop || document.body.scrollTop;
  var top = document.getElementsByClassName("top");
  if( t > 300 ) { 
    top[0].style.display = "block";
  } else {
    top[0].style.display = "none";
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

// 显示壁纸的按钮变化
function showWP() {
  var c = document.getElementsByClassName("container")[0];
  var i = document.getElementsByClassName("wallpaper-button")[0].children[0];
  if (c.style.display === "block") {
    c.style.display = "none";
    i.className = "fa fa-file-alt";
  } else {
    c.style.display = "block";
    i.className = "fa fa-image";
  }
}

// 对 post 内元素的自动化设置
function setting() {
  var post = document.getElementsByClassName("post")[0];  // 获取 post 布局
  
  // 图片居中
  var imgs = post.getElementsByTagName("img");       // 获取 post 内所有 img
  cwidth = post.offsetWidth;
  for(var i = 0; i < imgs.length; i ++) {  // 对每个 img 进行调整
    var imgWidth = imgs[i].naturalWidth;
    if(imgWidth < cwidth) {
      imgs[i].style.marginLeft = (cwidth - imgWidth) / 2 + "px";
    } else {
      imgs[i].style.marginLeft = 0;
    }
  }
  
  // 表格居中
  var tables = post.getElementsByTagName("table");      // 获取所有的 table
  for(var i = 0; i < tables.length; i ++) {
    var ta = tables[i].offsetWidth;
    var th = tables[i].getElementsByTagName("thead")[0].offsetWidth;
    if(cwidth > th ) {
      tables[i].style.width = th + 1 + "px";
      tables[i].style.marginLeft = (cwidth - th) / 2 + "px";
    } else {
      tables[i].style.width = cwidth;
      tables[i].style.marginLeft = 0;
    }
  }
}