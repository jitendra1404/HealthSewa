const express =require('express');
const Report =require('../models/Report_model');
const router=express.Router();

router.post("/Report/insert", 
function(req, res) {

const Report_title = req.body.Report_title;
const Report_discription =req.body.Report_discription;
const Specialist_name = req.body.Specialist_name;

const ReportData = new Report({
    Report_title:Report_title, 
    Report_discription:Report_discription,
    Specialist_name:Specialist_name});

    ReportData.save()
.then(function(result){
    console.log(result)
    res.status(201).json({success:true, message:"Report Insert Success"})
}).catch(function(e){
    res.status(500).json({message:e, success:false})
})
})

router.get('/Report/All', function(req,res){
    Report.find().then(function(data){
        res.status(200).json(data)
    }).catch (function(error){
        res.status(500).json({error:error})
    })
})

router.get('/Report/:custo_id', function(req,res){
    const id =req.params.custo_id;
    Report.findOne({_id:id}).then(function(result){
        res.status(200).json(result);
    })
    .catch(function(error){
        res.status(500).json({error:error})
    })
})

router.put('/Report/update/:custo_id', function(req,res){
    const Report_title = req.body.Report_title;
    const Report_discrption =req.body.Report_discription;
    const Specialist_name=req.body.Specialist_name;
    const id =req.params.custo_id

Review.updateOne({_id: id}, 
    {
    Report_title:Report_title,
    Report_discrption:Report_discrption,
    Specialist_name:Specialist_name
})
.then(function(result){
    res.status(200).json({message:"Report Update Success"})
})
.catch(function(error){
    res.status(500).json({error:error})
})
})

router.delete("/Report/delete/:custo_id", function(req ,res){
    const id =req.params.custo_id;
    Report.deleteOne({_id:id}, function(result){
        res.status(200).json({message:"Report Delete Success"})
    })
    .catch(function(error){
        res.status(500).json({error:error})
    })
})

// change in customer login and registration

module.exports=router;