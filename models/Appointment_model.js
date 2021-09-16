const mongoose =require('mongoose');

const Appointment =mongoose.model('Appointment', {

    HealthIssue: {
        type:String
    },

    Occupation : {
        type : String,
        require:true,
    },

    Behaviors : {
        type : String,
        require:true   
    },

    Date:{  type:Date,
        default:Date.now
    },

    Age : {
        type :String, 
        require:true
    },

    ConsultantHour : {
        type :String
    },

    Statement : {
        type :String
    },


    

   
    
   


    
   statement:{
       type:String
   }
})

module.exports = Appointment;