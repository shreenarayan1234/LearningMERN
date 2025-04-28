let express = require('express');
var mongoose = require('mongoose');
require('dotenv').config();
// let enquiryModule = require('./App/models/enquiry.module');
const { enquiryRoutes } = require('./App/routes/web/enquiryRoutes');

let app = express();

app.use(express.json());

app.use("/web/api/enquiry",enquiryRoutes);

//http://localhost:8000/web/api/enquiry/enquiry-list

mongoose.connect(process.env.DBURL).then(()=>{
    console.log("Connection is Success");
    app.listen(process.env.PORT,()=>{
        console.log("Server is running in port: "+process.env.PORT)
    })
})