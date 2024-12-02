let buttons = document.querySelectorAll('#btn');
buttons.forEach(button => {
    button.addEventListener('click', (e) => {
        e.preventDefault();
        window.location.href = 'payment.html';
    });
});
