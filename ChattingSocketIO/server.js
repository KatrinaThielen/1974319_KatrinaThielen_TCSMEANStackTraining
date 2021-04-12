let app = require("express")();
let http = require("http").Server(app);
let io = require("socket.io")(http);

var online = 0;

app.get("/", (req, res) => {
    res.sendFile(__dirname+"/index.html");
});

io.on("connection", (socket)=>{
    online++;

    if (online == 1){
        console.log("********* "+online+" USER ONLINE ********\nYOU ARE THE ONLY USER HERE. :(\n");
    } else {
        console.log("******** " +online+" USERS ONLINE ********\n");
    }

    socket.on("Message", (msg)=> {
        console.log(msg);
    })

});

io.on("send", function(socket) {
    console.log("hey just testing this haha..");
    io.emit('sending information...');
});

http.listen(9090, ()=> {
    console.log("WELCOME TO SOCKET.IO CHAT LOG")
    console.log("Sever running on port 9090...")
    console.log("************* BEGIN CONVERSATION *************")

});