// Получаем элементы
const modal = document.getElementById("modal");
const buttons = document.querySelectorAll(".service-btn");
const span = document.getElementsByClassName("close")[0];
const form = document.getElementById("contactForm");
const successMessage = document.getElementById("successMessage");
const serviceTypeField = document.getElementById("serviceType");

// Открываем модальное окно при нажатии на кнопку
buttons.forEach(button => {
    button.onclick = function() {
        serviceTypeField.value = button.getAttribute("data-service");
        modal.style.display = "block";
    }
});

// Закрываем модальное окно при нажатии на "X"
span.onclick = function() {
    modal.style.display = "none";
}

// Закрываем модальное окно при клике вне его области
window.onclick = function(event) {
    if (event.target === modal) {
        modal.style.display = "none";
    }
}

// Маска для телефона
document.getElementById("phone").addEventListener("input", function(e) {
    let x = e.target.value.replace(/\D/g, '').substring(0, 11); // Убираем все нецифровые символы и ограничиваем ввод до 11 цифр
    let formatted = '';

    if (x.length > 0) {
        formatted = '+7 (';
    }
    if (x.length > 1) {
        formatted += x.substring(1, 4);
    }
    if (x.length >= 4) {
        formatted += ') ';
    }
    if (x.length >= 5) {
        formatted += x.substring(4, 7);
    }
    if (x.length >= 7) {
        formatted += '-';
    }
    if (x.length >= 8) {
        formatted += x.substring(7, 9);
    }
    if (x.length >= 9) {
        formatted += '-';
    }
    if (x.length >= 10) {
        formatted += x.substring(9, 11);
    }

    e.target.value = formatted;
});



// Валидация формы
form.addEventListener('submit', function (event) {
    event.preventDefault(); // Предотвращаем стандартное поведение

    if (form.checkValidity()) {
        successMessage.style.display = "block";
        form.reset();
        setTimeout(() => {
            modal.style.display = "none";
            successMessage.style.display = "none";
        }, 3000); // Закрываем окно через 3 секунды
    } else {
        alert("Пожалуйста, заполните все поля правильно.");
    }
});

