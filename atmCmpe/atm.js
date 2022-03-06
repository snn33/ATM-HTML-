memoryNumber = 9000; //giving the constant number for the balance 
var currentNumb = 0; //giving the number 0 that user will clik
var result = 0; // First, giving the number 0 for the result

alert("Take action after clicking the show my balance button!"); //creating alert message for the user to click to the requested button

function blnc(){
    alert("Trade with your balance amount!");//creating alert message
    const blncce = document.createElement("span");//creating variable for the place that hold the balance number
    const za = document.createTextNode("9000"); //creating the context for za variable
    blncce.appendChild(za); //appending the za to the blncce

    const element = document.getElementById("resultNum"); //creating variable for place that will be writtin blnnce
    element.appendChild(blncce);//appending blncce to the element
}

function insert(num) { //creating function to check the num of buttons
document.querySelector("#numberSpan").innerText += num; //(Still string)selecting the span innertext one has "#numberSpan" id and adding to the number
currentNumb = parseInt(document.querySelector("#numberSpan").innerText);//converting to the Integer
console.log(currentNumb);//writing on the console
}

function operattion(op){ //creating operation process buttons
    memoryNumber = 9000; //Balance
    operation = op; //making equal operation and op
    currentNumb = 0; //the number that user will click
    document.querySelector("#numberSpan").innerText = ""; //span's value will be empty ("")

}
function okbtnfunc (){ //creating ok button for the end the process
if(operation == "+"){ //if the buttons operation is "+" (continue below line)
    result = memoryNumber + currentNumb; // con't, this will work and the result will be memoryNumber + currentNumb
}else if(operation == "-"){ //if the buttons operation is "-" (continue below line)
    result = memoryNumber - currentNumb; // con't, this will work and the result will be memoryNumber - currentNumb

}else if (operation == "/"){ //if the buttons operation is "/" (continue below line)
    result = (memoryNumber - ((10 * currentNumb)/100)) // con't, this will work and the result will be memoryNumber - ((10 * currentNumb)/100)

}

document.querySelector("#resultNum").innerText = result; //The span which has id "#resultNum" text's will be the result which means the last result
result = 0;//making result 0 at the end 
}

