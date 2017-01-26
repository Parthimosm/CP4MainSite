function confirmTerms() {
		var subscribe = confirm("AGREE TO THE TERMS AND CONDITIONS?");
		if (subscribe == true) {
			alert("Thank you for signing up!");
		} else {
			alert("You're missing out!");
		}	
	}

var Welcome = document.getElementById("Username");
function UserName(){
	
var Text = document.getElementsByName("Usernname")[0].value;

document.getElementById("Username").innerHTML = "Welcome" + Text
}