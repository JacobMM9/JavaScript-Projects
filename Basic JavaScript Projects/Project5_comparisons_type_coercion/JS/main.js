document.write(typeof "forty");
document.write("40" + 21);

function my_Function1(){
    document.getElementById("Test1").innerHTML = 0/0;
}

function my_Function2(){
    document.getElementById("Test2").innerHTML = isNaN(7);
}

function my_Function3(){
    document.getElementById("Test3").innerHTML = isNaN("eleven");
}

document.write("<br>" + 2E330); //will display positive infinity
document.write("<br>" + -4E400); //Will display negative infinity

document.write("<br>" + (12 > 3)); // true
document.write("<br>" + (12 < 4) +"<br>"); // false
document.write(7 > 3); // true

console.log(5 + 2); // shows 7 in console through the webpage but not on the doc

console.log(100 < 4);// shows false in the console

document.write("<br>14 is equal to 10 + 4? " + (14 == 10+4));
document.write("<br> 7 is equal to 3? " + (7 == 3));

document.write("<br>");

document.write("purple" === "purple"); // 1a. matching data types
document.write("green" === 14); // 1b. return false different data type differnet value
document.write("14" === 14); // 1c. return falso using different data type but same value
document.write(14 === 12); // 1d return falso same data type but different value

document.write("<br><br>Below for using AND and OR operators.<br>");

document.write(10 > 9 && 30 < 43); // using AND (&&) to show true
document.write(10 > 4 && 1 > 3); // using AND (&&) to show false

document.write("red" == "red" || 10 > 2); // using OR, will show true
document.write(12 == 2 || 100 < 99); // using OR, will show false

document.write("<br> Using NOT operator: ")
document.write(!(12 > 6));

function not_Function(){
    document.getElementById("Not").innerHTML = !(30 < 2);
}

