const headerMain = document.querySelector('.header__main');
window.onscroll = function () {
    if (!headerMain.classList.contains('header__main--fixed')) {
        if (window.scrollY > 100) {
            headerMain.classList.add('header__main--fixed');
        }
    } else {
        if (window.scrollY <= 100) {
            headerMain.classList.remove('header__main--fixed');
        }
    }
}
