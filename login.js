document.addEventListener("DOMContentLoaded", function() {
    const loginForm = document.getElementById("login-form");

    loginForm.addEventListener("submit", function(event) {
        event.preventDefault(); // Prevent form submission

        // Get the username input value
        const username = document.getElementById("username").value;

        // Store the username in sessionStorage
        sessionStorage.setItem("username", username);

        // Redirect to gathergenius.html
        window.location.href = "gathergenius.html";
    });
});
