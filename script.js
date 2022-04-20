const buttons = document.querySelectorAll('.faq-toggle');

buttons.forEach(button => {
    button.addEventListener('click', function () {
        button.parentNode.classList.toggle('faq__active');
    });
});