---
# 需要 Liquid 预处理
---

// 页面加载后开始执行
document.addEventListener('DOMContentLoaded', function(){
  var keyword = decodeURI(getQuery('keyword'));  // 获取关键字
  
  // 获取搜索框和搜索数据
  var searchData;
  var input = document.querySelector('#search-input');
  var result = document.querySelector('#results-container');
  var xhrSearch = new XMLHttpRequest();
  xhrSearch.open('GET', '{{ site.baseurl }}/search.json', true);
  xhrSearch.onreadystatechange = function() {
      if (xhrSearch.readyState == 4 && xhrSearch.status == 200) {
        searchData = JSON.parse(xhrSearch.responseText);
        if( keyword ) {
          input.value = decodeURI(keyword);
          search(decodeURI(keyword));
        }
        input.placeholder = "请输入关键词，回车搜索";
      }
  };
  xhrSearch.send(null);
  
  // 监听搜索框
  document.querySelector('#search-input').addEventListener('keyup', function(e) {
    if(e.keyCode == 13 && this.value.trim() != '') {  // 删除头尾空格
      search(decodeURI(this.value));
    }
  });
  
  // 对所有数据进行匹配
  function search(keyword) {
    var sum = 10;   // 限制最多显示 10 条结果
    var html = '';  // 显示部分
    var postContent = '';
    for(var i = 0; i < searchData.length; i ++) {
      postContent = searchData[i].title + searchData[i].content;
      if(postContent.toLowerCase().indexOf(keyword.toLowerCase()) > -1) { // 是否包含关键字
        html += '<li><a href="' + searchData[i].url + '">' + searchData[i].title + '</a></li>';
        sum --;
        if (sum === 0) break;
      }
    }
    if(html === '') {
      html += '<li>无相关结果，<a href="{{ site.baseurl }}/index.html">去首页找找？</a></li>';
    }
    result.innerHTML = html;
  };
  
});

function getQuery(variable) {  // 获取 URL 中的关键字
  var query = window.location.search.substring(1);
  var vars = query.split("&");
  for (var i=0;i<vars.length;i++) {
      var pair = vars[i].split("=");
      if(pair[0] == variable){return pair[1];}
  }
  return(false);
}