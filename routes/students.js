const router = require("express").Router();
const { response } = require("express");
let student = require("../models/student.js");

router.route("/add").post((req,res)=>{
    const name = req.body.age;
    const age = Number(req.body.age);
    const gender = req.body.gender;
    const grade = Number(req.body.grade);
    const address = req.body.address;

    const newStudent = new Student({
        name,
        age,
        gender,
        grade,
        address
    })

    newStudent.save().then(()=>{
        res.json("student is added sucessfully..")
    }).catch(()=>{
        console.log(error);
    })
})

router.route("/").get((req,res)=>{
    student.find().then((students)=>{
        res.json(students)
    }).catch((err=>{
        console.log(err)
    }))

})

router.route("/get/:id").get(async (req,res)=>{
    let userId = req.params.id;
     //await student.findOne(email)
    
    await student.findById(userId).then(()=>{
        res.status(200).send({status: "User fletched" , user:user})
    }).catch(()=>{
        console.log(err.message);
        res.status(500).send({status: "Error with fletching data"});
    }) 
})



router.route("/update/:id").put(async(req,res)=>{ //async request
    let userId = req.params.id;
    const {name,age,gender,grade,address} = req.body; //js destructure method

    const updateStudent = {
        name,
        age,
        gender,
        grade,
        address
    }

    const update = await student.findByIdAndUpdate(userId,updateStudent).then(()=>{  //await function
        res.status(200).send({status: "User Updated", user: update})
    }).catch((err)=>{
        res.status(500).send({status: "Error, Unable to Update data"});
    })
})


router.route("/delete/:id").delete(async(req,res)=>{
    let userId = req.params.id;

    await student.findByIdAndDelete(userId).then(()=>{
        res.status(200).send({status: "User deleted"});
        }).catch((err)=>{
            console.log(err.message);
            res.status(500).send({status: "Error with deleting user", error:err.message});
        })
})
    



module.exports = router;

