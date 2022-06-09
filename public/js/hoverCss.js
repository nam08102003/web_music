
const menuBar = document.querySelector('.content-main .header-content .menu-bar i');
const closeBtn = document.querySelector('.navbar .close i');
const mainWrapper = document.querySelector('.main-wrapper');

menuBar.onclick = function () {
    mainWrapper.classList.remove('disappear');
    mainWrapper.classList.add('appear');
}
closeBtn.onclick = function () {
    mainWrapper.classList.remove('appear');
    mainWrapper.classList.add('disappear');
}