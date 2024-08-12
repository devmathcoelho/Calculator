const display = document.getElementById("display");

function addNumber(input){
    display.value += input;
}

function clearDisplay(){
    display.value = ''
}

function calculate(){
    try{
        display.value = eval(display.value)
    } catch(error){
        display.value = 'Error'
    } if (display.value == 'Infinity'){
        display.value = 'Error'
    } else if(display.value == 'NaN'){
        display.value = 'Error'
    }
}
