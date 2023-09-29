function addition_function(){
    var addition = 2 + 2;
    document.getElementById("Math").innerHTML = "2 + 2 = " + addition;
}

function subtraction_Function(){
    var Sub = 8 - 2;
    document.getElementById("Subtraction").innerHTML = "8 - 2 = " + Sub;
}

function multiplication_Function(){
    var MULTIPLY = 5 * 5;
    document.getElementById("X").innerHTML = "5 x 5 = " + MULTIPLY;
}

function devision_Function(){
    var DIV = 10 / 2;
    document.getElementById("divide").innerHTML = "10 / 2 = " + DIV;
}

function More_Math(){
    var simple_Math = (10 / 2) * 20 - 10;
    document.getElementById("Math_Cont").innerHTML = "(10 / 2) * 20 - 10 = " + simple_Math;
}

function modulus_Operator(){
    var Simple_modulus = 25 % 6;
    document.getElementById("modulus").innerHTML = "25 % 6 = 24 and will have a remainder of " + Simple_modulus; 
}

function negation_Operator(){
    var x = 10;
    document.getElementById("neg").innerHTML = -x;
}

var Y = 20;
Y++;
document.write(Y + " and ");

var Z = 8;
Z--;
document.write(Z);

window.alert(Math.random() * 20);

document.write("square root of 2: " + Math.SQRT2);