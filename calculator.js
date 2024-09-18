const display=document.getElementById("display")
function dispalyresult(input){
    display.value += input;
}
function vanish(){
    display.value = "";
}
function calculate(){
    try{
        display.value = eval(display.value)
    }catch(err){
display.value = "Error";
    }
    
}