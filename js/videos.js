let slideIndex = 1;
showSlides(slideIndex);
// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}
// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}
function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1} 
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none"; 
  }
  for (i = 0; i < dots.length; i++) {
     
      dots[i].className = dots[i].className.replace("active", "");
  }
  slides[slideIndex-1].style.display = "flex"; 
  dots[slideIndex-1].className += "active";
}
//responsive iframe
class Responsive {
  constructor(element) {
    this.element = element;
    this.winSize = window.matchMedia('(max-width: 500px');
    this.element.addEventListener('load', () => {
      if (this.winSize.matches) {
        this.widthChange();
      }
    })
    this.element.addEventListener('resize', () => {
      if (this.winSize.matches) {
        this.widthChange();
      }
    })
  }
  widthChange() {
    this.element.setAttribute('width', '200');
    this.element.setAttribute('height', '150');
  }
}

const frames = document.querySelectorAll('iframe');
Array.from(frames).forEach((e) => {
  return new Responsive(e);
})


