// Add eventListener in login btn
document.getElementById('login-btn').addEventListener('click', function () {
        //get user email address
        const emailField = document.getElementById('user-email');
        const email = emailField.value;

        //get user Password
        const passwordField = document.getElementById('user-password');
        const password = passwordField.value;

        //Check User Validation
        if (email == 'abc@gmail.com' && password == 'abc') {
                window.location.href = 'banking.html'
        }
        else {
                invalidMsg = document.getElementById('invalid-message');
                invalidMsg.innerText = 'Invalid Email or Password'
        }
})