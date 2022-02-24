const route = require('express').Router()
const employerController = require("../controllers/employer.controller")

route.post("/register", employerController.createEmployer)
route.get("/", employerController.showAllEmployers)
route.delete("/:_id", employerController.deleteEmployer)
route.delete("/", employerController.deleteAll)
route.patch("/edit/:_id", employerController.editEmployer)



module.exports = route