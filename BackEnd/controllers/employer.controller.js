const employerModel = require("../models/employer.model")
const ObjectId = require("mongodb")
// const uniqid = require("uniqid")
const bcrypt = require("bcrypt")

class employers {

    //Create new Employer
    static createEmployer = async (req, res)=>{
        try{
            const newEmployer = new employerModel({...req.body})
            await newEmployer.save()
            res.status(200).send({
                APIstatus: true,
                message: "Employer created successfully"
            })
        }
        catch(e){
            res.status(500).send({
                APIstatus: false,
                message: "Error failed to create new Employer :(!"
            })
        }
    }

    //All Employers
    static showAllEmployers = async (req, res)=>{
        try{
            const allEmployers = await employerModel.find()
            if(allEmployers.length > 0){
                res.status(200).send({
                    APIstatus: true,
                    Data: allEmployers
                })
            }else {
                res.status(200).send({
                    APIstatus: true,
                    Message: "No Data To Show"
                })
            }
        }
        catch(e){
            res.status(500).send({
                APIstatus: false,
                message: e.message
            })
        } 
    }

    //Delete Employer
    static deleteEmployer = async (req, res)=>{
        try{
            const targetEmployer = await employerModel.findByIdAndDelete(req.params._id)
            if(!targetEmployer) throw new Error("Employer Not Found..!")
            res.status(200).send({
                APIstatus: true,
                Message: "Employer Deleted Successfully",
                Data: targetEmployer
            })
        }
        catch(e) {
            res.status(500).send({
                APIstatus: false,
                Message: e.message
            })
        }
    }

    //Delete All
    static deleteAll = async (req, res)=>{
        try{
            const deleteAllEmployers = await employerModel.deleteMany()
            res.status(200).send({
                APIstatus: true,
                Message: "All Deleted Successfully"
            })
        }
        catch(e){
            res.status(500).send({
                APIstatus: false,
                Message: e.message
            })
        }
    }

    //Send Employer Data to be Edit
    static employerData = async (req ,res)=>{
        res.send(req.employer)
    }

    //Edit Employer Data
    static editEmployer = async (req, res)=>{
                try{
            const editEmployer = await employerModel.updateOne({_id:req.params._id}, {
                $set:{
                    firstname: req.body.firstname,
                    lastname: req.body.lastname,
                    age: req.body.age,
                    email: req.body.email,
                    // password: await bcrypt.hash(req.body.password, 10)
                }
            })
            res.status(200).send({
                APIstatus: true,
                Data: editEmployer,
                Message: "Employer Updated Successfully"
            })
        }
        catch(e){
            res.status(500).send({
                APIstatus: false,
                Message: e.message
            })
        } 
    }

    // //Filteration
    // static searchBox = async (req, res) =>{
    //     try{
    //         const wantedEmployer = await employerModel.filter
    //     }
    //     catch(e){
    //         res.status(500).send({
    //             APIstatus: false,
    //             Message: e.message
    //         })
    //     }
    // }
}

module.exports = employers