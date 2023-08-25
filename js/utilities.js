// get the input value function
function getInputValueById(inputId){
    const inputField = document.getElementById(inputId);
    const inputFieldString = inputField.value;
    const inputFieldValue = parseFloat(inputFieldString);
    inputField.value = '';
    return inputFieldValue;
}

// get the amount function
function getTextAmountById(amountId){
    const getTotalAmount = document.getElementById(amountId);
    const totalAmountString = getTotalAmount.innerText;
    const totalAmount = parseFloat(totalAmountString);
    return totalAmount;
}

// set the amount function
function setAmountById(totalAmountId, totalValue){
    const getAmount = document.getElementById(totalAmountId);
    getAmount.innerText = totalValue;
}