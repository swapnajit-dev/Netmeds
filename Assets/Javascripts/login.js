document.getElementById('loginForm').addEventListener('submit', function(event) {
    // Prevent the default form submission
    event.preventDefault();

    // Show an alert when the user logs in
    alert('You have logged in successfully!');

    // Redirect to the main page (you can replace 'index.html' with your main page URL)
    window.location.href = 'index.html';
});
