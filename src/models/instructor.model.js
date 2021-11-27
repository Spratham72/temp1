const mongoose=require("mongoose");
const instructorSchema=new mongoose.Schema({
    employee_id:{type:String, required:true},
    user:{type:mongoose.Schema.Types.ObjectId, ref:"User"}
},
{
    versionKey: false,
    timestamps: true,
  })
  const Instructor=mongoose.model("Instructor",instructorSchema);

  module.exports=Instructor;