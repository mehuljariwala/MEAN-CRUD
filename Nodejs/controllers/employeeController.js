const express = require('express');
var router = express.Router();
var ObjectId = require('mongoose').Types.ObjectId;
//var Name = require('mongoose').Types.String;


var { Employee } = require('../models/employee.js');

//Display all Record..!
router.get('/',(req,res)=>{
    Employee.find((err,docs) =>{
        if(!err){
            res.send(docs);
        }
        else{
            console.log("Error in Retrive Employee Data..!" + JSON.stringify(err,undefined,2));
        }
    }); 
});

//Display Recored by ID..!
router.get('/:id',(req,res)=>{
    if(!ObjectId.isValid(req.params.id))
        return res.status(400).send(`No Recored with Given ID : ${req.params.id}`);
        Employee.findById(req.params.id, (err,docs) =>{
            if(!err){
                res.send(docs);   
            }
            else{
                console.log("Error in Retrive Employee Data With ID..!" + JSON.stringify(err,undefined,2));
            }
        });
});

/*router.get('/:param',(req,res)=>{
    console.log(req.params.name);
    if(!Name.isValid(req.params.name))
        return res.status(400).send(`No Recored with Given Name : ${req.params.name}`);
        Employee.find(req.params.name, (err,docs) =>{
            if(!err){
                res.send(docs);   
            }
            else{
                console.log("Error in Retrive Employee Data With ID..!" + JSON.stringify(err,undefined,2));
            }
        });
});*/

//Update Record by ID..!
router.put('/:id',(req,res) => {
    if(!ObjectId.isValid(req.params.id))
        return res.status(400).send(`No Recored with Given ID : ${req.params.id}`);
        var emp = new Employee({
            name:req.body.name,
            age:req.body.age,
            office:req.body.office,
            salary : req.body.salary
        });
        Employee.findByIdAndUpdate(req.params.id, {$set : emp}, { new :true } , (err, docs) => {
            if(!err){
                res.send(docs);   
            }
            else{
                console.log("Error in Updating Employee Data With ID..!" + JSON.stringify(err,undefined,2));
            }
        });

});

//Create Recored..!
router.post('/',(req,res) => {
    var emp = new Employee({
        name:req.body.name,
        age:req.body.age,
        office:req.body.office,
        salary : req.body.salary
    });
    emp.save((err,docs) => {
        if(!err){
            res.send(docs);
        }
        else{
            console.log("Error in Retrive Employee Data..!" + JSON.stringify(err,undefined,2));
        }
    });
});

router.delete('/:id',(req,res) =>{
    if(!ObjectId.isValid(req.params.id))
    return res.status(400).send(`No Recored with Given ID : ${req.params.id}`);

    Employee.findByIdAndRemove(req.params.id,(err,docs) =>{
        if(!err){
            res.send(docs);
        }
        else{
            console.log("Error in Delete Employee Data..!" + JSON.stringify(err,undefined,2));
        }
    });
});

module.exports = router;