const EnquiryModel = require("../../models/enquiry.module");

//Insert
let enquiryInsert = (req, res)=>{
    let {name, email, phone, message} = req.body;
    let enquery= new EnquiryModel({
        name,
        email,
        phone,
        message
    })
    enquery.save().then(()=>{
        res.send({status:1, msg:"success"})
    }).catch((err)=>{
        res.send({status:0, msg:"error", error: err.message})
    })
}

module.exports = {enquiryInsert};