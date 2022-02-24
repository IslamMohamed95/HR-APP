const mongoose = require("mongoose")
const validator = require("validator")
const bcrypt = require("bcrypt")

const employerSchema= new mongoose.Schema({

    firstname:{
        type:String,
        trim:true,
        required:[true, "firstname is required"]
    },

    lastname:{
        type:String,
        trim:true,
        required:[true, "lastname is required"]
    },

    age:{
        type:Number,
        required:true,
        maxlength:2,
        minlength:1
    },

    email:{
        type:String,
        trim:true,
        required:true,
        validate(value){
            if(!validator.isEmail(value)) throw new Error("Invalid Email.. !")
        },
        lowercase:true
    },

    // password:{
    //     type:String,
    //     required:true,
    //     trim:true
    // }

})

employerSchema.pre("save", async function(){
    const employer = this
    if(employer.isModified("password")) employer.password = await bcrypt.hash(employer.password, 10)
})

const employerModel = mongoose.model('Employers', employerSchema)
module.exports = employerModel