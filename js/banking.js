// function doubleIT(num) {
//   const result = num * 2;
//   return result;
// }
// const first = doubleIT(5);
// const second = doubleIT(7);

function getInputValue() {
  const depositeInput = document.getElementById("depsite-input");
  const depositeAmountText = depositeInput.value;
  const depositeAmount = parseFloat(depositeAmountText);

  //clear input feild
  depositeInput.value = "";
  return depositeAmount;
}

document
  .getElementById("deposite-button")
  .addEventListener("click", function () {
    const depositeAmount = getInputValue();

    //get current deposite
    const depositeTotal = document.getElementById("deposite-total");
    const depositeTotalText = depositeTotal.innerText;
    const previousDepositeTotal = parseFloat(depositeTotalText);

    depositeTotal.innerText = depositeAmount + previousDepositeTotal;

    //update balance
    const balanceTotal = document.getElementById("balance-total");
    const balanceTotalText = balanceTotal.innerText;
    const previousBalance = parseFloat(balanceTotalText);

    balanceTotal.innerText = previousBalance + depositeAmount;
  });

//handle withdraw

document
  .getElementById("withdraw-button")
  .addEventListener("click", function () {
    const withdrawInput = document.getElementById("withdraw-input");
    const withdrawAmountText = withdrawInput.value;
    const withdrawAmount = parseFloat(withdrawAmountText);

    //update withdraw
    const withdrawTotal = document.getElementById("withdraw-total");
    const withdrawTotalText = withdrawTotal.innerText;
    const withdrawTotalAmount = parseFloat(withdrawTotalText);
    withdrawTotal.innerText = withdrawTotalAmount + withdrawAmount;

    //update balance
    const balanceTotal = document.getElementById("balance-total");
    const balanceTotalText = balanceTotal.innerText;
    const previousBalance = parseFloat(balanceTotalText);
    balanceTotal.innerText = previousBalance - withdrawAmount;
    //clear withdraw
    withdrawInput.value = "";
  });
