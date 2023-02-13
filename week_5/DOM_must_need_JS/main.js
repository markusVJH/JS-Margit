const backToTopButton = document.querySelector('#topButton');
const header = document.querySelector('header');
const mobileButton = document.querySelector('.mobileButton');
const nav = document.querySelector('nav ul');
const menuItems = document.querySelectorAll('nav ul li a');
const modalButton = document.querySelector('#modalButton');
const overlay = document.querySelector('.overlay');
const closeButton = document.querySelector('.close');


window.onscroll = function() {scrollFunction()};

const scrollFunction = () => {
    if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200 ) {
        backToTopButton.style.display = 'block';
        header.classList.add('bg')
    } else {
        backToTopButton.style.display = 'none';
        header.classList.remove('bg')
        
    }
    
}

const getToTop = () => {
    document.documentElement.scrollTop = 0;
    document.body.scrollTop = 0;
}
const mobileMenu = () => {
    for(const link of menuItems) {
        link.addEventListener('click', mobileMenu)
    }

   if (nav.classList.contains('responsive')) {
        nav.classList.remove('responsive')
   } else {
        nav.classList.add('responsive')
   }
}

const modalShow = () => {
    overlay.classList.toggle('visible');
}


backToTopButton.addEventListener('click', getToTop)
mobileButton.addEventListener('click', mobileMenu)
modalButton.addEventListener('click', modalShow)
closeButton.addEventListener('click', modalShow)
