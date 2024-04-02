const form = document.getElementById("form");
const username = document.getElementById("username");
const email = document.getElementById("email");
const password = document.getElementById("password");
const cPassword = document.getElementById("confirm-password");
const submit = document.getElementById("btn");

form.addEventListener("submit", (e) =>{
    e.preventDefault();

    validateInputs();
})

const validateInputs = () => {
    const userNameValue = username.value.trim();
    const emailValue = email.value.trim();
    const passwordValue = password.value.trim();
    const cPasswordValue = cPassword.value.trim();

    if(userNameValue === ''){
        setError(username, "Username is required");
    }
    else{
        setSuccess(username);
    }


    if(emailValue === ""){
        setError(email, "Email is required")
    }
    else if(!isValidEmail(emailValue)){
        setError(email, "Please provide a valid Email");
        // console.error("error");
    }
    else{
        setSuccess(email);
    }


    if(passwordValue === ""){
        setError(password, "Password is required");
    }
    else if(passwordValue.length < 8){
        setError(password, "Password must be minimum 8 character long");
    }

    // else if(!isStrongPassword(password)){
    //     setError(password, "Please make a strong password");
    // }
    else{
        setSuccess(password);
    }


    if(cPasswordValue === ""){
        setError(cPassword, "Confirm password is required");
    }
    else if(cPasswordValue !== passwordValue){
        setError(cPassword, "Password didn't match");
    }
    else{
        setSuccess(cPassword);
    }
}

const setError = (element, message) => {
    const input = element.parentNode;
    const errorDisplay = input.querySelector(".error");
    errorDisplay.innerText = message;

    input.classList.add('border-error');
    input.classList.remove('order-success');

}

const setSuccess = element => {
    const input = element.parentNode;
    const errorDisplay = input.querySelector(".error");
    errorDisplay.innerText = "";

    input.classList.add('border-success');
    input.classList.remove('border-error');

}

function isValidEmail(email) {
    const reg = /^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,5})$/;
    return reg.test(email);
}

// const isStrongPassword = ((password) => {
//     let reg = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

//     return reg.test(password);

// })