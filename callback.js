

let calcButton = document.getElementById("calculate").addEventListener("click", calculate);

function addition(num1, num2, showAns){
    let sum = num1 + num2;
    showAns(sum);
}

function subtraction(num1, num2, showAns){
    let diff = num1 - num2;
    showAns(diff);
}

function multiplication(num1, num2, showAns){
    let prod = num1 * num2;
    showAns(prod);
}

function division(num1, num2, showAns){
    let quot = num1 / num2;
    showAns(quot);
}

function modulus(num1, num2, showAns){
    let modulus = num1 % num2;
    showAns(modulus);
}

function showAns(answer){
    console.log(answer);
    total.innerHTML = "Total: " + answer;
}

function calculate(){
    operation = document.getElementById("operation").value;
    num1 = Number(document.getElementById("num1").value);
    num2 = Number(document.getElementById("num2").value);
    console.log(operation);
    if (operation == "Addition"){
        addition(num1, num2, showAns);
    }
    else if (operation == "Subtraction"){
        subtraction(num1, num2, showAns);
    }
    else if (operation == "Multiplication"){
        multiplication(num1, num2, showAns);
    }
    else if (operation == "Division"){
        division(num1, num2, showAns);
    }
    else if (operation == "Modulus"){
        modulus(num1, num2, showAns);
    }
}