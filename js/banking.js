//disbale deposit button:
document.getElementById('deposit-input').addEventListener('keyup', function (e) {
        if ((e.target.value).length > 0) {
                document.getElementById('deposit-btn').removeAttribute('disabled');
        }
        else {
                document.getElementById('deposit-btn').setAttribute('disabled', true);
        }

})
//disbale deposit button:
document.getElementById('deposit-input').addEventListener('change', function (e) {
        if ((e.target.value).length > 0) {
                document.getElementById('deposit-btn').removeAttribute('disabled');
        }
        else {
                document.getElementById('deposit-btn').setAttribute('disabled', true);
        }

})

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

        //Current Amount:
        currentDeposit.innerText = newDepositAmount;

        //clear deposit input field
        depositInput.value = '';

        //Store Amount update:
        const storeAmountText = document.getElementById('store-amount');
        const storeAmount = parseFloat(storeAmountText.innerText);

        //Equation
        storeAmountText.innerText = storeAmount + depositAmount;
        document.getElementById('deposit-btn').setAttribute('disabled', true);
})

//withdraw deposit button:
document.getElementById('withdraw-input').addEventListener('keyup', function (e) {
        if ((e.target.value).length > 0) {
                document.getElementById('withdraw-btn').removeAttribute('disabled');
        }
        else {
                document.getElementById('withdraw-btn').setAttribute('disabled', true);
        }

})
//withdraw deposit button:
document.getElementById('withdraw-input').addEventListener('change', function (e) {
        if ((e.target.value).length > 0) {
                document.getElementById('withdraw-btn').removeAttribute('disabled');
        }
        else {
                document.getElementById('withdraw-btn').setAttribute('disabled', true);
        }

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
        document.getElementById('withdraw-btn').setAttribute('disabled', true);
})

//Added Logout Button
document.getElementById('logout-btn').addEventListener('click', function () {
        window.location.href = 'index.html';
})