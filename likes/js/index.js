const container = document.querySelector('.container');
const heart = document.querySelector('.heart');

container.addEventListener('click', (e) => {
    heart.classList.add('active');

    setTimeout (() => {
        heart.classList.remove('active');
    },1000);
});
