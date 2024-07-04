const display = document.getElementById('display');

let iscalculated = false;

function appendToDisplay(content) {
    if (iscalculated === true) {
        clearDisplay();
        iscalculated = false;
    }
    display.value += content;
    
    const nums  = document.getElementsByClassName('num');

    for (let i = 0; i < nums.length; i++) {
        nums[i].id = nums[i].textContent.trim();
    }
}

function calculate () {
    if (display.value == '') {
        return;
    }
    const expression = display.value;
    const result = eval(expression);
    display.value = result;
    iscalculated = true;
}

function clearDisplay () {
    display.value = '';
}

function deleteLastChar () {
    const expression = display.value;
    const newexpression = expression.substring(0, expression.length - 1);
    display.value = newexpression;
}

document.addEventListener('keydown', (e) => {
    e.preventDefault();
    switch(e.key) {
        case '0': appendToDisplay('0');
        console.log('23');
        break;
        case '1': appendToDisplay('1'); 
        break;
        case '2': appendToDisplay('2'); 
        break;
        case '3': appendToDisplay('3'); 
        break;
        case '4': appendToDisplay('4'); 
        break;
        case '5': appendToDisplay('5');
        break;
        case '6': appendToDisplay('6'); 
        break;
        case '7': appendToDisplay('7'); 
        break;
        case '8': appendToDisplay('8'); 
        break;
        case '9': appendToDisplay('9'); 
        break;
        case 'Enter': calculate();
        break;
        case 'Backspace': deleteLastChar();
        break;
        case 'Delete': clearDisplay();
        break;
        case '+' : appendToDisplay('+');
        break;
        case '-' : appendToDisplay('-');
        break;
        case '*' : appendToDisplay('*');
        break;
        case '/' : appendToDisplay('/');
        break;
        default: return;
    }
    
});




