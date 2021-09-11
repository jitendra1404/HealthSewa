const mongoose =require('mongoose')

const Report =mongoose.model('Report', {

    report_title : {
        type : String,
        require:true
    },

    report_discrption : {
        type :String,
        require:true
    },
    custo_name:{
        type:String,
        require:true
    },
})
 module.exports=Report;
