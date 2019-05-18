
class Fade {
  constructor(element) {
    this.element = element;
    
    this.element.addEventListener('click', (e) => {
    e.preventDefault();
    this.fade();
    })
  }
  fade() {
  }
}

let tags = document.querySelectorAll('.action');
tags.forEach(tab => {
  return new Fade(tab);
  // console.log(tab);
});

