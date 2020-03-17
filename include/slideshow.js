var slideIndex = 1;
var slideTimer;
var slideshowContainer;
var autoplay = 1;

// autoplay
window.addEventListener("load",function() {
  showSlides(slideIndex);
  slideTimer = setInterval(function(){plusSlides(1)}, 5000);
  slideshowContainer = document.getElementsByClassName('slideshow-canvas')[0];
})

// next and previous
function plusSlides(n){
  clearInterval(slideTimer);
  if (n < 0){
    showSlides(slideIndex -= 1);
  } else {
    showSlides(slideIndex += 1);
  }
  if (autoplay === 1){
    if (n === -1){
      slideTimer = setInterval(function(){plusSlides(n + 2)}, 5000);
    } else {
      slideTimer = setInterval(function(){plusSlides(n + 1)}, 5000);
    }
  }
}

// controls current slide and resets interval
function currentSlide(n){
  if (autoplay === 1) {
    clearInterval(slideTimer);
    slideTimer = setInterval(function(){plusSlides(n + 1)}, 5000);
  }
  showSlides(slideIndex = n);
}

// make current slide visible
function showSlides(n){
  var i;
  var allSlides = document.getElementsByClassName("slides");
  if (n > allSlides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = allSlides.length}
  for (i = 0; i < allSlides.length; i++) {
    allSlides[i].style.display = "none";
  }
  allSlides[slideIndex-1].style.display = "block";
}

// pause autoplay
autoplayOFF = () => {
  var playButton = document.getElementsByClassName("play");
  var pauseButton = document.getElementsByClassName("pause");
  clearInterval(slideTimer);
  autoplay = 0;
  pauseButton[0].style.display = "none";
  playButton[0].style.display = "block";
}

// resume autoplay
autoplayON = () =>{
  var playButton = document.getElementsByClassName("play");
  var pauseButton = document.getElementsByClassName("pause");
  clearInterval(slideTimer);
  autoplay = 1;
  slideTimer = setInterval(function(){plusSlides(slideIndex)}, 5000);
  playButton[0].style.display = "none";
  pauseButton[0].style.display = "block";
}