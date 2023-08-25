document.getElementById('btn-withdraw').addEventListener('click', function(){
    const newWithdrawAmount = getInputValueById('withdraw-field');
    const previousWithdrawAmount = getTextAmountById('total-withdraw');
    const totalWithdraw = newWithdrawAmount + previousWithdrawAmount;

    // set the amount in total withdraw
    setAmountById('total-withdraw', totalWithdraw);

    // set the amount in total balance
    const previousTotalBalance = getTextAmountById('total-balance');
    const newTotalBalance = previousTotalBalance - newWithdrawAmount;
    setAmountById('total-balance', newTotalBalance);

})