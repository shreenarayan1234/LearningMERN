let express = require("express")
const { dbConnection } = require("./dbConnection")
const { ObjectId } = require('mongodb');

let app = express()

app.use(express.json())

//View Students
app.get("/student-read",async (req, res)=>{
    let myDB = await dbConnection();
    let studentCollection = myDB.collection('students');
    let viewData = await studentCollection.find().toArray(); //convert to array otherwise it will throw

    let resObj = {
        status:1,
        msg: "View Data",
        viewData
    }

    res.send(resObj)
})


//Insert Students
app.post("/student-insert", async(req, res)=>{
    let myDB = await dbConnection();
    let studentCollection = myDB.collection('students');

    // let obj={
    //     name:req.body.name,
    //     age:req.body.age
    // }


    let {name, age} = req.body
    let obj = {name, age}
    
    let checkName = await studentCollection.find(name);

    if(checkName){
        return res.send({
            status:0,
            msg:"Already exist"
        }
        )
    }

    let insertRes = await studentCollection.insertOne(obj);
    let resObj = {
        status:1,
        msg: "Insert Success",
        insertRes
    }
    // console.log(obj)

    res.send(resObj)
})


//Making a Delete api for student
app.delete("/student-delete/:id",async (req, res)=>{ //id is parameter, if id? then parameter is optional
    let {id} = req.params;
    let myDB = await dbConnection();
    let studentCollection = myDB.collection('students');
    let deleteRes = await studentCollection.deleteOne({ _id: new ObjectId(id) });
    let resObj = {
        status: 1,
        msg: "Delete Success",
        deleteRes
    }

    res.send(resObj);
})

//Update Students
app.put("/student-update/:id",async (req, res)=>{
    let {id} = req.params;
    let {name, age} = req.body;
    let obj = { };

    if(name !== "" && name!==undefined && name!==null){
        obj["name"]=name;
    }


    if(age !== "" && age!==undefined && age!==null){
        obj["age"]=age;
    }

    let myDB = await dbConnection();
    let studentCollection = myDB.collection("students");

    let updateRes = await studentCollection.updateOne({_id:new ObjectId(id)},{$set:obj});

    let resObj={
        status:1,
        msg:"Update success",
        updateRes
    }
    res.send(resObj);

})
app.listen(8000, () => {
    console.log("Server is running on port 8000");
});
