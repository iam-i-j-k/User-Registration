document.getElementById('user-form').addEventListener('submit', function(e) {
    const password = document.getElementById('password').value;
    const confirmPassword = document.getElementById('confirm-password').value;

    if (password !== confirmPassword) {
        alert("Passwords do not match.");
        e.preventDefault();
    }
    if(password.length && confirmPassword.length < 8){
        alert("Password must be atleast 8 characters");
        e.preventDefault();
    }
});
