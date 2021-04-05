let obj = require("readline-sync");
let fs = require("fs");

exports.Records = function recordCount(){
    //Requesting user to input number of records to store
    var num = obj.question("How many records would you like to store? : ");
    console.log("You are currently in the process of storing "+num+" records");
    return num;
    }

exports.EmpInfo = function EmpInfo(employeeArray){
    //Retrieving previous employee.json Infomation to push onto array.
    if ("employeeDemo.json"){
        var data = fs.readFileSync("employee.json");
    
        var dataJson = JSON.parse(data);

        employeeArray.push(dataJson);
        console.log("this is when we push dataJSON into the emp array!! ", employeeArray);
        return employeeArray;
    } 
}
