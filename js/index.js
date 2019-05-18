
class Fade {
  constructor(element) {
    this.element = element;
    
    this.element.addEventListener('click', (e) => {
    e.preventDefault();
    this.fade();
    })
  }
  fade() {
    let opa = 0.1;
    let count = 0.1;
    while (opa < 1) {
    this.element.style.opacity = `'${opa}'`;
    let timer = setInterval(function() {

    })
  } 
  }
}

let tags = document.querySelectorAll('.action');
tags.forEach(tab => {
  return new Fade(tab);
  // console.log(tab);
});


