function gettingInputValue(id) {
    const inputElement = document.getElementById(id);
    const inputValue = parseFloat(inputElement.value);
    return inputValue;
}

function updateAmount(id, result) {
    document.getElementById(id).innerText = result.toFixed(2);
}

document.getElementById("calculate-btn").addEventListener("click", function() {

    //Call function gettingInputValue() 
    const foodInputValue = gettingInputValue("food-input");
    const rentInputValue = gettingInputValue("rent-input");
    const clothesInputValue = gettingInputValue("clothes-input");
    const incomeInputValue = gettingInputValue("total-income");

    //Check input value using error handler....
    const errorHandle = document.getElementById("notify-fail");
    if (isNaN(foodInputValue) || isNaN(rentInputValue) || isNaN(clothesInputValue) || isNaN(incomeInputValue)) {

        errorHandle.style.display = "block";
        errorHandle.innerText = "Your Income or expenses value is not valid";

    } else if (foodInputValue < 0 || rentInputValue < 0 || clothesInputValue < 0 || incomeInputValue < 0) {

        errorHandle.style.display = "block";
        errorHandle.innerText = "Your Income or expenses Value is Negative!";

    } else {

        //Calculate total Expenses and Balance
        const totalExpenses = foodInputValue + rentInputValue + clothesInputValue;
        const balance = incomeInputValue - totalExpenses;
        //Compare expenses with income
        if (totalExpenses > incomeInputValue) {
            errorHandle.style.display = "block";
            errorHandle.innerText = "Your Expenses amount so high!";
        } else {
            errorHandle.style.display = "none";
            //Call funtion updateAmount()
            updateAmount("total-expenses", totalExpenses);
            updateAmount("balance", balance);
        }
    }
});

//savings part here
document.getElementById("savings").addEventListener("click", function() {

    //Call function gettingInputValue()
    const incomeInput = gettingInputValue("total-income");
    const savingInput = gettingInputValue("savings-input");

    //check error savings and income input
    const errorHandle = document.getElementById("notify-fail");
    if (isNaN(savingInput) || isNaN(incomeInput)) {

        errorHandle.style.display = "block";
        errorHandle.innerText = "Your Saving or Income Input Value is invalid";

    } else if (savingInput < 0 || incomeInput < 0) {

        errorHandle.style.display = "block";
        errorHandle.innerText = "Your Saving or Income Input Value is Negative!";

    } else {

        //getting Balance text value
        const balanceInput = document.getElementById("balance");
        const balanceAmount = parseFloat(balanceInput.innerText);

        //Savings and remaining balance calculation here
        const savingValue = savingInput / 100;
        const savingAmount = incomeInput * savingValue;
        const remainingAmount = balanceAmount - savingAmount;
        //Compare savings amount with balance amount
        if (savingAmount > balanceAmount) {
            errorHandle.style.display = "block";
            errorHandle.innerText = "You have insuficient balance!";
        } else {
            errorHandle.style.display = "none";
            //Call function updateAmount()
            updateAmount("savings-amount", savingAmount);
            updateAmount("remaining-amount", remainingAmount);
        }
    }

});