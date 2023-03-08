// ================ COUPON COUNTDOWN ===============

let countDate = new Date("december 1, 2023 00:00:00").getTime()

function countDown() {
    let now = new Date().getTime()
    const gap=countDate-now;

    let seconds = 1000
    let minutes = seconds*60
    let hours = minutes*60
    let days = hours*24

    let d = Math.floor(gap/(days))
    let h = Math.floor(gap%(days)/(hours))
    let m = Math.floor(gap%(hours)/(minutes))
    let s = Math.floor(gap%(minutes)/(seconds))

    document.getElementById('days').innerText=d
    document.getElementById('hours').innerText=h
    document.getElementById('minutes').innerText=m
    document.getElementById('seconds').innerText=s

}

setInterval(function()
{
    countDown(),
    1000
}
)

// ================ NAV BAR + LOGO ===============
const openMenuButton = document.getElementById('open-menu')
const closeMenuButton = document.getElementById('close-menu')
const navMenu = document.getElementById('navigation-menu')
const homeLogoButton = document.getElementById('home-logo')

function openMenu() {
  navMenu.style.display = 'flex'
  navMenu.style.height = `${window.innerHeight}px`
}

function closeMenu() {
    navMenu.classList.toggle('close')
   setTimeout(() => {
   navMenu.classList.toggle('close')
    navMenu.style.display = 'none'
   }, 340)

}


openMenuButton.addEventListener('click', openMenu)
closeMenuButton.addEventListener('click', closeMenu)
homeLogoButton.addEventListener('click', () => window.scrollTo(0,0))

// =============== SWIPER API ============

const swiper = new Swiper('.swiper', {
    loop: true,
    autoplay :{
        delay:5000,
        disableOnInteraction:false,
    },
    pagination: {
        el: '.swiper-pagination',
        progressbarFillClass: '.swiper-pagination',
        clickable: true,
    },
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    }, 
  });


  const productSwiper = new Swiper('.product-slider',{
      grabCursor: true,
      slidesPerView:5,
      loop: true,
      loopedSlides: 9,
      centeredSlides: true,
    spaceBetween:10,   
    autoplay :{
        delay:3000,
        disableOnInteraction:false,
    },

    breakpoints: {
        0: {
            slidesPerView: 1,
        }, 
        360: {
            slidesPerView: 2,
        }, 
        600: {
            slidesPerView: 3,
        },
        750: {
            slidesPerView: 4,
        }, 
        1026: {
            slidesPerView: 5,
        },
    },
    });
  