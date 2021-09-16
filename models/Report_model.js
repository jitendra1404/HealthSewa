const mongoose =require('mongoose')

const Report =mongoose.model('Report', {

    Report_title : {
        type : String,
        require:true
    },

    Report_discrption : {
        type :String,
        require:true
    },
    Specialist_name:{
        type:String,
        require:true
    },
})
 module.exports=Report;
