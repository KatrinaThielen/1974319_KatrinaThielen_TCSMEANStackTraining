var i = 0;

function onFormSubmit(){
	var data = readFormData();

	//var dataString = JSON.stringify(data);	//turns object into string
	//console.log(dataString);
	// var dataJson = JSON.parse(dataString);	//turns string into JSON
	localStorage.setItem('i',JSON.stringify(i));
	localStorage.setItem('key'+i, JSON.stringify(data));	//puts JSON into local storage as 'empJson'
	i++;

	//insertNewRecord(empJson);
	resetData();
}

function readFormData(){
	var obj = {} 	//empty object first
	obj.client = document.getElementById("client").value;
	obj.project = document.getElementById("project").value;
	obj.budget = document.getElementById("budget").value;

	console.log(obj);
	return obj;
}

/*

function insertNewRecord(empJson){
	var table = document.getElementById("allBudgets")
	var body = table.getElementsByTagName("tbody")[0];
	var newRow = body.insertRow(body.length);

	var cell1 = newRow.insertCell(0);
	cell1.innerHTML=empJson.client;

	var cell2 = newRow.insertCell(1);
	cell2.innerHTML=empJson.project;

	var cell3 = newRow.insertCell(2);
	cell3.innerHTML=empJson.budget;
}
*/
function resetData(){
	document.getElementById("client").value="";
	document.getElementById("project").value="";
	document.getElementById("budget").value="";
	alert("Thank you. Your budget has been submitted. Please review the addition on the Financial Team")
}
