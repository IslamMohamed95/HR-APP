const mongoose = require('mongoose')
mongoose.connect(`${process.env.DBURL}${process.env.DBNAME}`, ()=>{console.log("Database is connected..")})