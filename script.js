function login() {
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;
    var errormessage = document.getElementById("error-msg"); 

    if (username == "johan" && password == "12345") {
        alert("Login successfully");
        errormessage.textContent = ""; 
    } else {
        errormessage.textContent = "Invalid username or password";
    }
}
