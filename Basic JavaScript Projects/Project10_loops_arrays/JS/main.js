
/*function Call_Loop() {
    var Digit = "";
    var X = 10;
    while (X > 0) {
        Digit += "<br>" + X;
        X--;
    }
    document.getElementById("Loop").innerHTML = Digit;
}*/

function Call_Loop() {
    var Digit = "";
    var HP = 100;
    var Attack = 5;
    
    while (HP > 0) {
        Digit += "<br>" + HP; //need this to display hp
        (HP -= Attack); // need the -= to replace HP++
    }
    document.getElementById("Loop").innerHTML = Digit;
}

function Length_Fun() {
    let text = "how are things today?";
    let Length = text.length; //text. is calling the var text
    document.getElementById("length").innerHTML = Length // calling Length var
}

var Instruments = ["Drums", "Bass", "Violin", "Piano", "Harp"];
var Content = "";
var Y;
function for_Loop() {
    for (Y = 0; Y < Instruments.length; Y++) {
        Content += Instruments[Y] + "<br>";
    }
    document.getElementById("List_of_Instruments").innerHTML = Content;
}

function array_Function() {
    var Starting_Class = [];
    Starting_Class[0] = "Fighter";
    Starting_Class[1] = "Defender";
    Starting_Class[2] = "Mage";
    Starting_Class[3] = "Healer";
    Starting_Class[4] = "Archer";
    document.getElementById("Array").innerHTML = "Your picked class is " +
    Starting_Class[4] + ".";
}

function constant_Function() {
    const Vehicles = {make:"Toyota", model:" Camry", color:"White"};
    Vehicles.price = "$2,000";
    document.getElementById("Constant").innerHTML = "The cost of the " + Vehicles.make + Vehicles.model + " was " + Vehicles.price;
}

var X = 47;
document.write("<br>" + X); // will show when called by X

{
    let X = 100;
    document.write("<br>" + X); // will show once but while called in {} but called outside will show previous X
}

function Return_Funct() {
    
    var name = "Dude";
    var greeting = "Hello "+ name;
    return document.getElementById("Rtrn").innerHTML = greeting;
}

//Had to put the script in the end to run code correctly for this plus the break and continute
let Weapon = {
    main_Class: "Sword ",
    Damage: "Physical ",
    Equiped: "1 Hand ",
    group: "Warrior ",
    description : function() {
        return "The weapon is a " + this.main_Class + "it deals " + this.Damage + "damage and is wield by the "
        + this.group + "class."
    }
};
document.getElementById("MMO_Class").innerHTML = Weapon.description();

let text = "";
for (let i = 0; i < 10; i++) {
    if (i === 3) {break; }
    text += "the number is " + i + "<br>";
}
document.getElementById("break").innerHTML = text;

let text2 = "";
for (let J = 0; J < 10; J++) {
    if (J === 3) { continue; }
    text2 += "the number is " + J + "<br>";
}
document.getElementById("continue").innerHTML = text2;