
document.getElementById('btn-deposit').addEventListener('click', function(){
    const newDepositAmount = getInputValueById('deposit-field');
    const previousDepositAmount = getTextAmountById('total-deposit');
    const totalDeposit = previousDepositAmount + newDepositAmount;
    // set amount in total deposit 
    setAmountById('total-deposit', totalDeposit);

    const previousTotalBalance = getTextAmountById('total-balance');
    const newTotalBalance = previousTotalBalance + newDepositAmount;
    // set amount in total balance
    setAmountById('total-balance', newTotalBalance);

})