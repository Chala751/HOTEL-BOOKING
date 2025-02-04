// Check if the user is remembered
document.addEventListener("DOMContentLoaded", function () {
    const loginForm = document.getElementById("loginForm");
    const errorMessage = document.getElementById("error-message");
    const exitLink = document.getElementById("exitLink");

    // Retrieve registered users from localStorage
    let registeredUsers = JSON.parse(localStorage.getItem("registeredUsers")) || {};

    // Check if the user is already remembered
    if (localStorage.getItem("rememberedUser")) {
        window.location.href = "rooms.html"; // Redirect to rooms page if remembered
    }

    loginForm.addEventListener("submit", function (event) {
        event.preventDefault(); // Prevent form submission

        let username = document.getElementById("username").value.trim();
        let password = document.getElementById("password").value;
        let rememberMe = document.getElementById("rememberMe").checked;

        // Reset error message
        errorMessage.textContent = "";

        // Validate credentials
        if (registeredUsers[username] && registeredUsers[username] === password) {
            alert("Login successful!");

            // Remember user if checked
            if (rememberMe) {
                localStorage.setItem("rememberedUser", username);
            }

            // Redirect to rooms page
            window.location.href = "rooms.html";
        } else {
            errorMessage.textContent = "Invalid username or password!";
        }
    });

    // Exit to home page
    exitLink.addEventListener("click", function () {
        window.location.href = "home.html"; // Redirect to home page
    });
});
