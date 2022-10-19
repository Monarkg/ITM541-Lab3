
document.addEventListener("click", TipCalculate);
function updateTextInput(val) {
    document.getElementById('idTipPercentage').value = val;
}

function TipCalculate() {
    console.log('Tip Calculator');
    let billAmount = Number(document.getElementById('idBillTotal').value);
    let idTipPercentage = Number(document.getElementById('idTipPercentage').value);
    if (billAmount < 0 || billAmount == '' || isNaN(billAmount)) {
        alert("Total Bill value must be a valid positive number");
        document.getElementById('idBillTotal').value = '';
        document.getElementById('idTipAmount').value = '';
        document.getElementById('idTotal').value = '';
    }
    else {
        let Tip = (idTipPercentage / 100) * billAmount;
        let Total = ((idTipPercentage / 100) * billAmount + billAmount)
        document.getElementById('idTipAmount').value = Tip.toFixed(2);
        document.getElementById('idTotal').value = Total.toFixed(2);
    }
}

