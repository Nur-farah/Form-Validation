

const username = document.querySelector("#username");
const email = document.querySelector("#email");
const password = document.querySelector("#password");
const confirmPassword = document.querySelector("#confirmPassword");
const form = document.querySelector("#form");

const showError = (input,message) =>{
    let parentElement = input.parentElement;
    parentElement.classList = 'form-control error';
    const small = parentElement.querySelector("small");
    const successIcon = parentElement.querySelectorAll("svg")[0];
    const errorIcon = parentElement.querySelectorAll("svg")[1];
    
    errorIcon.style.visibility = 'visible';
    successIcon.style.visibility = 'hidden';
    small.innerText = message;
}
const showSuccess = (input,message) =>{
    let parentElement = input.parentElement;
    parentElement.classList = 'form-control success';
    const small = parentElement.querySelector("small");
    const successIcon = parentElement.querySelectorAll("svg")[0];
    const errorIcon = parentElement.querySelectorAll("svg")[1];
    
    errorIcon.style.visibility = 'hidden';
    successIcon.style.visibility = 'visible';
}
const checkEmpty = (elements) => {
    elements.forEach( (element) => {
        if(element.value === ''){
            showError(element, 'input is required');
        }else{
            showSuccess(element);
        }
    });
}

const checkEmail = (email) =>{
    const reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

    if(reg.test(email.value)){
        showSuccess(email);
    }else{
        showError(email, 'Invalid Email');
    }
}

form.addEventListener("submit", (event) => {
    event.preventDefault();

    checkEmpty([username,email,password,confirmPassword]);
    checkEmail(email);
    checkPasswordLength(password,8,20);
}); 
// form.addEventListener("submit", (event)=>{
//     //prevents auto control of consol
//     event.preventDefault();
    
//     if(username.value === ""){
//         username.parentElement.classList = "form-control error" 
//     }
//     if(email.value === ""){
//         email.parentElement.classList = "form-control error" 
//     }
//     if(password.value === ""){
//         password.parentElement.classList = "form-control error" 
//     }
//     if(confirmPassword.value === ""){
//         confirmPassword.parentElement.classList = "form-control error" 
//     }
    
// })



