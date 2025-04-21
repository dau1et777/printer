document.getElementById('learn-more-btn').addEventListener('click', function() {
    let info = document.getElementById('extra-info');
    if (info.classList.contains('hidden')) {
        info.classList.remove('hidden');
        this.textContent = "Скрыть";
    } else {
        info.classList.add('hidden');
        this.textContent = "Подробнее";
    }
});

//222222222

document.querySelector('.order-btn').addEventListener('click', function() {
    window.scrollTo({
        top: document.querySelector('.order-form').offsetTop,
        behavior: 'smooth'
    });
});
