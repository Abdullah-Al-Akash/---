//deposit cash
document.getElementById('deposit-btn').addEventListener('click', function () {

        //get Deposit input amount
        const depositInput = document.getElementById('deposit-input');
        const depositAmount = parseFloat(depositInput.value);

        //Added Amount in Total Deposit
        const currentDeposit = document.getElementById('total-deposit');
        const currentDepositAmount = parseFloat(currentDeposit.innerText);

        //Validations:


        const newDepositAmount = depositAmount + currentDepositAmount;
        console.log(typeof newDepositAmount)

        //Current Amount:
        currentDeposit.innerText = newDepositAmount;

        //clear deposit input field
        depositInput.value = '';

        //Store Amount update:
        const storeAmountText = document.getElementById('store-amount');
        const storeAmount = parseFloat(storeAmountText.innerText);

        //Equation
        storeAmountText.innerText = storeAmount + depositAmount;
})

//Withdraw Cash:
document.getElementById('withdraw-btn').addEventListener('click', function () {
        const currentWithdrawText = document.getElementById('withdraw-input')
        const currentWithdrawAmount = parseFloat(currentWithdrawText.value);

        const totalWithdrawText = document.getElementById('withdraw-total');
        const totalWithdrawAmount = parseFloat(totalWithdrawText.innerText);

        //Update Withdraw Amount:
        totalWithdrawText.innerText = currentWithdrawAmount + totalWithdrawAmount;

        //Clear Input Field:
        currentWithdrawText.value = '';

        //Store Amount update:
        const storeAmountText = document.getElementById('store-amount');
        const storeAmount = parseFloat(storeAmountText.innerText);

        //Equation
        storeAmountText.innerText = storeAmount - currentWithdrawAmount;
})