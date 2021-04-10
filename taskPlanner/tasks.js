let http = require("http");
let url = require("url");
let fs = require("fs")
let port=8000;

let main = `
<style>
table, th, td {
	border: 1px black solid;
}
table {
	border-collapse: collapse;
}

th {
    width: 300px;
    height: 50px;
}

h3 {
    font-weight: bold; 
    margin-bottom: 0px; 
    margin-top: 15px; 
    text-align: center
}
.container {
    width: 300px;
    clear: both;
    margin: auto;
  }

</style>

    <h1>Welcome to the Task Planner</h1><hr><br/>
    
    <div class="container">
    <h3>Add Task</h3>
    <form action="/addTask" method="get">

        <label>Employee ID</label>
        <input type="text" name="id"/><br/>

        <label>Task ID</label>
        <input type="text" name="taskId"/><br/>

        <label>Task Title</label>
        <input type="text" name="task"/><br/>

        <label>Deadline</label>
        <input type="date" name="deadline"/><br/>
        
        <br/>
        <input type="submit" value="Add Task"/>
        <input type="reset" value="Reset Values"/>
        </div>
    </form>
   
    <hr><br/>

    <div class="container">
    <h3>Delete Task</h3>
    <form action="/deleteTask" method="get">

        <label>Task Id</label>
        <input type="text" name="taskId"/><br/>
  
        <br/>
        <input type="submit" value="Delete Task"/>
        <input type="reset" value="reset"/>
        </div>
    </form>
    <hr><br/>

    <div class="container">
    <h3>List Tasks</h3><br/>
    <form action="/view" method="get">

        <input type="submit" value="View Current Tasks"/>
    </form>`
function readTasks(){
    let taskList = new Array();
    taskList = [];
    let prevTask = fs.readFileSync("tasks.json");
    let prevString = prevTask.toString();
    let prevJSON = JSON.parse(prevString);
    
    for (var x in prevJSON){
        taskList.push(prevJSON[x]);
    }
    return taskList;
}

function formatJSON(id, taskId, task, deadline) {
    return {"EmployeeID":id, "taskID":taskId,
    "task":task, "deadline":deadline};
}

let server = http.createServer( (req,res) => {
    console.log("Requesting... ", req.url);
    res.setHeader("content-type","text/html");
    res.write(main);

    if ( req.url != "/favicon.ico" ) {
        var activePath = url.parse(req.url, true).pathname;

        if ( activePath == "/addTask" ) {
            console.log("Attempting to add task... ")
            let taskInfo = url.parse(req.url, true).query;
            
            let taskList = readTasks();     // Retrieve prior tasks from tasks.json to store into taskList
            let unique = true;              // Indication whether requested task ID addition is unique or not

            for ( var x in taskList ) {
                if ( taskList[x].taskID == taskInfo.taskId ) {
                    console.log("Repetitive Task ID indicated, unable to add task to task list.\nPlease review Task ID.");
                    unique = false;
                }
            }
            if (unique) {
                console.log("Task being added has a unique id! \nProceeding to add to the task list.")           
                let taskJSON = formatJSON(taskInfo.id, taskInfo.taskId,
                    taskInfo.task, taskInfo.deadline);
                taskList.push(taskJSON)     // Add task to taskList
                var listString = JSON.stringify(taskList);
                fs.writeFileSync("tasks.json", listString);     // Write new additions to tasks.json
            }
        } else if ( activePath == "/deleteTask" ) {
            let taskInfo = url.parse(req.url, true).query;
            let taskList = readTasks();     // Retrieve prior tasks from tasks.json to store into taskList
            for ( var x in taskList ) {
                console.log(taskList[x].taskID);
                console.log(taskInfo.taskId);
                if ( taskList[x].taskID == taskInfo.taskId ) {
                    taskList.splice(x, 1);
                    console.log("Task ID "+taskInfo.taskId+" has been found. \nTask has been successfully removed.");
                }
            }
            var listString = JSON.stringify(taskList);
            fs.writeFileSync("tasks.json", listString);     // Writes updated to tasks.json
        } else if ( activePath == "/view" ) {
            let taskList = readTasks()
            console.log("Active tasks in the Task Planner include : ", taskList);
            let body = ``
            
            let top = `
                <table style="border" >
                    <thead>
                        <th>Emp Id</th>
                        <th>Task Id</th>
                        <th>Task</th>
                        <th>Deadline</th>
                    </thead>`
            for (var x in taskList){
                body += `
                    <tr>
                        <td>${taskList[x].EmployeeID}</td>
                        <td>${taskList[x].taskID}</td>
                        <td>${taskList[x].task}</td>
                        <td>${taskList[x].deadline}</td>
                    </tr>`
            }
            res.write(top);
            res.write(body);
            res.write(`</table>`)
            res.write(`</div>`)
        }
        res.end();
    }
});

server.listen(port,()=>console.log(`Server running on port number ${port}`));