const display=document.querySelector("input");

function appendtoDisplay(input){
    display.value+=input;
}

function calculate(){
    display.value=eval(display.value);
}

function clearDisplay(){
    display.value=" ";
}