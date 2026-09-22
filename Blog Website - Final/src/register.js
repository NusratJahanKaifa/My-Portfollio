// Show / Hide Password

const showPassword = document.getElementById("showPassword");
showPassword.addEventListener("change", function () {
    const password = document.getElementById("RegUserPassword");
    const confirm = document.getElementById("ConfirmPassword");
    if (this.checked) {
        password.type = "text";
        confirm.type = "text";
    } else {
        password.type = "password";
        confirm.type = "password";
    }

});
function Register() {
    let username = document.getElementById("RegUserName").value.trim();
    let email = document.getElementById("RegEmail").value.trim();
    let password = document.getElementById("RegUserPassword").value;
    let confirmPassword = document.getElementById("ConfirmPassword").value;
    let terms = document.getElementById("terms").checked;
    if (username === "" ||email === "" ||password === "" ||confirmPassword === "") {
        alert("Please fill in all fields.");
        return;
    }
    // Email Validation
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email)) {
        alert("Please enter a valid email.");
        return;
    }
    // Password Length
    if (password.length < 8) {
        alert("Password must be at least 8 characters.");
        return;
    }
    // Password Match
    if (password !== confirmPassword) {
        alert("Passwords do not match.");
        return;
    }
    // Terms
    if (!terms) {
        alert("Please accept the Terms & Conditions.");
        return;
    }
    // LocalStorage
    let users = JSON.parse(localStorage.getItem("users")) || [];
    // Duplicate Username
    let usernameExists = users.find(user => user.username === username);
    if (usernameExists) {
        alert("Username already exists.");
        return;
    }
    // Duplicate Email
    let emailExists = users.find(user => user.email === email);
    if (emailExists) {
        alert("Email already exists.");
        return;
    }
    // New User
    const userInfo = {
        username,
        email,
        password
    };
    users.push(userInfo);
    localStorage.setItem("users", JSON.stringify(users));
    alert("Registration Successful!");
    document.getElementById("RegUserName").value = "";
    document.getElementById("RegEmail").value = "";
    document.getElementById("RegUserPassword").value = "";
    document.getElementById("ConfirmPassword").value = "";
    document.getElementById("terms").checked = false;
    document.getElementById("showPassword").checked = false;

    window.location.href = "blog.html";

}