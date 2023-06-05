// samlar ihop alla element som har klassen 'btn'
let calcButtons = document.querySelectorAll('.btn');
// lägga på en eventlyssnare för alla knapparna i calcButtons
for (let i = 0; i < calcButtons.length; i++) {
    let currentButton = calcButtons[i];
    // lägg på en eventlyssnare på knappen vi är på i loopen
    currentButton.addEventListener("click", (e) => {
        addToDisplay(e.target.innerHTML);
    });
};

// funktion som skall lägga till värdet på knappen till displayen
function addToDisplay(value) {
    console.log(value);
    let val = value;
    if (val === "X") {
        val = '*';
    };
    let display = document.querySelector(".calculator-display");
    display.value = display.value + val;
};

// summera det som står i displayen när vi trycker på '='-knappen
let evalBtn = document.querySelector('#btn-eval');
evalBtn.addEventListener("click", () => {
    // få fram vad som står i displayen nu
    let calculation = document.querySelector(".calculator-display").value;
    // ta det vi har där och räkna ut via eval
    let result = eval(calculation);
    // lägg in resultatet i displayen istället
    document.querySelector(".calculator-display").value = result;
});