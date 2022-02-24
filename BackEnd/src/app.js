require('dotenv').config()
require("../db/dbConnection")
const express = require('express')
const app = express()
const cors = require('cors')

app.use(express.json())
app.use(cors())

/*----------Routes Varaiables ----------------*/
const employerRouter = require("../routes/employer.routes")

/*-------Routes Directory --------------*/
app.use("/crude", employerRouter)


app.get("*", (req, res)=>{
    res.status(500).send({
        APIstatus: false,
        Message: "Invalid Link"
    })
})


module.exports = app
