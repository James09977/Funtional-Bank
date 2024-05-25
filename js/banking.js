function getInputValue(inputId) {
  const inputField = document.getElementById(inputId);
  const inputAmountText = inputField.value;
  const amountValue = parseFloat(inputAmountText);
  inputField.value = "";
  return amountValue;
  // console.log(amountValue);
}
function updateTotalField(totalFieldID, amount) {
  const totalElement = document.getElementById(totalFieldID);
  const totalTex = totalElement.innerText;
  const previousTotal = parseFloat(totalTex);

  totalElement.innerText = previousTotal + amount;
}

function updateBalance(amount, isAdd) {
  const balanceTotal = document.getElementById("balance-total");
  const balanceTotalText = balanceTotal.innerText;
  const previousBalanceTotal = parseFloat(balanceTotalText);
  if (isAdd == true) {
    balanceTotal.innerText = previousBalanceTotal + amount;
  } else {
    balanceTotal.innerText = previousBalanceTotal - amount;
  }
}

//get and update deposite amount
document
  .getElementById("deposite-button")
  .addEventListener("click", function () {
    const depositAmont = getInputValue("depsite-input");
    updateTotalField("deposite-total", depositAmont);
    updateBalance(depositAmont, true);
  });

//get and update withdraw amount
document
  .getElementById("withdraw-button")
  .addEventListener("click", function () {
    const withdrawAmount = getInputValue("withdraw-input");
    updateTotalField("withdraw-total", withdrawAmount);
    updateBalance(withdrawAmount, false);
  });
