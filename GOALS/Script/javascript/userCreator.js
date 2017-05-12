

 
function profile(firstIn, lastIn, userIn, emailIn, passIn){
	this.firstName = firstIn;
	this.lastName = lastIn;
	this.username = userIn;
	this.email = emailIn;
	this.passWord = passIn;
};


/*
 
function profile(){
	user = new Object(); 	
	
	
}*/
	var profNumber = [];
	
function profcreate(){
	
	
	var in1 = document.getElementById("fn").value
	var in2 = document.getElementById("ln").value
	var in3 = document.getElementById("un").value
	var in4 = document.getElementById("email").value
	var in5 = document.getElementById("pass").value
	
	var userProfile = new profile(in1, in2, in3, in4, in5)

	profNumber.push(userProfile);

	
	var arrayProf = JSON.stringify(profNumber);
	
	localStorage.setItem("User", arrayProf);
	console.log(JSON.parse(localStorage.getItem("User")));
	
}	


function userLogin(){
	var accounts = JSON.parse(localStorage.getItem("User"))
	
	for(i=0; accounts.length >= i; i++){
		var acc = accounts[i];
		if((document.getElementById("UserValue").value === acc.userIn) && 
		(document.getElementById("userPass").value === acc.passIN)){
			accepted = true;
			break;
		} else{
			accepted = false; 
		}
		
	}
	console.log(accepted);
	
}


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 