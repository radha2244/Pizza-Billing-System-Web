function login() {

    let username = document.getElementById("username").value.trim();
    let password = document.getElementById("password").value.trim();

    if (username === "" || password === "") {
        alert("Please enter username and password.");
        return;
    }

    if (username === "admin_" && password === "admin_2233") {
        window.location.replace("dashboard.html");
    } else {
        alert("Invalid username or password.");
    }
}