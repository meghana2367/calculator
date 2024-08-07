let firstNum = 0;
let secondNum = 0;
let operator = '';
let display = '';

document.querySelectorAll(".num").forEach(function (element) {
    element.addEventListener("click", function(e) {
        display = display + e.target.textContent;
        let screen = document.querySelector(".result-text");
        screen.textContent = display;
    });
});

function operate(operator, firstNum, secondNum) {
    if (operator === '+') {
        add(firstNum, secondNum);
    } else if (operator === '-') {
        subtract(firstNum, secondNum);
    } else if (operator === 'x') {
        multiply(firstNum, secondNum);
    } else if (operator === '÷') {
        divide(firstNum, secondNum);
    } else {
        console.log("ERROR!!!");
    }
}

function add(a, b) {
    return a + b;
}

function subtract(a, b) {
    return a - b;
}

function multiply(a, b) {
    return a * b;
}

function divide(a, b) {
    return a/b;
}