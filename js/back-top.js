document.addEventListener('DOMContentLoaded', function() {
  var backToTopButton = document.querySelector('.back-to-top');
  var rootElement = document.documentElement; // 用于滚动的根元素

  window.addEventListener('scroll', function() {
    if (rootElement.scrollTop > 100) { // 页面滚动距离大于100px时显示按钮
      backToTopButton.style.display = 'block';
    } else {
      backToTopButton.style.display = 'none';
    }
  });

  // 点击按钮返回页面顶部
  backToTopButton.addEventListener('click', function(event) {
    event.preventDefault();
    window.scrollTo({
      top: 0, /* 滚动到页面顶部 */
      behavior: 'smooth' /* 平滑滚动 */
    });
  });
});