document.getElementById('loginBtn').addEventListener('click', function() {
    // Get the password from the input field
    let password = document.getElementById('password').value;
    let password_input = prompt('Enter your password:');

    if (password_input === password) {
        alert('Your password is: ' + password);
        window.location.href = 'login.html';
    } else {
        alert('Invalid password, please try again.');
    }
});