function myStyle(){
    document.getElementById("H1style").style.color = "green";
    document.getElementById("H2style").style.color = "red";
    myStyle = document.getElementById("demo");
    myStyle.style.color= "orange";
}

function sum(a, b) {
    console.log(a + b)
}

sum(1, 2)

function myFunction() {
    var sentence= "Im learning codeing";
    sentence += " to become a software dev";
    document.getElementById("Concatenate").innerHTML = sentence;
}
