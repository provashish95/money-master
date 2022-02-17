//Getting input value dynamically..
function gettingInputValue(id) {
    const inputElement = document.getElementById(id);
    const inputValue = parseFloat(inputElement.value);
    return inputValue;
}

//Insert inner text in HTML dynamically..
function updateAmount(id, result) {
    document.getElementById(id).innerText = result.toFixed(2);
}

//Error message showing function one..
function gettingErrorTextOne(isTrue) {
    const errorHandle = document.getElementById("notify-fail");
    if (isTrue == true) {
        errorHandle.style.display = "block";
        errorHandle.innerText = "Your Input value is not valid";
    } else {
        errorHandle.style.display = "block";
        errorHandle.innerText = "Your Expenses amount so high!";
    }
}

//Error message showing and hide function two..
function gettingErrorTextTwo(isTrue) {
    const errorHandle = document.getElementById("notify-fail");
    if (isTrue == true) {
        errorHandle.style.display = "none";
    } else {
        errorHandle.style.display = "block";
        errorHandle.innerText = "You have insufficien balance!";
    }
}


//Income and expenses part start here...
document.getElementById("calculate-btn").addEventListener("click", function() {
    //Call function gettingInputValue()..
    const foodInputValue = gettingInputValue("food-input");
    const rentInputValue = gettingInputValue("rent-input");
    const clothesInputValue = gettingInputValue("clothes-input");
    const incomeInputValue = gettingInputValue("total-income");
    //Check input value of income and expenses inputs..
    if (isNaN(foodInputValue) || isNaN(rentInputValue) || isNaN(clothesInputValue) || isNaN(incomeInputValue)) {

        gettingErrorTextOne(true);

    } else if (foodInputValue < 0 || rentInputValue < 0 || clothesInputValue < 0 || incomeInputValue < 0) {

        gettingErrorTextOne(true);

    } else {
        //Calculate total Expenses and Balance..
        const totalExpenses = foodInputValue + rentInputValue + clothesInputValue;
        const balance = incomeInputValue - totalExpenses;
        //Compare expenses with income..
        if (totalExpenses > incomeInputValue) {

            gettingErrorTextOne(false);

        } else {
            gettingErrorTextTwo(true);
            //Call funtion updateAmount()..
            updateAmount("total-expenses", totalExpenses);
            updateAmount("balance", balance);
        }
    }
});

//savings and remaining part start  here............
document.getElementById("savings").addEventListener("click", function() {
    //Call function gettingInputValue()..
    const incomeInput = gettingInputValue("total-income");
    const savingInput = gettingInputValue("savings-input");
    //check input value of savings and income..
    if (isNaN(savingInput) || isNaN(incomeInput)) {

        gettingErrorTextOne(true);

    } else if (savingInput < 0 || incomeInput < 0) {

        gettingErrorTextOne(true);

    } else {
        //getting Balance text value..
        const balanceInput = document.getElementById("balance");
        const balanceAmount = parseFloat(balanceInput.innerText);
        //Savings and remaining balance calculation here..
        const savingValue = savingInput / 100;
        const savingAmount = incomeInput * savingValue;
        const remainingAmount = balanceAmount - savingAmount;
        //Compare savings amount with balance amount..
        if (savingAmount > balanceAmount) {

            gettingErrorTextTwo(false);

        } else {
            gettingErrorTextTwo(true);
            //Call function updateAmount()..
            updateAmount("savings-amount", savingAmount);
            updateAmount("remaining-amount", remainingAmount);
        }
    }
});