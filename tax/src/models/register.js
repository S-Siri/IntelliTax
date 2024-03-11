const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
    name : {
        type:String,
        required:true
    },
    username : {
        type:String,
        required:true
    },
    email : {
        type:String,
        required:true,
        unique :true
    },
    phoneno : {
        type:Number,
        required:true,
        unique :true
    },
    password : {
        type:String,
        required:true
    },
    confirmpassword : {
        type:String,
        required:true
    }
})

const Register = new mongoose.model("Register",userSchema);

module.exports = Register;