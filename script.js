var buttons = document.querySelectorAll(".btn");
const inputFeild = document.getElementById("inputNumber");
var num1,num2;
var isOperatorClicked=false;
var oparator;
var result = "";
num1 = "";
num2="";
buttons.forEach(element => {
    element.addEventListener("click",(e)=>{
        console.log("clicked")
        console.log(element.innerHTML.trim())

        var literal = element.innerHTML.trim();

        
        if (!isNaN(literal)) {
            // if it is number then append the number to input and number itseft (num1 and num2)
            if(isOperatorClicked){
                num2 += literal;
                inputFeild.value = num2;
            }else{
                num1+= literal;
                inputFeild.value = num1;
            }
        }else if(literal === "X" || literal === "+" || literal === "-" || literal === "÷"){
            // it is opetator then reset input and set flag isOperatorClicked to true
            if(num1){
                inputFeild.value="";
                isOperatorClicked = true;
                oparator = literal;
            }
        }else if(literal === "="){
            // if clicked equeals then perform respective operation
            if(num1 && num2 && oparator){
                 result = calculateResult(parseFloat(num1),parseFloat(num2),oparator);
                inputFeild.value = result;
                num1=result;
                num2="";
                isOperatorClicked = false;
                oparator = ""
            }
        }else if (literal === "AC") {
            // if pressed AC then clear every thing
            inputFeild.value ="";
            num1="";
            num2="";
            isOperatorClicked = false;
            oparator = ""
            result = ""
        }else if (literal === "C") {
            if (result) {
            inputFeild.value ="";
            num1="";
            num2="";
            isOperatorClicked = false;
            oparator = ""
            result = ""
            }else{
            if(isOperatorClicked){
                num2 = num2.toString().slice(0,-1);
                inputFeild.value = num2;
            }else{
                num1 = num1.toString().slice(0,- 1);
                inputFeild.value = num1;
            }
        }
        }

     
    })
});


function calculateResult(n1,n2,op) {
    switch (op) {
        case "+":
            return n1+n2;
        case "-":
            return n1-n2;
        case "÷":
            return n1/n2;
        case "X":
            return n1*n2;
        default :
        return "Invalid expression"
    }
}

