function add(num1, num2) {
    return num1 + num2;
}

function subtract(num1, num2) {
    return num1 - num2;
}

function multiply(num1, num2) {
    return num1 * num2;
}

function divide(num1, num2) {
    return num1 / num2;
}

function operate(num1, operator, num2) {
    if (operator === "+") {
        return add(num1, num2);
    }

    else if (operator === "-") {
        return subtract(num1, num2);
    }

    else if (operator === "X") {
        return multiply(num1, num2);
    }

    else if (operator === "/") {
        return divide(num1, num2);
    }
}

const displayElement = document.querySelector(".display");
const buttonElement = document.querySelectorAll(".buttons");
const content = document.createElement("div"); 
content.classList.add("content");
content.textContent = "";
let num1 = null;
let num2 = null;
let operator = null;

buttonElement.forEach (button => {
    button.addEventListener("click", function(event) {
        const buttonText = event.target;
        if (buttonText.classList.contains("number")) {
            if (operator === null) {
                num1 = (num1 === null) ?  buttonText.textContent : num1 + buttonText.textContent;
            }   else {
                num2 = (num2 === null) ? buttonText.textContent : num2 + buttonText.textContent;
            }
            content.textContent += buttonText.textContent; 
        }
        else if (buttonText.classList.contains("operator")) {
            operator = buttonText.textContent;
            content.textContent += buttonText.textContent;
        }   
        else if (buttonText.classList.contains("equals")) {
            if (num1 !== null && num2 !== null && operator !== null) {
                const result = operate(parseFloat(num1), operator, parseFloat(num2));
                content.textContent = result;
                num1 = result;
                num2 = null;
                operator = null;
            }            
        }
        else if (buttonText.classList.contains("clear")) {
            num1 = null;
            operator = null;
            num2 = null;
            content.textContent = null;
        }
    });
});

displayElement.appendChild(content)