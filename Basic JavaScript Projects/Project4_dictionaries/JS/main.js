function my_Dictionary(){
    var Sports = {
        Sport:"Soccer",
        Ball:"Soccer Ball", // first ball does not show
        PlayerCount:"11",
        time:"90 mins", // is what is being deleted
        Ball:"Not Soccor Ball" // seccond ball which will show
    };
    delete Sports.time; // deletes the value for time.
    document.getElementById("Dictionary").innerHTML = Sports.Ball; //This calls the Balls value but because i have 2 pulls seccond
    document.getElementById("Dictionary2").innerHTML = Sports.time; //This calls the value that has been deleted so will show undifined
}