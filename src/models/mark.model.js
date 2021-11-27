const mongoose =require("mongoose");
const markSchema=new mongoose.Schema({
    marks:{type:Number,required:true},
    student:{type:mongoose.Schema.Types.ObjectId,ref:"User"}
},
{
    versionKey: false,
    timestamps: true,
  })
const Mark=mongoose.model("Mark",markSchema);
module.exports=Mark;