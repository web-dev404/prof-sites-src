const body = document.querySelector('body'),
    checkbox = document.querySelector('.checkbox1'),
    nav = document.querySelector('.nav'),
    headerLink = document.querySelectorAll('.header__link');

checkbox.addEventListener('click', () => {
    body.classList.toggle('active-body');
    nav.classList.toggle('active');
});

headerLink.forEach(item => {
    item.addEventListener('click', (e) => {
        body.classList.remove('active-body');
        nav.classList.remove('active');
    })
})