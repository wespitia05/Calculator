const display = document.getElementById("display");

function appendToDisplay(input) {
    display.value += input;
}

function clearDisplay() {
    display.value = "";
}

function calculate() {
    try {
        display.value = eval(display.value);
    }
    catch(error) {
        display.value = "Error"
    }
}

function makeNegative() {
    if (display.value !== "") {
        if (display.value[0] === "-") {
            display.value = display.value.substring(1);
        } else {
            display.value = "-" + display.value;
        }
    }
}

function clearOne() {
    display.value = display.value.slice(0, -1);
}