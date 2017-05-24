
function profile(firstIn, lastIn, userIn, emailIn, passIn){
	/*Object keys*/
	this.firstName = firstIn;
	this.lastName = lastIn;
	this.username = userIn;
	this.email = emailIn;
	this.passWord = passIn;
};

	/*objects will go in this array*/
	var profNumber = [];
	
function profcreate(){
	/*makes objects, saves to localstorage*/
	/*set's variables to form inputs*/
	var in1 = document.getElementById("fn").value
	var in2 = document.getElementById("ln").value
	var in3 = document.getElementById("un").value
	var in4 = document.getElementById("email").value
	var in5 = document.getElementById("pass").value
	/*makes object*/
	var userProfile = new profile(in1, in2, in3, in4, in5)
	/*push object to array*/
	profNumber.push(userProfile);

	/*save to localstorage { */
	var arrayProf = JSON.stringify(profNumber);
	localStorage.setItem("User", arrayProf);
	console.log(JSON.parse(localStorage.getItem("User")));
	/* } */
	
	/*Reset form values to null*/
	document.getElementById("fn").value = null
	document.getElementById("ln").value = null
	document.getElementById("un").value = null
	document.getElementById("email").value = null
	document.getElementById("pass").value = null
	
	alert("Thank you for signing up, please login.")
}	

/*function makes login*/
function userLogin(){
	/*gets localstorage contents*/
	var accounts = JSON.parse(localStorage.getItem("User"))
	console.log(accounts)
	
	/*checks to see if input equals one of the accounts*/
	for(i=0; accounts.length >= i; i++){
		var acc = accounts[i];
		if((document.getElementById("UserValue").value === acc.username) && 
		(document.getElementById("userPass").value === acc.passWord)){
			/*is match is found, sets accepted variable to true*/
			accepted = true;
			break;
		} else{
			accepted = false; 
			alert("Wrong username or password")
			break;
			/*sets form value to null*/
			document.getElementById("UserValue").value = null
			document.getElementById("userPass").value = null
		}
	}
	
	if(accepted){
		/*brings user to main page*/
		alert("welcome" + " " + acc.username)
		location.href = 'index.html';
	}
}




 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 