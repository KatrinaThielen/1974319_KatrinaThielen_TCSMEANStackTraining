let obj = require("readline-sync");
let fs = require("fs");
let emp = new Array();
var x = 0;

var intro = require('./exports');

//retrieve number of records/employees to store
var records = intro.Records();

//check to see if records = 0, if not, continue to add record
if (records == 0){
    console.log("No records have been stored in this file during this session.\n")
    } else {
    //retrieve exisiting emp array to push onto
        emp = intro.EmpInfo(emp);
    
        //store employee info for amount of records requested
        for(x; x < records; x++){
            debugger;
        //retrieving employee information
            var First = obj.question(x+". Enter First Name = ");
            var Last = obj.question(x+". Enter Last Name = ");
            var Gender = obj.question(x+". Gender (M, F or N/A) = ");
            var Email = obj.question(x+". Email Address = ");
            var date = Date();

        //formatting employee information
            var empx = {"First Name": First.toString(), "Last Name":Last.toString(), "Gender":Gender.toString(), "Email": Email.toString(), "Entry Created":date };

        //adding employee information to employee array
            emp.push(empx);
            debugger;
        }
    //turn employee array into string to store in jsonData
    let jsonData = JSON.stringify(emp);
    debugger;
    
    //write jsonData to employee.json
    fs.writeFileSync("employee.json", jsonData);
    debugger;
    
    //consolelog print out success
    if (records = 1){
        console.log("The employee has successfully been stored in the log.\n")
    } else {
        console.log("The employee records have successfully been stored in the log.\n")
    }
}



