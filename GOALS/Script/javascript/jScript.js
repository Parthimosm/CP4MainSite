function confirmTerms() {
    var subscribe = confirm("AGREE TO THE TERMS AND CONDITIONS?");
    if (subscribe == true) {
        alert("Thank you for signing up!");
    }
    else {
        alert("You're missing out!");
    }
}

function Login() {
    /* defines username*/
    var username = prompt("Please input your user name");
    /*defines password*/
    var pass = prompt("Please input your password");
    /*password and username arrays*/
    var userArray = ["Guy", "Guy1", "Guy2", "Guy3", "Guy4", "Guy5", "antonio", "Afeds"];
    var passArray = ["pass", "pass1", "pass2", "pass3", "pass4", "pass5", "gohabsgo", "PolishWonder"];
    
    /* For loop checks both arrays to see if username matches password, must have same amount of usernames and passwords in array*/
    for (var i = 0; i < userArray.length; i++) {
        if ((username === userArray[i]) && (pass === passArray[i])) {
            valid = true;
            break;
        }else{
            valid = false;
        }
    }
    
    /*changes html element if true*/
    if (valid === true) {
        document.getElementById("Username").innerHTML = "Welcome" + " " + userArray[i];
    }
    else {
        alert("Incorrect username or password");
    }
}



























