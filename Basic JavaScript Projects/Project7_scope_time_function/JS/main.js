Z = 307;

function Local_var(){
    Y = 3;
    document.write(Y);
}

//If the Y element is added the entire thing wont pull up
document.write("<br>" + Z + "<br> Here the Y element should be: "); // + Y);

function get_date() {
    if (new Date().getHours() > 17) {
        document.getElementById("Goodnight").innerHTML = "Everyone went home for the day please try agian tomorrow.";
    }
}

function age() {
    var age = 18
    if (age => 18) {
        document.getElementById("fish_purchase").innerHTML = "you can buy a fish!";
    }
}   

function Score_Function(){
    Score = document.getElementById("Score").value;
    if (Score >= 95) {
        Record = "NEW HIGH SCORE!!!";
    }
    else {
        Record = "Better luck next time!";
    }
    document.getElementById("High_Score").innerHTML = Record;
}

function Time_function() {
    var Time = new Date().getHours();
    var Reply;
    if (Time < 12 == Time > 0) {
        Reply = "It is morning time!";
    }
    else if (Time >= 12 == Time < 18) {
        Reply = "It is afternoon.";
    }
    else {
        Reply = "It is evening time.";
    }
    document.getElementById("Time_of_day").innerHTML = Reply; // replay shoud be Replay im teting to debug.
}