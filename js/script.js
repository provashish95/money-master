document.getElementById("calculate-btn").addEventListener("click", function() {
    const foodInput = document.getElementById("food-input");
    const rentInput = document.getElementById("rent-input");
    const clothesInput = document.getElementById("clothes-input");
    const incomeInput = document.getElementById("total-income");


    const foodInputValue = parseFloat(foodInput.value);
    const rentInputValue = parseFloat(rentInput.value);
    const clothesInputValue = parseFloat(clothesInput.value);
    const incomeInputValue = parseFloat(incomeInput.value);



    const totalExpenses = foodInputValue + rentInputValue + clothesInputValue;
    const balance = incomeInputValue - totalExpenses;

    document.getElementById("total-expenses").innerText = totalExpenses.toFixed(2);
    document.getElementById("balance").innerText = balance.toFixed(2);
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