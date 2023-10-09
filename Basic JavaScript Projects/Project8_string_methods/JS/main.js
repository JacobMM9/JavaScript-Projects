function Sentance() {
    var P1 = "This is "
    var P2 = "how to "
    var P3 = "Concate things"
    var Whole_Sentence = P1.concat(P2, P3);
    document.getElementById("Anything").innerHTML = Whole_Sentence;
}// combines the p1 to the p2 and p2 var

function slice_Method() {
    var Sentence = "This is how you slice sentances";
    var Section = Sentence.slice(16, 21);
    document.getElementById("slice").innerHTML = Section;
}// cuts out the string 16 to 21 which would display slice

function Upper() {
    let text = "Hello World!";
    let result = text.toUpperCase();
    document.getElementById("UP").innerHTML = result;
}// converts hello world uppercase into HELLO WORLD

function Search() {
    let text = "I dont know how many people are on this earth."
    let position = text.search("people");
    document.getElementById("S").innerHTML = position;
}// will look for people and tell the location of it here people is position 21

function String_Method() {
    var X = 400;
    document.getElementById("Num_to_String").innerHTML = X.toString();
} //converts the number into a string

function Precision_Method() {
    var Y = 1234.567890987654321;
    document.getElementById("precision").innerHTML = Y.toPrecision(5);
} // well display the number only up to the 5th degit, 1234.6 (it rounds)

function fixed_Method() {
    var Z = 14.98765432;
    document.getElementById("Fixed").innerHTML = Z.toFixed(3);
} // similar to precision, displays 14.988

function Val_of_Method() {
    let A = 100;
    let num = A.valueOf();
    document.getElementById("Value_of").innerHTML = num;
}// displays the primitive value of 100 so 100.