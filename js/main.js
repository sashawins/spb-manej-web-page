window.onscroll = function() {
  var scrollButton = document.getElementById("back-to-top");
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    scrollButton.style.display = "block";
  } else {
    scrollButton.style.display = "none";
  }
};

document.getElementById("back-to-top").onclick = function(e) {
  e.preventDefault();
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  });
};

document.addEventListener('DOMContentLoaded', function() {
  var bannerVideo = document.getElementById('banner-video');
  var bannerText = document.querySelector('.banner-text');
  var bannerOverlay = document.querySelector('.banner-overlay');

  function showTextAndOverlay() {
    bannerText.style.opacity = 1;
    bannerOverlay.style.opacity = 1;
  }

  if (bannerVideo.readyState >= 2) {
    setTimeout(showTextAndOverlay, 7000);
  } else {
    bannerVideo.addEventListener('loadeddata', function() {
      setTimeout(showTextAndOverlay, 7000);
    });
  }
});
