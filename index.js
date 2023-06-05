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