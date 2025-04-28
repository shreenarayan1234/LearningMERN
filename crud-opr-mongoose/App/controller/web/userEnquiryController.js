const enquiryModule = require("../../models/enquiry.module");


//Insert
let enquiryInsert = (req, res)=>{
    let {sName, sEmail, sPhone, sMsg} = req.body;
    let enquery= new enquiryModule({
        name:sName,
        email:sEmail,
        phone:sPhone,
        message:sMsg
    })
    enquery.save().then(()=>{
        res.send({status:1, msg:"success"})
    }).catch((err)=>{
        res.send({status:0, msg:"error", error: err.message})
    })
}

//View
let enquiryList = async (req, res)=>{
    let studentList = await enquiryModule.find();
    res.send({status: 1, msg:"Student list", data: studentList});
}

//Delete
let enquiryDelete =  async (req, res)=>{
    let enquiryId = req.params.id;
    let deleteEnquiry = await enquiryModule.deleteOne({_id:enquiryId});
    res.send({status:1, msg:"delete success",id:enquiryId, delRes:deleteEnquiry});
}

//update
let enquiryUpdate = async (req, res)=>{
    let updateId = req.params.id;
    let {sName, sEmail, sPhone, sMsg} = req.body;
    let updateObject ={
        name:sName,
        email:sEmail,
        phone:sPhone,
        msg:sMsg
    }
    let updateEnquiry = await enquiryModule.updateOne({_id:updateId},updateObject);
    res.send({status:1, msg:"Update Success",Id: updateId,updateRes:updateEnquiry})
}

module.exports = {enquiryInsert, enquiryList, enquiryDelete, enquiryUpdate}