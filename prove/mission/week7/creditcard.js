const cardInput = document.getElementById("num");

const form = document.querySelector("main");


function isCardNumberValid(number) {
	// normally we would contact a credit card service...but we don't know how to do that yet. So to keep things simple we will only accept one number
	return number === '1234123412341234'
}

function submitHandler(event) {
	event.preventDefault();
    
    let errorMsg = '';


  
    const cardNum = cardInput.value.trim();


    
      if (!/^\d{16}$/.test(cardNum)) {
      errorMsg += 'Card number must be 16 digits\n';
      } else if (!isCardNumberValid(cardNum)) {
        errorMsg += 'Card number is not valid\n';
      }
    
    //check date
    const expYear = Number(document.querySelector('#year').value);   
    const expMonth = Number(document.querySelector('#month').value);
    const currentDate = new Date()

    if (2000 + expYear < currentDate.getFullYear() || (2000 + expYear === currentDate.getFullYear() && expMonth <= (currentDate.getMonth()))
    ) {
        errorMsg += 'Card is expired\n';
    }

    if (errorMsg) {
        alert(errorMsg);
    }

    else{
        alert('Card info looks good!');
    }
} 

    document.getElementById("submitButton").addEventListener("click", submitHandler);
