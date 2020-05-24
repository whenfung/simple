---
# Liquid pretreatment required
---

// 页面加载后开始执行
document.addEventListener('DOMContentLoaded', function(){
  var keyword = decodeURI(getQuery('keyword'));  // 获取关键字
  
  // 获取搜索框和搜索数据
  var input = document.querySelector('#search-input');
  var searchData;
  var result = document.querySelector('#results-container');
  var xhrSearch = new XMLHttpRequest();
  xhrSearch.open('GET', '{{ site.baseurl }}/search.json', true);
  xhrSearch.onreadystatechange = function() {
      if (xhrSearch.readyState == 4 && xhrSearch.status == 200) {
        searchData = JSON.parse(xhrSearch.responseText);  // 解析数据
        if(keyword) {
          search(keyword);        // 对数据进行搜索
          input.value = keyword;  // 保存输入的关键词
        }
      }
  };
  xhrSearch.send(null);
  
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
      html += '<li>无相关结果，<a href="{{ site.baseurl }}/archives.html">去归档找找？</a></li>';
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
  return('');   // 返回空
}