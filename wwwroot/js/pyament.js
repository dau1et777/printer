document.addEventListener("DOMContentLoaded", function () {
    const promoInput = document.getElementById("promo-code");
    const applyPromoBtn = document.getElementById("apply-promo");
    const totalPriceElement = document.getElementById("total-price");
    let totalPrice = 22000; // Исходная сумма заказа

    // Применение промокода
    applyPromoBtn.addEventListener("click", function () {
        const promoCode = promoInput.value.trim();
        if (promoCode === "PROMO2025") {
            totalPrice *= 0.9; // Скидка 10%
            totalPriceElement.textContent = Math.round(totalPrice) + " ₸";
            alert("Промокод применен! Итоговая сумма: " + totalPriceElement.textContent);
        } else {
            alert("Неверный промокод.");
        }
    });

    // Валидация формы оплаты
    document.getElementById("payment-form").addEventListener("submit", function (event) {
        event.preventDefault();

        const cardNumber = document.getElementById("card-number").value;
        const expiry = document.getElementById("expiry").value;
        const cvv = document.getElementById("cvv").value;

        if (!/^\d{16}$/.test(cardNumber.replace(/\s/g, ""))) {
            alert("Неверный номер карты.");
            return;
        }

        if (!/^\d{2}\/\d{2}$/.test(expiry)) {
            alert("Неверный срок действия.");
            return;
        }

        if (!/^\d{3}$/.test(cvv)) {
            alert("Неверный CVV.");
            return;
        }

        alert("Оплата успешно проведена!");
        this.reset();
    });
});
