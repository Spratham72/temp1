const mongoose = require("mongoose");

const evaluationSchema=new mongoose.Schema({
    date_of_evaluation:{type:String, required:true},
    student:[{type:mongoose.Schema.Types.ObjectId, ref:"User"}],
    topic_name:[{type:mongoose.Schema.Types.ObjectId,ref:"Topic"}]
},
{
    versionKey: false,
    timestamps: true,
  })
const Evaluation=mongoose.model("Evaluation",evaluationSchema);

module.exports=Evaluation;