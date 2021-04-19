let main = require("express")();
let bodyParser = require("body-parser");
let port = 7777;
let mongoose = require("mongoose");
mongoose.Promise = global.Promise;

let url = "mongodb://localhost:27017/meanstack";

// Avoiding connection warnings
const mongoDBOption = {
    useNewUrlParser: true,
    useUnifiedTopology: true
}

mongoose.connect(url, mongoDBOption);   // Ready to connect
let db = mongoose.connection; // Connecting to database
main.use(bodyParser.urlencoded({extended: true}));     // enables body part data
db.on("error", (err) => console.log(err));  // If database error occurs during connection

let courseSchema = mongoose.Schema({
    _id:Number,
    course:String,
    description:String,
    amount:Number
})

let Course = mongoose.model("", courseSchema, "Courses");   // Creating the model using schema

/////////////////////////////////////
//           NAVIGATION            //
/////////////////////////////////////

//Navigation to the main index page
// http://localhost:7777/
main.get("/", (req, res) => {
    console.log("REQUESTING :  "+__dirname+"/index.html");
    res.sendFile(__dirname+"/index.html");
});

// Navigation to add course page
// http://localhost:7777/addCourse
main.get("/addCourse", (req, res) => {
    console.log("REQUESTING :  "+__dirname+"/addCourse.html");
    res.sendFile(__dirname+"/addCourse.html");
});

//Navigation to update course page
// http://localhost:7777/updateCourse
main.get("/updateCourse", (req, res) => {
    console.log("REQUESTING :  "+__dirname+"/updateCourse.html");
    res.sendFile(__dirname+"/updateCourse.html");
});

//Navigation to delete course page
// http://localhost:7777/deleteCourse
main.get("/deleteCourse", (req, res) => {
    console.log("REQUESTING :  "+__dirname+"/deleteCourse.html");
    res.sendFile(__dirname+"/deleteCourse.html");
});

//Navigation to retrieve course page
// http://localhost:7777/retrieveCourse
main.get("/retrieveCourse", (req, res) => {
    console.log("REQUESTING :  "+__dirname+"/retrieveCourse");

    Course.find({}, (error, result) => {
        if (!error) {
            let display = `
            <table style="margin: auto; padding: 15px;">
            <tr>
                <th style="border: 3px solid black;">Course ID</th>
                <th style="border: 3px solid black;">Course Title</th>
                <th style="border: 3px solid black;">Course Description</th>
                <th style="border: 3px solid black;">Course Cost</th>
            </tr>`

            for (course in result){
                display += `
                <tr>
                    <th style="border: 2px solid black;">${result[course]._id}</th>
                    <th style="border: 2px solid black;">${result[course].course}</th>
                    <th style="border: 2px solid black;">${result[course].description}</th>
                    <th style="border: 2px solid black;">$${result[course].amount}</th>
                </tr>`
            }
            res.write(display);
            res.write(`</table>`);
            res.end();
        }
    })
})

/////////////////////////////////////
//      Operations / Actions       //
/////////////////////////////////////

// Action to add course from add course page
main.post("/add", (req, res) => {
    let id = req.body.id;
    let name = req.body.title;
    let desc = req.body.desc;
    let price = req.body.price;

    // Creating reference using model
    let newCourse = new Course({_id:id, course:name, description:desc, amount:price})
    newCourse.save((error, result) => {
        if (!error) {
            console.log("The following course has successfully been stored:\n"+result);
            res.send("Successful Course Addition.");
        } else {
            console.log(error.message);
            res.send("Error in New Course Addition!");
        }
    })
})

// Action to update course from update course page
main.post("/update", (req, res) => {
    let id = req.body.id;
    let price = req.body.price;

    Course.updateOne({_id: id}, {$set:{amount:price}}, (error, result) => {
        if (!error) {
            if (result.nModified > 0 ) {
                console.log("Course price has been successfully updated.\n");
                res.send("Course has been updated.")
            } else {
                console.log("Unable to update course.\n")
                res.send("Course has not been updated.")
            }
        }
    })
})

// Action to delete course from delete course page
main.post("/delete", (req, res) => {
    let id = req.body.id;

    Course.deleteOne({_id:id}, (error, result) => {
        if (!error) {
            if (result.deletedCount > 0 ) {
                console.log("Course has successfully been deleted.");
                res.send("Course has been deleted.");
            } else {
                console.log("Unable to delete course.");
                res.send("Course has not been deleted");
            } 
        } else {
            res.send(error);
        }
    })
})

main.listen(port, () => console.log(`Server running on port ${port}...`));