const display = document.getElementById("display");

function calculate(){
       if(Validate(display.value)){
        display.value = eval(display.value)
       } else {
        display.value = 'Error'
       }
}

function Validate(expression){
    try{
        const result = eval(expression)
        if(result){
            if(result == 'NaN' || result == 'Infinity'){
                return false
            } 
            return true
        } else {
            return false
        }
    } catch(error){
        return false
    }
}

function addNumber(input){
    if (display.value == 'Error'){
        display.value = ''
    } 
    display.value += input;
}

function clearDisplay(){
    display.value = ''
}
