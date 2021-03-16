var i=0;
var totalValue= 0;
function loaded(){
	//var stringdata = localStorage.getItem('key'+1);
	//var data = JSON.parse(stringdata);
	//var data = JSON.parse(empJson);	//turns string into JSON
	//console.log(data);
	//console.log(stringdata);
	//insertNewRecord(data);
	//i++;
	var keyAmount = localStorage.getItem('i');
	console.log('number of keys is: ', i);

	for(var i = 0; i < keyAmount; i++){

	var data = localStorage.getItem('key'+i);
	console.log('data items: ', JSON.parse(data));
	var info = JSON.parse(data);
	console.log('testing: ', info);
	insertNewRecord(info);
	
	totalValue = parseInt(totalValue) + parseInt(info.budget);
	console.log('total value is : ', totalValue);
	//console.log(info.budget);

	//var totalValue = (+totalValue) + (+info.budget);
	//console.log(totalValue);
	
	//resetData();



}

	console.log('total value is : ', totalValue);
	findTotal(totalValue);
}



function insertNewRecord(info){

	var table = document.getElementById("allBudgets")
	var body = table.getElementsByTagName("tbody")[0];
	var newRow = body.insertRow(body.length);

	var cell1 = newRow.insertCell(0);
	cell1.innerHTML = info.client;

	var cell2 = newRow.insertCell(1);
	cell2.innerHTML = info.project;

	var cell3 = newRow.insertCell(2);
	cell3.innerHTML = info.budget;
	
}

function findTotal(totalValue){
	var table = document.getElementById("total")
	var body = table.getElementsByTagName("thead")[0];
	var newRow = body.insertRow(body.length);

	var newcell = newRow.insertCell(0);
	newcell.innerHTML=eval(totalValue);
}


/*function resetData(){
	document.getElementById("client").value="";
	document.getElementById("project").value="";
	document.getElementById("budget").value="";
	alert("Thank you. Your budget has been submitted. Please review the addition on the Financial Team")
}*/