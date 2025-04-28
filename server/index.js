let express = require('express');
let cors = require('cors');
const mongoose = require('mongoose');
const enquiryRouter = require('./routes/web/enquiryRoutes');
require('dotenv').config();
let app = express();

app.use(cors())
app.use(express.json());

app.use('/api/web/enquiry',enquiryRouter);
app.get('/test', (req, res) => {
    res.send("Test API");
});

//http://localhost:8000/api/web/enquiry/insert

//Connect to MongoDB
mongoose.connect(process.env.DBURL).then(() => {
    console.log("Connected to MongoDB");
    app.listen(process.env.PORT || 3000, () => {
        console.log(`Server started on port ${process.env.PORT || 3000}`);
    }
    );
}
).catch((err) => {
    console.log("Error connecting to MongoDB", err);
});
