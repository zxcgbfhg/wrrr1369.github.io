document.addEventListener('DOMContentLoaded', function() {
      var banner = document.querySelector('.c-banner .banner');
      var slides = banner.querySelectorAll('.slides li');
      var currentSlideIndex = 0;
      var intervalId;
    
      function showSlide(index) {
        slides.forEach(function(slide, idx) {
          slide.style.display = idx === index ? 'block' : 'none';
          slide.style.opacity = idx === index ? 1 : 0;
        });
      }
    
      function nextSlide() {
        currentSlideIndex = (currentSlideIndex + 1) % slides.length;
        showSlide(currentSlideIndex);
      }
    
      function previousSlide() {
        currentSlideIndex = (currentSlideIndex - 1 + slides.length) % slides.length;
        showSlide(currentSlideIndex);
      }
    
      document.querySelector('.preImg').addEventListener('click', previousSlide);
      document.querySelector('.nexImg').addEventListener('click', nextSlide);
    
      // 自动轮播
      intervalId = setInterval(nextSlide, 1500); // 3秒切换一次图片
    
      // 当鼠标悬停在轮播图上时，停止自动轮播
      banner.addEventListener('mouseover', function() {
        clearInterval(intervalId);
      });
    
      // 当鼠标离开轮播图时，开始自动轮播
      banner.addEventListener('mouseout', function() {
        intervalId = setInterval(nextSlide, 1500);
      });
    
      // 初始显示第一张图片
      showSlide(currentSlideIndex);
    });
  
  
 