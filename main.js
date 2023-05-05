


let mainBtn = document.querySelector('.main-btn')
let mainBlock = document.querySelector('.main-block')

mainBtn.addEventListener('click', (event) => {
    event.preventDefault(); 
    const pos = mainBlock.offsetTop;
    window.scrollTo({
        top: pos,
        behavior: 'smooth'
    });
});


let aboutBtn = document.querySelector('.main-btn')
let aboutBlock = document.querySelector('.main-block')

aboutBtn.addEventListener('click', (event) => {
    event.preventDefault(); 
    const pos = aboutBlock.offsetTop;
    window.scrollTo({
        top: pos,
        behavior: 'smooth'
    });
});


let contactsBtn = document.querySelector('.main-btn')
let contactsBlock = document.querySelector('.main-block')

contactsBtn.addEventListener('click', (event) => {
    event.preventDefault(); 
    const pos = contactsBlock.offsetTop;
    window.scrollTo({
        top: pos,
        behavior: 'smooth'
    });
});


const images = document.querySelectorAll('.about-block img');

function checkImages() {
  const windowHeight = window.innerHeight;
  images.forEach(image => {
    const imageTop = image.getBoundingClientRect().top;
    if (imageTop < windowHeight) {
      image.classList.add('visible');
    } else {
      image.classList.remove('visible');
    }
  });
}

window.addEventListener('scroll', checkImages);
window.addEventListener('resize', checkImages);

  