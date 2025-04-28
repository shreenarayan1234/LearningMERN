//Create Server in NODE JS
let http=require("http")

let server = http.createServer((req, res)=>{
    if(req.url == "/about"){ //http://localhost:800/about
        let obj = {
            status:1,
            data:[{
                newsTitle:'ws',
                newDes:'Ws Hello'
            },
            {
                newsTitle:'ws',
                newDes:'Ws Hello'
            }
        ]
        }
        res.end(JSON.stringify(obj));
    }
    if(req.url == "/contact"){
        res.end("Contact Me")
    }
    if(req.url == "/"){
        res.end("welcome to ws")
    }
})
server.listen("8000") //http://localhost:8000