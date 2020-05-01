// 检测滚动栏，显示返回顶部的按钮
window.onscroll = function(){
  var t = document.documentElement.scrollTop || document.body.scrollTop; 
  var top = document.getElementsByClassName("top");
  if( t >= 300 ) { 
    top[0].style.display = "block";
  } 
}