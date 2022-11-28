const password = document.querySelector('#password');
const passwordMsg = document.querySelector('.password-msg');
const confirm = document.querySelector('#confirm-password');
const confirmMsg = document.querySelector('.confirm-msg');

const error = {
    1: "Passwords don't match",
    2: 'Must be 6 or more characters, contain at least one uppercase, one lowercase and one number'
}

function validateAll() {
    let passwordError = '';
    let confirmError = '';

    if (password.value != '' && confirm.value != '' && password.value !== confirm.value) {
        passwordError = error[1];
        confirmError = error[1];
    }
    if (password.validity.patternMismatch)
        passwordError = error[2];
    if (confirm.validity.patternMismatch)
        confirmError = error[2];
    passwordMsg.textContent = passwordError;
    confirmMsg.textContent = confirmError;
    password.setCustomValidity(passwordError);
    confirm.setCustomValidity(confirmError);
}

password.onchange = () => validateAll();
confirm.onchange = () => validateAll();