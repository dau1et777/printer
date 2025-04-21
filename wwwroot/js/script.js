
/*sssssssssssssssssssssssssssssssssssssssssssssssss*/

//aiaiaiaiiai

document.getElementById('ai-form').addEventListener('submit', async function (event) {
    event.preventDefault();

    const description = document.getElementById('model-description').value;
    if (description.trim() === '') {
        alert('Введите описание модели');
        return;
    }

    const apiKey = '78b97ccd-30e7-4b9b-a120-d592c0c6fadd';  // Твой API-ключ
    const endpoint = 'https://api.deepai.org/api/text2img';  // Правильный URL

    try {
        const response = await fetch(endpoint, {
            method: "POST",
            headers: {
                "Content-Type": "application/x-www-form-urlencoded",
                "api-key": apiKey
            },
            body: new URLSearchParams({ text: description })  // DeepAI требует form-data, а не JSON
        });

        const data = await response.json();
        console.log("Ответ API:", data);

        if (data && data.output_url) {
            document.getElementById('model-image').src = data.output_url;
            document.getElementById('generated-model').classList.add('show');  // Показываем блок результата
        } else {
            alert("Ошибка при генерации изображения.");
        }
    } catch (error) {
        console.error("Ошибка API:", error);
        alert("Ошибка при подключении к DeepAI.");
    }
});


// jana
document.addEventListener("DOMContentLoaded", function () {
    var swiper = new Swiper(".mySwiper", {
        loop: true,
        autoplay: {
            delay: 3000,
            disableOnInteraction: false
        },
        pagination: {
            el: ".swiper-pagination",
            clickable: true
        }
    });

    // Анимация появления при прокрутке
    let fadeElements = document.querySelectorAll(".fade-in");

    function fadeInOnScroll() {
        fadeElements.forEach(el => {
            if (el.getBoundingClientRect().top < window.innerHeight - 100) {
                el.style.opacity = 1;
                el.style.transform = "translateY(0)";
            }
        });
    }

    window.addEventListener("scroll", fadeInOnScroll);
    fadeInOnScroll(); // Запуск при загрузке
});
