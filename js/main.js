window.onload = () => {
  const navLink           = document.querySelectorAll('.nav__link')
  const footerListLink    = document.querySelectorAll('.footer__list-link')
  const header            = document.getElementById('header')
  const headerFixedOffset = 350 
  const burger            = document.getElementById('burger')
  const body              = document.getElementById('body')
  const overlaid          = document.getElementById('overlaid') 

  function scrollТavigation(e) {
    e.preventDefault();
    const id = this.getAttribute('href');
    document.querySelector(id).scrollIntoView({
      behavior: 'smooth',
      block: 'start'
    });
  }


  function chechSrollFixed($el, value) {
    if (window.pageYOffset > value) {
      $el.classList.add('fixed')
    } else {
      $el.classList.remove('fixed')
    }
  }

  chechSrollFixed(header, headerFixedOffset)

  navLink.forEach((item)=>{
    item.addEventListener('click', function(){
      body.classList.remove('menu-active')
    })
  })

  burger.addEventListener('click', function() {
    body.classList.toggle('menu-active')
  })

  overlaid.addEventListener('click', function() {
    body.classList.remove('menu-active')
  })
  
  window.addEventListener('scroll', function () {
    chechSrollFixed(header, headerFixedOffset)
  })

  navLink.forEach((item) => {
    item.addEventListener('click', scrollТavigation)
  })

  footerListLink.forEach((item) => {
    item.addEventListener('click', scrollТavigation)
  })

  wow = new WOW({
    mobile: false
  })
  wow.init();

}