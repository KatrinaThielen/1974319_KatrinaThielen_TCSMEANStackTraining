let fs = require("fs");
let mongoose = require("mongoose");
let url = "mongodb://localhost:27017/meanstack";
mongoose.Promise = global.Promise;

// Retrieve call_data.json data into JSONData
let callData = fs.readFileSync("call_data.json");
let JSONData = JSON.parse(callData);
console.log(JSONData);

mongoose.connect( url, {useNewUrlParser:true, useUnifiedTopology:true});
let db = mongoose.connection;

db.on("error", (err) => {
    console.log(err);
});

db.once("open", () => {
    let CallSchema = mongoose.Schema ({
        _id:Number,
        source:String,
        destination:String,
        sourceLocation:String,
        destinationLocation:String,
        callDuration:String,
        roaming:String,
        callCharge:String
    });

    let Record = mongoose.model("CallRecord", CallSchema, "CallRecords");

    JSONData.forEach((log) => {
        let entry = new Record(log);
        entry.save((error, result) =>{
            if (!error){
                console.log("The call record has been sucessfully stored: "+result);
            } else {
                console.log(error);
            }
            mongoose.disconnect();
        })
    })
})