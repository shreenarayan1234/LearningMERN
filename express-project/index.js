//Ways to make a routing
let express = require("express")
require("dotenv").config();

let app= express()

app.use(express.json())  //this is mandatory if we are using json data

app.get("/",(req, res)=>{
    res.send("Hola mundo")
})

//Middleware
// let myToken = "12345"
let checkToken = (req, res, next)=>{
    console.log("Middleware")
    if(req.query.token == "" || req.query.token == undefined){
        return res.send({
            status:0,
            msg: "Please enter a token"
        })
    }
    if(req.query.token!=process.env.myToken){
        return res.send({
            status:0,
            msg: "Please enter a correct token"
        })
    }
    next()
}
app.use(checkToken)

app.get("/login/:id",(req, res)=>{
    let currentId = req.params.id
    res.send("API for Param Routes" + currentId)
})

app.post("/login",(req, res)=>{
    console.log(req.body)
    res.send({
        status:1, 
        msg:"User Login",
        bodyData:req.body,
        queryData:req.body
    })
})

app.get("/news",checkToken,(req, res)=>{
    res.send("API for news")
})


app.listen(process.env.PORT)