var mongoose = require("mongoose");

var dotEnv = require("dotenv");
dotEnv.load();

mongoose.Promise = global.Promise;
mongoose.connect(process.env.DB_URL,{ useNewUrlParser:true });

//Create schemas & models
var userSchema=mongoose.Schema({
    fullName: {
            type: String,
            required: true
         },
    email: {
        type:String,
        unique: true
    },
    phone: {
        type: String,
        required: true
     },
     dateOfRegistration : {
         type: Date,
         default: Date.now
     },
     password: {
         type: String,
         required: true
     },
     active: Boolean
})

exports.User = mongoose.model("User",userSchema,"users");

var roommateRequestSchema=mongoose.Schema({
    userId: mongoose.Schema.Types.ObjectId,
    description: String,
    location: String,
    city: String,
    phone: String,
    gender: String,
    rent: Number,
    numberOfRoommates: Number,
    dateOfRequest: {
        type: Date,
        default: Date.now
    }
})

exports.RoommateRequest=mongoose.model("RoommateRequest",roommateRequestSchema,"roommateRequests")
