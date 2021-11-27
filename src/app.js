const express=require("express");
const mongoose=require("mongoose");
const app= express();
const User=require('./models/user.model');
const Instructor=require('./models/instructor.model');
const Student=require('./models/student.model');
const Evaluation=require('./models/evaluation.model');
const Topic=require('./models/topic.model');
const Mark=require('./models/mark.model');
app.use(express.json());
function connect(){
    return mongoose.connect("mongodb://127.0.0.1:27017/express-mvc");
}



//User CRUD

app.post("/user",async(req,res)=>{
    try {
        const user=await User.create(req.body);
        return res.send(user);
    } catch (error) {
        return res.status(500).json({error:error.message})
    }
})

app.get("/user",async(req,res)=>{
    try {
        const user=await User.find().lean().exec();
        return res.send(user);
    } catch (error) {
        return res.status(500).json({error:error.message})
    }
})
//instructor CRUD

app.post("/instructor",async(req,res)=>{
    try {
        const instructor=await Instructor.create(req.body);
        return res.send(instructor);
    } catch (error) {
        return res.status(500).json({error:error.message})
    }
})

app.get("/instructor",async(req,res)=>{
    try {
        const instructor=await Instructor.find().lean().exec();
        return res.send(instructor);
    } catch (error) {
        return res.status(500).json({error:error.message})
    }
})

//Student CRUD

app.post("/student",async(req,res)=>{
    try {
        const student=await Student.create(req.body);
        return res.send(student);
    } catch (error) {
        return res.status(500).json({error:error.message})
    }
})

app.get("/student",async(req,res)=>{
    try {
        const student=await Student.find().lean().exec();
        return res.send(student);
    } catch (error) {
        return res.status(500).json({error:error.message})
    }
})

//topic CRUD

app.post("/topic",async(req,res)=>{
    try {
        const topic=await Topic.create(req.body);
        return res.send(topic);
    } catch (error) {
        return res.status(500).json({error:error.message})
    }
})

app.get("/topic",async(req,res)=>{
    try {
        const topic=await Topic.find().lean().exec();
        return res.send(topic);
    } catch (error) {
        return res.status(500).json({error:error.message})
    }
})


//evaluation CRUD

app.post("/evaluation",async(req,res)=>{
    try {
        const evaluation=await Evaluation.create(req.body);
        return res.send(evaluation);
    } catch (error) {
        return res.status(500).json({error:error.message})
    }
})

app.get("/evaluation",async(req,res)=>{
    try {
        const evaluation=await Evaluation.find().lean().exec();
        return res.send(evaluation);
    } catch (error) {
        return res.status(500).json({error:error.message})
    }
})
app.get("/evaluation/:id",async(req,res)=>{
    try {
        const evaluation=await Evaluation.findById(req.params.id).populate("student").lean().exec();
        return res.send(evaluation.student);
    } catch (error) {
        return res.status(500).json({error:error.message})
    }
})
//marks CRUD

app.post("/marks",async(req,res)=>{
    try {
        const mark=await Mark.create(req.body);
        return res.send(mark);
    } catch (error) {
        return res.status(500).json({error:error.message})
    }
})

app.get("/marks",async(req,res)=>{
    try {
        const mark=await Mark.find().lean().exec();
        return res.send(mark);
    } catch (error) {
        return res.status(500).json({error:error.message})
    }
})

app.get("/marks/highest",async(req,res)=>{
    
    try {
        const topic=await Mark.find().populate("student").lean().exec();
        topic.sort((a,b)=>{return b.marks-a.marks})
        
        return res.send(topic[0].student);
    } catch (error) {
        return res.status(500).json({error:error.message})
    }
})

app.listen(1234,async()=>{
    connect();
    console.log("server is running in 1234")
})

// {
//     "date_of_evaluation":"30/11/2021",
//     "instructor":["61a0a377d79b5fe77a13da79"],
//     "student":[""]
//     "topic_name":["61a0a51aa9a36b52c98a3d99"]
// }