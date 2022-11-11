let password = document.getElementById('password');
let confirmPassword =   document.getElementById('password-confirm')
let pass=Array.from(password.value);
let form = document.getElementById('myform');
let incorrectPasswordDiv   =   document.getElementById('incorrect_password')
let incorrectConfirmPasswordDiv =   document.getElementById('incorrect_confirm')

form.addEventListener('change',checkLength)

function checkLength() {
    pass=Array.from(password.value);
    if (pass.length>=6) {
        incorrectPasswordDiv.innerText  =   '🙂 Good password!'
        incorrectPasswordDiv.classList.remove('incorrect')
        incorrectPasswordDiv.classList.add('correct');
        password.classList.remove('error');
    } else {
        incorrectPasswordDiv.classList.remove('correct');
        incorrectPasswordDiv.classList.add('incorrect');
        password.classList.add('error');
        incorrectPasswordDiv.innerText  =   'Password should be at least 6 characters long!'
    }
}


form.addEventListener('change',checkPass)
function checkPass() {
    if (password.value==confirmPassword.value) {
        incorrectConfirmPasswordDiv.classList.remove('incorrect');
        incorrectConfirmPasswordDiv.classList.add('correct');
        confirmPassword.classList.remove('error');
        incorrectConfirmPasswordDiv.innerText   =   ''
    } else {
        incorrectConfirmPasswordDiv.classList.remove('correct');
        incorrectConfirmPasswordDiv.classList.add('incorrect');
        confirmPassword.classList.add('error');
        incorrectConfirmPasswordDiv.innerText   =   'Passwords do not match!';
    }
}



