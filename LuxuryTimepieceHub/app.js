document.addEventListener('DOMContentLoaded', function() {
    const toggleSidebarButton = document.getElementById('toggleSidebar');
    const closeSidebarButton = document.getElementById('closeSidebar');
    const sidebar = document.getElementById('sidebar');

    toggleSidebarButton.addEventListener('click', function() {
        if (sidebar.style.width === '450px') {
            sidebar.style.width = '0'; 
        } else {
            sidebar.style.width = '450px'; 
        }
    });

    closeSidebarButton.addEventListener('click', function() {
        sidebar.style.width = '0'; 
    });
});


function scrollVideos() {
    var videos = document.querySelectorAll("#video-container video");
  
    videos.forEach(function(video, index) {
      var videoHeight = video.offsetHeight;
      var scrollPosition = window.pageYOffset;
      var videoOffset = video.getBoundingClientRect().top + scrollPosition;
      var videoPlayPosition = window.innerHeight - videoHeight / 2;
  
      if (videoOffset < videoPlayPosition) {
        video.play();
        video.classList.add("active");
      } else {
        video.pause();
        video.classList.remove("active");
      }
  
      var videoTranslate = Math.max(0, (scrollPosition - videoOffset) / 2);
      video.style.transform = "translateY(-" + videoTranslate + "px)";
    });
  }
  
  window.addEventListener("scroll", scrollVideos);
  
  var captions = document.querySelectorAll('.caption');
    
    function checkVisibility() {
      captions.forEach(function(caption) {
        var rect = caption.getBoundingClientRect();
        var isVisible = (rect.top >= 0 && rect.bottom <= window.innerHeight);
        
        if (isVisible) {
          caption.style.opacity = 1;
        } else {
          caption.style.opacity = 0;
        }
      });
    }
    
    window.addEventListener('scroll', checkVisibility);
    window.addEventListener('resize', checkVisibility);
    checkVisibility();


    document.addEventListener('DOMContentLoaded', function() {
      const videos = document.querySelectorAll("#video-container video");
      const captions = document.querySelectorAll('.caption');
  
      const videoObserver = new IntersectionObserver((entries, observer) => {
          entries.forEach(entry => {
              const video = entry.target;
              if (entry.isIntersecting) {
                  video.play();
                  video.classList.add("active");
              } else {
                  video.pause();
                  video.classList.remove("active");
              }
  
              const videoTranslate = Math.max(0, (window.scrollY - entry.boundingClientRect.top) / 2);
              video.style.transform = "translateY(-" + videoTranslate + "px)";
          });
      }, { threshold: 0.5 }); 
  
      videos.forEach(video => {
          videoObserver.observe(video);
      });
  
      const captionObserver = new IntersectionObserver((entries, observer) => {
          entries.forEach(entry => {
              const caption = entry.target;
              if (entry.isIntersecting) {
                  caption.style.opacity = 1;
              } else {
                  caption.style.opacity = 0;
              }
          });
      }, { threshold: 0.5 });
  
      captions.forEach(caption => {
          captionObserver.observe(caption);
      });
  });