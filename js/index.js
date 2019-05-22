
class Fade {
  constructor(element) {
    this.element = element;
    this.element.addEventListener('click', (e) => {
      if (this.element.classList.contains('act')) {
      e.preventDefault()
      }
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
    });
  }
}

class Cursor {
  constructor(element) {
    this.element = element;
    this.element.addEventListener('mouseover', () => {
      this.point();
    })
  }
  point() {
    this.element.style.cursor = 'pointer';
  }
}

const tags = document.querySelectorAll('.btn-fade');
Array.from(tags).forEach(tab => {
  return new Fade(tab);
  // console.log(tab);
});

Array.from(tags).forEach((btn) => {
  return new Cursor(btn);
});

// popup box

class Popup {
  constructor (element){
    this.element = element;
    console.log(this.element);
    //create html elements
    this.popContent = document.createElement('div');
    this.closeDiv = document.createElement('div')
    this.close = document.createElement('span');
    this.login = document.createElement('form');
    this.uName = document.createElement('input');
    this.uPass = document.createElement('input');
    this.submit = document.createElement('button');
    
    //add classes
    this.element.classList.add('pop-contain');
    this.popContent.classList.add('pop-content');
    this.close.classList.add('close');
    this.closeDiv.classList.add('close-div');
    this.login.classList.add('form');
    //text content for form
    this.close.textContent = 'x';
    this.textUser = 'User Name :  ';
    this.textPass = 'Password :  ';
    //insert elements
    this.element.append(this.popContent);
    this.popContent.append(this.closeDiv);
    this.closeDiv.append(this.close);
    this.popContent.append(this.login);
    this.login.append(this.textUser);
    this.login.append(this.uName);
    this.login.append(this.textPass);
    this.login.append(this.uPass);
  }
  
}
const popup = document.querySelector('.popup');
document.querySelector('.login').addEventListener('click', function() {
  const popup = document.querySelector('.popup');
  return new Popup(popup);
});




