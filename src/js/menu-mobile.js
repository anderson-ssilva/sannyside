const mobileMenu = document.getElementsByClassName('mobile-menu')
let deskMenu = document.getElementsByClassName('menu')

console.log(mobileMenu)

mobileMenu[0].addEventListener('click', ()=>{
    deskMenu[0].classList.toggle('off')
    mobileMenu[0].classList.toggle('on')
})
