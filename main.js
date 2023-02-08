
//

const date = new Date();
month=date.getMonth();

if(month>=0 && 3>=month){
	document.write("this month is spring");
}
else if(month>=4 && 7>=month){
	document.write("this month is summar");
}
else{
	document.write("this month is winter");
}
 