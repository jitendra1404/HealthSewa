const express =require('express');
const Report =require('../models/Report_model');
const router=express.Router();

router.post("/Report/insert", 
function(req, res) {

const report_title = req.body.report_title;
const report_discription =req.body.report_discription;
const custo_name = req.body.custo_name;

const ReportData = new Report({
    report_title:report_title, 
    custo_name:custo_name,
    report_discrption:report_discription});
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
    const custo_name = req.body.custo_name;
    const report_discrption=req.body.report_discrption;
    const report_title=req.body.report_title;
    const id =req.params.custo_id

Review.updateOne({_id: id}, 
    {
    custo_name:custo_name,
    report_discrption:report_discrption,
    report_title:report_title
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