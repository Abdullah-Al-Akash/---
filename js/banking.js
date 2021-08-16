//disbale deposit button:
document.getElementById('deposit-input').addEventListener('keyup', function (e) {
        if ((e.target.value) > 0) {
                document.getElementById('deposit-btn').removeAttribute('disabled');
        }
        else {
                document.getElementById('deposit-btn').setAttribute('disabled', true);
        }

})
//disbale deposit button:
document.getElementById('deposit-input').addEventListener('change', function (e) {
        if ((e.target.value) > 0) {
                document.getElementById('deposit-btn').removeAttribute('disabled');
        }
        else {
                document.getElementById('deposit-btn').setAttribute('disabled', true);
        }

})
/* 
        Validation Complete
*/

/* -----------------------------------
        DRY Method: Common Function
-------------------------------------*/
function getInputValue(inputId) {
        //get Deposit input amount
        const inputField = document.getElementById(inputId);
        const totalAmount = parseFloat(inputField.value);

        //clear deposit input field
        inputField.value = '';
        return totalAmount;
}

function currentAmountUpdate(currentAmountId, depositAmount) {
        const currentAmount = document.getElementById(currentAmountId);
        const currentAmountNumber = parseFloat(currentAmount.innerText);

        //Validations:
        const updateAmount = depositAmount + currentAmountNumber;
        currentAmount.innerText = updateAmount;
        return updateAmount;
}

function previousAmount() {
        const storeAmountText = document.getElementById('store-amount');
        const storeAmount = parseFloat(storeAmountText.innerText);
        return storeAmount;
}

function updateAmount(amount, isAdd) {
        const storeAmountText = document.getElementById('store-amount');
        //Equation
        const storeAmount = previousAmount();
        if (isAdd == true) {
                storeAmountText.innerText = storeAmount + amount;
        }
        else {
                storeAmountText.innerText = storeAmount - amount;
        }
}
/* 
        Common Function End
*/

//deposit cash
document.getElementById('deposit-btn').addEventListener('click', function () {
        //Common Function
        const depositAmount = getInputValue('deposit-input');

        //Common Function
        if (depositAmount > 0) {
                currentAmountUpdate('total-deposit', depositAmount);
                updateAmount(depositAmount, true);
        }

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
/* 
        Validation Complete
*/

//Withdraw Cash:
document.getElementById('withdraw-btn').addEventListener('click', function () {
        //Common Function
        const currentWithdrawAmount = getInputValue('withdraw-input');

        //Common Function
        const currentBalance = previousAmount();
        if (currentWithdrawAmount > 0 && currentWithdrawAmount < currentBalance) {
                currentAmountUpdate('withdraw-total', currentWithdrawAmount);
                //Equation
                updateAmount(currentWithdrawAmount, false);
        }
        document.getElementById('withdraw-btn').setAttribute('disabled', true);
})

//Added Logout Button
document.getElementById('logout-btn').addEventListener('click', function () {
        window.location.href = 'index.html';
})