var express = require("express");
var dotEnv = require("dotenv");
dotEnv.load();

var users = require("./routes/users")
var roommateRequests = require("./routes/roommateRequests")


var app = express();

var port = process.env.PORT || 3001;

var bodyParser = require("body-parser");

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}))


app.get("/",(req,res)=>{
    res.send("Welcome to roommate finder API server")
})

app.use("/api/users", users);
app.use("/api/roommaterequests", roommateRequests)

app.listen(port, ()=>{
    console.log("Roommate API Server started at " + port);
})