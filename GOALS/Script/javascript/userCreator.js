
userNumber = [] 
 
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


function profcreate(){
	id = 1
	var i = 0
	var profNumber = ["p1", "p2", "p3", "p4", "p5", "p6", "p7"]
	var in1 = document.getElementById("fn").value
	var in2 = document.getElementById("ln").value
	var in3 = document.getElementById("un").value
	var in4 = document.getElementById("email").value
	var in5 = document.getElementById("pass").value
	profNumber[i] = new profile(in1, in2, in3, in4, in5)
	Object.prototype.renameProperty = function (profile, user(id)) {
     // Do nothing if the names are the same
     if (oldName == newName) {
         return this;
     }
	userNumber.push(user(id))
	console.log(userNumber)
	id++
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
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 