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

    else if (operator === "*") {
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

buttonElement.forEach (buttonElement => {
    buttonElement.addEventListener("click", function(event) {
        const button = event.target;
        
        if (button.classList.contains("number")) {
         content.textContent += button.textContent; 
        }
        else if (button.classList.contains("operator")) {
         content.textContent += button.textContent; 
        }
     
     });
})


displayElement.appendChild(content);