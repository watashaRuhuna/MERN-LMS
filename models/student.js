const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const studentSchema = new Schema({
    name : {
        type: String, 
        required: true   //backend validation
    },
    age:{
        type: Number,
        required: true
    },
    gender:{
        type: String,
        required: true
    },
    grade:{
        type: Number
    },
    address:{
        type: String
    }

})

const Student = mongoose.model("student",studentSchema);

module.exports = student;