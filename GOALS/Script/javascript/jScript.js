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
    var userArray = ["Guy", "Guy1", "Guy2", "Guy3", "Guy4", "Guy5"];
    var passArray = ["pass", "pass1", "pass2", "pass3", "pass4", "pass5"];
    
    for (var i = 0; i < userArray.length; i++) {
        if ((username === userArray[i]) && (pass === passArray[i])) {
            valid = true;
            break;
        }else{
            valid = false;
        }
    }
    
    if (valid === true) {
        document.getElementById("Username").innerHTML = "Welcome" + " " + userArray[i];
    }
    else {
        alert("Incorrect username or password");
    }
}