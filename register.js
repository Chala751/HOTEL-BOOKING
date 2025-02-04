const registeredUsers = {}; // Stores usernames and passwords

document.addEventListener("DOMContentLoaded", function () {
    const registerForm = document.getElementById("registerForm");
    const errorMessage = document.getElementById("error-message");

    registerForm.addEventListener("submit", function (event) {
        event.preventDefault(); // Prevent form submission

        let username = document.getElementById("username").value.trim();
        let password = document.getElementById("password").value;
        let confirmPassword = document.getElementById("confirmPassword").value;

        // Reset error message
        errorMessage.textContent = "";

        // Check if passwords match
        if (password !== confirmPassword) {
            errorMessage.textContent = "Passwords do not match!";
            return;
        }

        // Check if password is already used by another user
        for (let user in registeredUsers) {
            if (registeredUsers[user] === password) {
                errorMessage.textContent = "This password is already in use by another user. Please choose a different one.";
                return;
            }
        }

        // Store the new user
        registeredUsers[username] = password;
        alert("Registration successful!");

        // Redirect to login page (optional)
        window.location.href = "login.html";
    });
});
