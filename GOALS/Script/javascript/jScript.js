function confirmTerms() {
		var subscribe = confirm("AGREE TO THE TERMS AND CONDITIONS?");
		if (subscribe == true) {
			alert("Thank you for signing up!");
		} else {
			alert("You're missing out!");
		}	
	}



function Login(){
	/* defines username*/
	var username = "Parthimosm"
	/*defines password*/
	var pass = "pass"
	/*next two makes prompts and checks if inputed value is equal to correct value*/
	var userNma = prompt("Please input your user name") === username;
	var passw = prompt("Please input your password") === pass;
	
	/* checks if userNma and passw are true, if they are it changes the html element*/
	if(userNma){
		if(passw){
			console.log(username)
			document.getElementById("Username").innerHTML = "Welcome" + " " + username;
		}else{
			alert("wrong password");
		}
	}else{
		alert("wrong username");
	}
	
	
}

