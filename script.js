let images = document.querySelectorAll('.small_img');
let modal = document.querySelector('.modal');
let modalImg = document.querySelector('#modal_img');
let btClose = document.querySelector('#bt_close');
let srcVal = "";

for (let i = 0; i < images.length; i++) {
    images[i].addEventListener('click', function () {
        srcVal = images[i].getAttribute('src');
        modalImg.setAttribute('src', srcVal);
        modal.classList.toggle('modal_active');
    })
}

btClose.addEventListener('click', function () {
    modal.classList.toggle('modal_active');
}) 