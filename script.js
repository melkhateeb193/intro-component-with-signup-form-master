const btn = document.getElementById('btn');
const inputF = document.getElementById('fnameI');
const inputL = document.getElementById('lnameI');
const inputemail = document.getElementById('emailI');
const inputpass = document.getElementById('passI');
let ferror = document.getElementById('fnameError');
let lerror = document.getElementById('lnameError');
let emailError = document.getElementById('emailError');
let passError = document.getElementById('passError');

btn.addEventListener('click', () => {
    errorValidation(inputF.value ,ferror ,inputF )
    errorValidation(inputL.value ,lerror ,inputL )
    errorValidation(inputemail.value ,emailError , inputemail)
    errorValidation(inputpass.value ,passError ,inputpass )
});

function errorValidation(inputv , error , input ) {
if (inputv === "") {
    error.classList.replace('d-none', 'd-block');
    input.style.border = ' 1px red solid';
}
}


