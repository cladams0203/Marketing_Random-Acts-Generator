
class Fade {
  constructor(element) {
    this.element = element;
    
    this.element.addEventListener('click', (e) => {
      e.preventDefault();
      this.element.style.opacity = 0;
      let opa = 0;
      let timer = setInterval(function() {
        for (let i = 0; i < 1; i ++) {
          opa = opa + 0.1;
          console.log(opa);
          if (opa < .90) {
          element.style.opacity = opa;
          console.log(opa);
          }
          else if (opa > 1) {
            clearInterval(timer);
          }
        }
      }, 20);
    
    })
  }
}

let tags = document.querySelectorAll('.btn-fade');
tags.forEach(tab => {
  return new Fade(tab);
  // console.log(tab);
});


