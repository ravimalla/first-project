var express = require("express");
var router = express.Router();
var db = require('../db');
var verifyToken=require("../routes/verifyToken")

router.route("/")
    .get((req,res)=>{
        db.RoommateRequest.find({})
        .then((roommateRequests)=>{
            res.status(200).send(roommateRequests)
        })
        .catch((err)=>{
            res.status(500).send(err)
        })
    })
    .post(verifyToken,(req,res)=>{
        console.log(req.body)
        var newRequest=new db.RoommateRequest(req.body)
        newRequest.save()
        .then((request)=>{
            res.status(200).send(request)
        })
        .catch((err)=>{
            res.status(500).send(err)
        })
    })

router.route("/search/:keyword")
    .get((req,res)=>{
        var keyword=req.params.keyword;
        var regex=new RegExp("/" + keyword + "/i");
        db.RoommateRequest.find({location:regex})
        .then((roommateRequests)=>{
            res.status(200).send(roommateRequests)
        })
        .catch((err)=>{
            res.status(500).send(err)
        })      
    })

router.route("/:id")
    .delete(verifyToken,(req,res)=>{
        var id=req.params.id;
        db.RoommateRequest.findByIdAndRemove(id)
        .then((roommateRequest)=>{
            res.status(200).send(roommateRequest)
        })
        .catch((err)=>{
            res.status(500).send(err)
        })      
    })


module.exports=router;
