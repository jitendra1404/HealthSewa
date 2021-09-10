const mongoose =require('mongoose');

const Appointment =mongoose.model('Appointment', {

    fullname : {
        type :String,
        require:true,
        trim:true,
    },

    age : {
        type :String, 
        require:true
    },

    sex : {
        type : Date,
        default:Date.now
    },
    
    status : {
        type : String,
        require:true   
    },

    occupation : {
        type : String,
        require:true,
      
    },
    date:{  type:Date,
        default:Date.now
    },
   statement:{
       type:String
   }
})

module.exports = Appointment;