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
  var allSlides = document.getElementsByClassName("slide");
  var dots = document.getElementsByClassName("dot");
  if (n > allSlides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = allSlides.length}
  for (i = 0; i < allSlides.length; i++) {
    allSlides[i].style.display = "none";
    dots[i].className = dots[i].className.replace(" active", "");
  }
  allSlides[slideIndex-1].style.display = "block";
  adaptSlideImg()
  dots[slideIndex-1].className += " active";
}


// pause autoplay
autoplayOFF = () => {
  var playButton = document.getElementsByClassName("play");
  var pauseButton = document.getElementsByClassName("pause");
  clearInterval(slideTimer);
  autoplay = 0;
  pauseButton[0].style.visibility = "hidden";
  playButton[0].style.visibility = "visible";
}

// resume autoplay
autoplayON = () =>{
  var playButton = document.getElementsByClassName("play");
  var pauseButton = document.getElementsByClassName("pause");
  clearInterval(slideTimer);
  autoplay = 1;
  slideTimer = setInterval(function(){plusSlides(slideIndex)}, 5000);
  playButton[0].style.visibility = "hidden";
  pauseButton[0].style.visibility = "visible";
}

// adapt size and placement of slide image for small device widths
function adaptSlideImg() {
  var hcan = document.getElementsByClassName("slideshow-canvas")[0].clientHeight;
  var slides = document.getElementsByClassName("slide");
  for(var i = 0; i < slides.length; i++) {
    var hcap = slides[i].getElementsByClassName("slide-caption")[0].clientHeight;
    var simg = slides[i].getElementsByClassName("slide-img")[0]
    var himg = simg.clientHeight;
    if (himg+hcap < 1.01*hcan) {
      simg.style.bottom = hcap+"px";
    } else {
      simg.style.bottom = "0";
    }
  }
}
