function Ride_Function(){
    var Height, Can_ride;
    Height = document.getElementById("Height").value;
    Can_ride = (Height < 52) ? "You are too short":"You are tall enough";
    document.getElementById("Ride").innerHTML = Can_ride + " to ride.";
}


function Age_Function(){
    var Age, Can_Vote;
    Age = document.getElementById("Age").value;
    Can_Vote = (Age < 18) ? "You are too young":"You are old enough";
    document.getElementById("Eligibility").innerHTML = Can_Vote + " to vote.";
}

//this for for constructors and keywords
function Vehicle(Make, Model, Year, Color) {
    this.Vehicle_Make = Make;
    this.Vehicle_Model = Model;
    this.Vehicle_Year = Year;
    this.Vehicle_Color = Color;
} // this is making it the object and new will make a new version of it.

var Jack = new Vehicle("Dodge", "Viper", 2020, "Red");
var Emily = new Vehicle("Jeep", "Trail Hawk", 2019, "White and Black")
var Erik = new Vehicle("Ford", "Pinto", 1971, "Mustard");
function myFunction() {
    document.getElementById("Keywords_and_Constructors").innerHTML = 
    "Erik drives a " + Erik.Vehicle_Color + "-colored " + Erik.Vehicle_Model + 
    " manufactured in " + Erik.Vehicle_Year;
}

//CON KEY Continued
function student(Age, Gender, Class, Height) {
    this.student_Age = Age;
    this.student_Gender = Gender;
    this.student_Class = Class;
    this.student_Height = Height;
}

var Jake = new student(25, "M", "Swimming 10", "5ft 10in");
var Emily = new student(15, "F", "Swimming 2", "4ft 2in");
var Lainee = new student(23, "F", "Swimming 6", "5ft 6in");
   function Swim_Class(){
    document.getElementById("New_and_This").innerHTML = "Jake is " + Jake.student_Age + 
    " Years old, and is in " + Jake.student_Class + " class.";
   }

   //Reserved words test

   // var false = not_true;
   // document.write(false); // caused nothing to work

    var not_true = false;
    document.write(not_true); //this will work

    //Another OBJECT CONSTRUCTOR FUNCTION
    function Weapon(Type, Range, Material, how_Held){
        this.Weapon_Type = Type;
        this.Weapon_Range = Range;
        this.Weapon_Material = Material;
        this.Weapon_how_Held = how_Held;
    }
    // not linked and will not show up.

    //NESTED FUNCTION
    function doubleing_Function() {
        document.getElementById("Nested_Function").innerHTML = Double();
        function Double() {
            var start_Num = 10
            function Double_Num() {start_Num *= 2}
            Double_Num();
            return start_Num;
        }
    }