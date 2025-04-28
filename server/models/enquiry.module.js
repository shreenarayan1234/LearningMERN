let mongoose = require('mongoose');
let Schema = mongoose.Schema;

let enquirySchema = new Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    phone: {
        type: String,
        required: true
    },
    message: {
        type: String,
        required: true
    }
});
const EnquiryModel = mongoose.model('Enquiry', enquirySchema);
module.exports = EnquiryModel;