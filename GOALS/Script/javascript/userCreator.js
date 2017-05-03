
 
function profile(firstIn, lastIn, userIn, emailIn, passIn){
	this.firstName = firstIn;
	this.lastName = lastIn;
	this.username = userIn;
	this.email = emailIn;
	this.passWord = passIn;
};

function profcreate(){
	var i = 0
	var profNumber = ["p1", "p2", "p3", "p4", "p5", "p6", "p7"]
	var in1 = document.getElementById("fn").value
	var in2 = document.getElementById("ln").value
	var in3 = document.getElementById("un").value
	var in4 = document.getElementById("email").value
	var in5 = document.getElementById("pass").value
	profNumber[i] = new profile(in1, in2, in3, in4, in5)
	console.log(profNumber[i])
	i++
}
