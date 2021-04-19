let app = require("express")();
let http = require("http").Server(app);
let io = require("socket.io")(http);
let obj = require("mongoose");
const { stringify } = require("querystring");
obj.Promise = global.Promise;
let url = "mongodb://localhost:27017/meanstack";

const mongoDBOption = {
    useNewUrlParser: true,
    useUnifiedTopology: true
}

obj.connect( url, mongoDBOption );
let db = obj.connection;

db.on( "error", (err) => console.log(err) );

let messageSchema = obj.Schema({
    Username:String,
    Message:String
});

let ChatLog = obj.model("", messageSchema, "Chatlog");

var online = 0;

app.get("/", (req, res) => {
    res.sendFile(__dirname+"/index.html");
});

io.on ("connection", (socket) => {
    online++;

    if (online == 1){
        console.log("********* "+online+" USER ONLINE ********\nYOU ARE THE ONLY USER HERE. :(\n");
    } else {
        console.log("******** " +online+" USERS ONLINE ********\n");
    }

    socket.on("Message", (user, msg) => {
        console.log(user+" : "+msg);
        // let inuser = msg.username;
        // let message = msg.textmsg;
        // console.log("user is ", inuser);
        // console.log("message is ", message);
        // let user = req.body.name;
        // let message = req.body.messageInfo;

        let newMsg = new ChatLog({Username: user, Message: msg});
        newMsg.save( (error, result) => {
            if (error) {
                console.log("Error in storing message");
            }
        })
    })
})


http.listen(8888, ()=> {
    console.log("WELCOME TO SOCKET.IO CHAT LOG")
    console.log("Sever running on port 8888...")
    console.log("************* BEGIN CONVERSATION *************")

});