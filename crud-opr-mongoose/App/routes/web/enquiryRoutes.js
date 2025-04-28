let express = require("express");
const { enquiryInsert, enquiryList, enquiryDelete, enquiryUpdate } = require("../../controller/web/userEnquiryController");
let enquiryRoutes = express.Router();


//insert
enquiryRoutes.post("/enquery-insert", enquiryInsert)
//Reading the data
enquiryRoutes.get("/enquiry-list",enquiryList)

//Delete 
enquiryRoutes.delete("/enquiry-delete/:id",enquiryDelete)


//Update
enquiryRoutes.put("/enquiry-update/:id", enquiryUpdate)

module.exports = {enquiryRoutes }