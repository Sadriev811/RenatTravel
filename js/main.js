let d = document
let burger_menu = d.querySelector('.burger_menu')
let to_top = d.querySelector('.to_top')
let burger = d.querySelector('.burger')
let burger_a = d.querySelectorAll('.burger a')

burger_menu.onclick = () => {
    burger_menu.classList.toggle('active')
    burger.classList.toggle('burger_active')
}
burger_a.forEach(elem => {
  elem.onclick = () => {
    burger.classList.remove('burger_active')
    burger_menu.classList.remove('active')
  }
});
new Swiper('.swiper', {
    direction: 'horizontal',
    loop: true,
    slidesPerView: 3,
    spaceBetween: 30,
    
    breakpoints: {
      // Когда ширина окна >= 320px
      320: {
        slidesPerView: 1,
        spaceBetween: 20
      },
      // Когда ширина окна >= 480px
      480: {
        slidesPerView: 1,
        spaceBetween: 30
      },
      // Когда ширина окна >= 640px
      920: {
        slidesPerView: 2,
        spaceBetween: 40
      },
      1100: {
        slidesPerView: 3,
        spaceBetween: 40
      },
    },
   
  
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  
  });

  window.addEventListener('scroll', () => {
    let scroll = d.querySelector('.to_top')
    scroll.classList.toggle("to_top_active", window.scrollY > 500)
})

function scrollTopTop() {
    window.scrollTo({
        top:0,
        behavior:"smooth"
    });
}
to_top.onclick = () => {
    scrollTopTop()
}