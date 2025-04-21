// Перенаправление на страницу "Кейсы"
function redirectToCases() {
    window.location.href = "cases.html";
}

// Обработка отправки формы
document.getElementById("contact-form").addEventListener("submit", function(event) {
    event.preventDefault(); // Остановить стандартную отправку формы

    // Показать сообщение об успешной отправке
    document.getElementById("success-message").classList.remove("hidden");

    // Очистить поля формы
    setTimeout(() => {
        document.getElementById("contact-form").reset();
        document.getElementById("success-message").classList.add("hidden");
    }, 3000);
});
