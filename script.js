document.addEventListener('DOMContentLoaded', function () {
    var btnMenu = document.querySelector('.btn-menu');
    var btnClose = document.querySelector('.btn-close');
    var menu = document.querySelector('.menu');
    
    btnMenu.addEventListener('click', function () {
        menu.style.display = 'block';
    });
    btnClose.addEventListener('click', function () {
        menu.style.display = 'none';
    });
});