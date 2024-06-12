const http = require("http")
const fs = require("fs")

const array =["vivek","mukesh","ashish"]

const server=http.createServer((request,response)=>{
if(request.url==="/"){
    response.end("this is home page")
} 
else if(request.url==="/datapage"){
    response.setHeader("Content-Type","text/html")
    response.end("<h2>data will here</h2>")
}

// POST
else if(request.url==="/addDetails" && request.method==="POST"){
    let str=""
    request.on("data",(packet)=>{

        str+=packet
    })
   request.on("end",()=>{
    console.log(str)
   })
    response.end("data has been entered")
}

// read file
else if(request.url==="/data"){
    fs.readFile("./data.json",(err,data)=>{
        if(err){
            response.write(err)
            response.end()
        }
        else{
            response.end(data)
        }
    })
}

// write file
else if(request.url==="/writenfile"){
    fs.writeFile("./employee.txt","Employee name are as follows",(err)=>{
        if(err){
            response.end("error while writing in filr")
            console.log("err")
        }else{
            response.setHeader("Content-Type","text/html")
            response.end("<h1>data has been written in file</h1>")
        }
    })
}
// write array
else if(request.url==="/enternanmes"){
   array.map(elem=>{
    fs.appendFile("./employee.txt",`\n${elem}`,(err)=>{
        if(err){
            response.end("there is error")
            console.log("err")
        }else{
            response.setHeader("Content-Type","text/html")
            response.end("<h1>all names added in file</h1>")
        }
    })
   })
}
// delete
else if(request.url==="/delete"){
    fs.unlink("./employee.txt",(err)=>{
        if(err){
            response.end("there is some error")
            console.log("error")
        }
        else{
            response.setHeader("Content-type","text/html")
            response.end("file has been deleted")
        }
    })
}

else if(request.url==="/movie"){
    // with streaming
    // const movie = fs.readFileSync("./lecture.txt","utf-8")
    // response.end(movie)

    // without streaming
    const movieStream = fs.createReadStream("/lecture.txt","utf-8")
    movieStream.pipe(response)
}

else{
    response.end("Invalid end p oint")
}
})

server.listen(4500,()=>{
    console.log("server is running at port 4500")
})