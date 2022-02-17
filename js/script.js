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
        errorHandle.innerText = "Please Enter number";

    } else if (foodInputValue < 0 || rentInputValue < 0 || clothesInputValue < 0 || incomeInputValue < 0) {

        errorHandle.style.display = "block";
        errorHandle.innerText = "Your Input Value is Negative!";

    } else {
        errorHandle.style.display = "none";

        //Calculate total Expenses and Balance
        const totalExpenses = foodInputValue + rentInputValue + clothesInputValue;
        const balance = incomeInputValue - totalExpenses;

        //Call funtion updateAmount()
        updateAmount("total-expenses", totalExpenses);
        updateAmount("balance", balance);
    }
});

//savings part here
document.getElementById("savings").addEventListener("click", function() {
    const incomeInput = document.getElementById("total-income");
    const savingInput = document.getElementById("savings-input");
    const balanceInput = document.getElementById("balance");

    const balanceAmount = parseFloat(balanceInput.innerText);

    const incomeInputValue = parseFloat(incomeInput.value);
    const savingInputValue = parseFloat(savingInput.value);

    const savingValue = savingInputValue / 100;
    //console.log(savingValue.toFixed(2));
    const savingAmount = incomeInputValue * savingValue;
    // console.log(savingAmount.toFixed(2));
    document.getElementById("savings-amount").innerText = savingAmount.toFixed(2);

    //remaining part here
    const remainingAmount = balanceAmount - savingAmount;
    document.getElementById("remaining-amount").innerText = remainingAmount.toFixed(2);


});