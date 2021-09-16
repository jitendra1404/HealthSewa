const express =require('express')
const Appointment =require('../models/Appointment_model');
const Customer = require('../models/customer_model');
const router=express.Router();

//Appointment insert........
router.post("/Appointment/insert",  function(req,res) {

const HealthIssue =req.body.HealthIssue;
const Age= req.body.Age;
const Behaviors= req.body.Behaviors;
const ConsultantHour= req.body.ConsultantHour;
const Occupation=req.body.occupation;
const Date= req.body.date;
const Statement=req.body.Statement;


const Appointmentdata = new Appointment({
    HealthIssue:HealthIssue,
    Age:Age,
    Behaviors:Behaviors,
    ConsultantHour:ConsultantHour,
    Occupation:Occupation,
    Date:Date,
    Statement:Statement
    });

Appointmentdata.save()
.then(function(result){
    res.status(201).json({
        success:true, 
        message:"Appointment Insert Success"})
}).catch(function(e)
{res.status(500).json({message:e, success:false})
    })
})

router.get ("/Appointment/All", async(req,res) => {
    const appointment = await Appointment.find({});
    try {
        res.status(201).send(appointment);
    } catch(error) {
        res.status(500).send(error);
    }
});




router.get("/Appointment/:custo_id", function(req, res) {
     const id = req.params.custo_id;
     Appointment.findOne({_id:id}).then (function(result){
         res.status(200).json(result);
     })
     .catch(function(er){
     res.status(500) .json({error:er})
     });
 });

 // For Appointment update

 router.put("/Appointment/update/:custo_id", function (req, res) {

const HealthIssue =req.body.HealthIssue;
const Age= req.body.Age;
const Behaviors= req.body.Behaviors;
const ConsultantHour= req.body.ConsultantHour;
const Occupation=req.body.Occupation;
const Date= req.body.Date;
const Statement=req.body.Statement;
const id = req.params.custo_id;
 
     Appointment.updateOne({ _id: id
         }, {
            HealthIssue:HealthIssue,
            Age:Age,
            Behaviors:Behaviors,
            ConsultantHour:ConsultantHour,
            Occupation:Occupation,
            Date:Date,
            Statement:Statement
         })
         .then(function (result) {
             res.status(200).json({
                 message: " Appointment Update Successful"
             })
         })
         .catch(function (e) {
             res.status(500).json({
                 error: e
             })
         })
 })
 // for Appointment delete
 
 router.delete("/Appointment/delete/:custo_id", function (req, res) {
     const id = req.params.custo_id;
     Appointment.deleteOne({_id:id}).then(function (result) {
             res.status(200).json({
                 message: " Appointment Delete Successful"
             })
         })
         .catch(function (e) {
             res.status(500).json({
                 error: e
             })
         })
 })

module.exports=router;