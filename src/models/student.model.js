const mongoose=require("mongoose");
const studentSchema=new mongoose.Schema({
    user:{type:mongoose.Schema.Types.ObjectId,ref:"User"},
    roll_id:{type:String, required:true},
    current_batch:{type:String, required:true},
},
{
    versionKey: false,
    timestamps: true,
  })
const Student=mongoose.model("Student",studentSchema);
module.exports=Student;