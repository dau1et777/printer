document.querySelectorAll('.faq-item h3').forEach(item => {
    item.addEventListener('click', () => {
        let answer = item.nextElementSibling;
        answer.style.display = answer.style.display === 'block' ? 'none' : 'block';
    });
});
