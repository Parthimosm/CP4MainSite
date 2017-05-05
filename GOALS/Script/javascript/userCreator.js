

 
function profile(firstIn, lastIn, userIn, emailIn, passIn){
	this.firstName = firstIn;
	this.lastName = lastIn;
	this.username = userIn;
	this.email = emailIn;
	this.passWord = passIn;
};

id = 1
/*
 
function profile(){
	user = new Object(); 	
	
	
}*/
var profNumber = []
function profcreate(){
	
	console.log(profNumber);
	var in1 = document.getElementById("fn").value
	var in2 = document.getElementById("ln").value
	var in3 = document.getElementById("un").value
	var in4 = document.getElementById("email").value
	var in5 = document.getElementById("pass").value
	var userProfile = new profile(in1, in2, in3, in4, in5)
	profNumber.push(userProfile)
	var arrayProf = JSON.stringify(profNumber);
	localStorage.setItem("Profile", arrayProf);
	console.log(JSON.parse(localStorage.getItem("Profile")));
}	






 /*function profcreate(){
	user(id).firstName = document.getElementById("fn").value
	user(id).lastName = document.getElementById("ln").value
	user(id).usrname = document.getElementById("un").value
	user(id).email = document.getElementById("email").value
	user(id).passWord = document.getElementById("pass").value
	console.log(user)
	id += 1; 
 }*/
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 