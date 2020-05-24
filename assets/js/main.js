---
# Liquid pretreatment required
---
// 检测滚动栏
window.onscroll = function() {
  // 是否显示回到顶部按钮
  var t = document.documentElement.scrollTop || document.body.scrollTop;
  var top = document.querySelector(".top");  // 获取第一个绑定 top 的元素
  if(t > 300 ) { 
    top.style.display = "block";
  } else {
    top.style.display = "none";
  }
  
  // 高亮目录
  if(document.querySelector('#markdown-toc')) {  // 是否生成了目录
    if (document.querySelector('.tocactive')) {  // 首先清除原有高亮
        document.querySelector('.tocactive').classList.remove('tocactive');
    }
    
    var subTitles = document.querySelectorAll('.post h2, .post h3'); // 所有标题
    for (var i = 0; i < subTitles.length; i++) {
      if (subTitles[i].offsetTop + 2 >= t || i === subTitles.length - 1) {         // 可视窗口及下方的第一个标题
        if(subTitles[i].offsetTop - 2 >= t) {  // 标题上方还有一些内容
          if( i > 0) {  // 渲染上一个标题
            document.querySelector('#markdown-toc-' + subTitles[i-1].textContent).classList.add('tocactive');
          }
        } else {  // 渲染当前标题
          document.querySelector('#markdown-toc-' + subTitles[i].textContent).classList.add('tocactive');
        }
        break;
      } 
    }
  }
};

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
};

// 导航栏中的搜索框回车触发弹出框
document.querySelector('#search-input').addEventListener('keyup', function(e) {
  if(e.keyCode == 13){
    if(this.value.trim() != '') {  // 删除头尾空格
      location.href = '{{ site.baseurl }}/search.html?keyword=' + this.value;
    }
  }
});

var imgs = document.getElementsByClassName('bigimg');
for(var i = 0; i < imgs.length; i++) {
  imgs[i].addEventListener('click', function(){
    window.open(this.src,'_blank');
  })
}