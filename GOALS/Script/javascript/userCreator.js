myStorage = localStorage;


function profile(firstIn, lastIn, userIn, emailIn, passIn){
	this.firstName = firstIn;
	this.lastName = lastIn;
	this.username = userIn;
	this.email = emailIn;
	this.passWord = passIn;
};

function profcreate(){
	var in1 = document.getElementById("fn").value
	var in2 = document.getElementById("ln").value
	var in3 = document.getElementById("un").value
	var in4 = document.getElementById("email").value
	var in5 = document.getElementById("pass").value
	var profile1 = new profile(in1, in2, in3, in4, in5)
	console.log(profile1)
}
