
import express from "express";
import bodyParser from "body-parser";
import cors from "cors";
import student from "./models/student"
// import student1 from "./models/student1";
import mongoose from "mongoose";

const app = express();
app.use(cors())
app.use(bodyParser.json())
mongoose.connect("mongodb+srv://morlabhaskar306:ZdG5JZtg8UTfugK0@bhaskar.smjwtfm.mongodb.net/?retryWrites=true&w=majority")
.then(()=> app.listen(5000))
.then(()=>console.log("Connected to mongoDB"))
.catch((err)=>console.log(err))

// app.use('/api', (req, res, next)=>{
//     res.send("Hello")
// })

app.post('/addstud', (req, res, next)=>{
    console.log(req.body.formData)
    const {name, rollno, college, branch} = req.body.formData;
    // const {username,password} = req.body.formData;
    const s = new student({
        
        // username, 
        // password,
        name,
        rollno,
        college,
        branch
    })
    s.save();
})



//get Data
//http://localhost:5000/getstudent
app.get('/getstudent',async(req,res,next)=> {
    let studentdata
    try {
        studentdata = await student.find()
    }
    catch(err) {
        console.log(err)
    }
    if (!studentdata) {
        console.log('no students found')
    }
    return res.status(200).json({studentdata})
})


// app.post('/delete',(req,res)=>{
//     const id = req.body.id;
//     student.deleteOne({_id:id}).then(()=>{
//         res.send('record deleted');
//     }).catch(err => res.send('err'))
// })


//sim
//deleteData
app.delete('/deleteuser/:id',async(req,res,next)=>{
        const _id = req.params.id
            let users;
            try{
                users = await student.findByIdAndDelete(_id);
            }catch(err) {
                return console.log(err)
            }
            if(!users){
                return ({message:"Unable to delete the user"})
            }
            return ({message:"Successfully deleted"})
    })

//update
app.get('/getstudentbyid/:id',async(req,res,next)=> {
    let studentdata;
    const _id=req.params.id
    try {
        studentdata = await student.findById(_id)
    }
    catch(err) {
        console.log(err)
    }
    if (!studentdata) {
        console.log('no students found')
    }
    return res.status(200).json({studentdata})
})

app.post('/updatestudent/:id',async(req,res,next)=> {
    const id=req.params.id
    const {name,rollno,college,branch} = req.body
    console.log(req.body)
    await student.updateOne({_id:id},{
        name,
        rollno,
        college,
        branch
    }).then(()=>{
        res.send({msg:"UPDATED"})
    }).catch((err)=>{   
        console.log(err)
    })
    // let stud;
    // try {
    //     stud = await student.findByIdAndUpdate(_id,
    //         {
    //             name,
    //             rollno,
    //             college,
    //             branch
    //         });
    // }
    // catch(err) {
    //     console.log(err)
    // }
    // // if (!studentdata) {
    // //     console.log('no students found')
    // // }
    // return res.send(200).json({stud})
})




//user
// import express from "express";
// import bodyParser from "body-parser";
// import cors from "cors";
// // import student from "./models/student"
// import student1 from "./models/student1";
// import mongoose from "mongoose";

// const app = express();
// app.use(cors())
// app.use(bodyParser.json())
// mongoose.connect("mongodb+srv://morlabhaskar306:ZdG5JZtg8UTfugK0@bhaskar.smjwtfm.mongodb.net/?retryWrites=true&w=majority")
// .then(()=> app.listen(5000))
// .then(()=>console.log("Connected to mongodb"))
// .catch((err)=>console.log(err))

// app.use('/api', (req, res, next)=>{
//     res.send("Hello")
// })

// app.post('/addstud', (req, res, next)=>{
//     console.log(req.body.formData)
//     // const {name, rollno, college, branch} = req.body.formData;
//     const {username,password} = req.body.formData;
//     // const {username,password} = req.body.formData;
//     const s = new student1({
//         // name, rno, branch, clg
//         username, 
//         password,
//         // name,
//         // rollno,
//         // college,
//         // branch
//     })
//     s.save();
// })