const form = document.querySelector('#form');


const name = document.querySelector('#name');

const email = document.querySelector('#email');

const number = document.querySelector('#phone-number');

const message = document.querySelector('#message');


const submit = document.querySelector('#submit');

/* I need a function to verify the number, email,  */



function isEmailValid(email){
    
    const pattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    
    return pattern.test(email);
}

function isNumberValid(number){
    
    const phone_pattern = /^[0-9]{10,15}$/;
    return phone_pattern.test(number);
    
}

function displayError(msg){

    alert(msg);
}
function submitHandler(event) {
    event.preventDefault();
  let errorMsg = '';
    

    if (!isEmailValid(email.value)){

        errorMsg += 'Email is not valid\n';


    }

    if (!isNumberValid(number.value)){

        errorMsg += 'The Phone number is not valid\n';
    }


    if (errorMsg !== ''){

        displayError(errorMsg)
        return;
    }


    form.innerHTML = `<h2 id= 'thankMsg'> Thank your for your message!</h2>`



}

/* this is going to be my submition event listener*/
document.querySelector('#form').addEventListener('submit', submitHandler)


