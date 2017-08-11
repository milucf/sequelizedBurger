var express = require("express");


var router=express.Router();

var db=require("../models");

router.get("/",function(req,res){
    db.Burger.findAll({include:[db.Customer]})
    .then(function(data){
       var hbObj={
           burgers:data
       }
        res.render("index",hbObj);
    })
    .catch(function(error){
        console.log(error);
    })
});

router.get("/api/burgers",function(req,res){
    db.Burger.findAll({include:[db.Customer]})
    .then(function(data){
        res.json(data);
    })
    .catch(function(error){
        console.log(error);
    })
});

router.post("/",function(req,res){
    var burgerNames=req.body.burger_names;
    var burgersArray=[];

    for(i=0;i<burgerNames.length;i++)
        burgersArray.push( {burger_name:burgerNames[i]} );

    db.Customer.create({
        customer_name:req.body.customer,
        Burgers:burgersArray
    },
    {
        include:[db.Burger]
    }
    ).then(function(data){
        res.json(data);
    });

});

router.put("/",function(req,res){
    db.Burger.update({
        devoured:true
    },
    {
        where:{id:req.body.id}
    }).then(function(data){
    res.json(data);
  });
});

module.exports = router;

