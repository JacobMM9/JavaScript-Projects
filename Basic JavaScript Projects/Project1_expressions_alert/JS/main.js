document.write('Hello, World!'); //this writes hello world in the html doc

var A = " This is a string"; //creates a string

document.write(A); // displays var A

var SEPT = " september"; 

window.alert(SEPT);

document.write("<br>\"THIS\" is how you add quotation marks for mark\'s page"); //showing how to add "" in doc

document.write("<br>This is a concatination of this and the next line..." + 
" idk why you want to do this but here you go. " + "-\" jake\"<br>");   // showing off concatenation using + 

var B = "Concatenated" + " String";
document.write(B);

var food = "pizza", color = "orange", Name = "Jakey"; // showing you can make a bunch of variables together

document.write(Name);

document.write(4 + 4); //this is my expression

var Sent1 = ("This is the beginning of the string");

var Sent2 = ("and this is the end of the string");

document.write(Sent1 + Sent2);

function displayDate() {
    document.getElementById("demo").innerHTML = Date();
}