// Wrap every letter in a span
var textWrapper = document.querySelector('.heading-1');
textWrapper.innerHTML = textWrapper.textContent.replace(/\S/g, "<span class='letter'>$&</span>");

anime.timeline({loop: true})
  .add({
    targets: '.heading-1 .letter',
    scale: [4,1],
    opacity: [0,1],
    translateZ: 0,
    easing: "easeOutExpo",
    duration: 950,
    delay: (el, i) => 70*i
  }).add({
    targets: '.heading-1',
    opacity: 0,
    duration: 1000,
    easing: "easeOutExpo",
    delay: 1000
  });

$('#my-face').hover(function(){
    $(this).toggleClass('animate__animated animate__wobble');
})
$('#myoctocat').hover(function(){
  $(this).toggleClass('animate__animated animate__rubberBand');
})
$('.highlight').hover(function(){
    $(this).children('.bi-code-square').color('white')
}) 

// swiper js
var swiper = new Swiper('.swiper-container', {
  effect: 'coverflow',
  grabCursor: true,
  centeredSlides: true,
  loop: true,
  slidesPerView: 'auto',
  coverflowEffect: {
    rotate: 70,
    stretch: 0,
    depth: 600,
    modifier: 1,
    slideShadows: true,
  },
  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },
});