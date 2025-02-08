const display = document.getElementById("display");

function appendToDisplay(input) {
    if (input === "%") {
        if (display.value !== "" && !display.value.endsWith("%")) {
            display.value += "%";
        }
    } else {
        display.value += input;
    }
}

function clearDisplay() {
    display.value = "";
}

function calculate() {
    try {
        let expression = display.value;

        expression = expression.replace(/(\d+\.?\d*)%/g, "($1/100)");

        expression = expression.replace(/(\d+\.?\d*)\s*([\+\-\*\/])\s*(\(\d+\.?\d*\/100\))/g, (match, base, operator, percentValue) => {
            return `${base} ${operator} (${base} * ${percentValue})`;
        });

        display.value = eval(expression);
    } catch (error) {
        display.value = "Error";
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