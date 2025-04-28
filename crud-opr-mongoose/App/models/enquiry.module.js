const mongoose = require('mongoose');

let userEnquirySchema = mongoose.Schema({
    name:{
        type:String,
        required: true
    },
    email:{
        type:String,
        required: true,
        unique: true
    },
    phone:{
        type:String,
        required: true
    },
    message:{
        type:String,
        required: true
    }
});

let enquiryModule = mongoose.model("Enquiry",userEnquirySchema);
module.exports = enquiryModule
