// Кнопка "Наверх"
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

// Флип при наведении на фото
document.querySelectorAll('.photo-flip').forEach(photoFlip => {
  const flipInner = photoFlip.querySelector('.photo-flip-inner');
  const correspondingTextFlip = photoFlip.closest('.flip-block').querySelector('.text-flip .text-flip-inner');

  if (!flipInner || !correspondingTextFlip) return;

  photoFlip.addEventListener('mouseenter', () => {
    flipInner.style.transform = 'rotateY(180deg)';
    correspondingTextFlip.style.transform = 'rotateY(180deg)';
  });

  photoFlip.addEventListener('mouseleave', () => {
    flipInner.style.transform = 'rotateY(0deg)';
    correspondingTextFlip.style.transform = 'rotateY(0deg)';
  });
});
