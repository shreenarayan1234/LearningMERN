let myToken = "12345"
let checkToken = (req, res, next)=>{
    console.log("Middleware")
    if(req.query.token == "" || req.query.token == undefined){
        return res.send({
            status:0,
            msg: "Please enter a token"
        })
    }
    if(req.query.token!=myToken){
        return res.send({
            status:0,
            msg: "Please enter a correct token"
        })
    }
    next()
}

module.export={checkToken}