const menuButton = document.getElementById('menu-button')
const mobileMenu = document.getElementById('mobile-menu')
const closeButton = document.getElementById('closed-icon')
const desktopLogoContaniner = document.getElementById('deskto-logo-contaniner')


closeButton.classList.add('cursor-pointer')

// Open Mobile Menu

menuButton.addEventListener('click', function(){
    mobileMenu.classList.remove('hidden')
    menuButton.classList.add('hidden')
    desktopLogoContaniner.classList.add('hidden')
})

// Close Mobile Menu
closeButton.addEventListener('click', function(){
    mobileMenu.classList.add('hidden')
    menuButton.classList.remove('hidden')
    desktopLogoContaniner.classList.remove('hidden')
})