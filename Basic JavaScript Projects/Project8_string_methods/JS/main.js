function Sentance() {
    var P1 = "This is "
    var P2 = "how to "
    var P3 = "Concate things"
    var Whole_Sentence = P1.concat(P2, P3);
    document.getElementById("Anything").innerHTML = Whole_Sentence;
}

function slice_Method() {
    var Sentence = "This is how you slice sentances";
    var Section = Sentence.slice(16, 21);
    document.getElementById("slice").innerHTML = Section;
}

function Upper() {
    let text = "Hello World!";
    let result = text.toUpperCase();
    document.getElementById("UP").innerHTML = result;
}

function Search() {
    let text = "I dont know how many people are on this earth."
    let position = text.search("people");
    document.getElementById("S").innerHTML = position;
}

function String_Method() {
    var X = 400;
    document.getElementById("Num_to_String").innerHTML = X.toString();
}

function Precision_Method() {
    var Y = 1234.567890987654321;
    document.getElementById("precision").innerHTML = Y.toPrecision(5);
}

function fixed_Method() {
    var Z = 14.98765432;
    document.getElementById("Fixed").innerHTML = Z.toFixed(3);
}

function Val_of_Method() {
    let A = 100;
    let num = A.valueOf();
    document.getElementById("Value_of").innerHTML = num;
}