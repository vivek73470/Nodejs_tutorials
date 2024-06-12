const addRoll=(req,res,next)=>{
    if(req.method==="POST"){
        let roll =Math.random()*100
        req.body.roll_no=roll
        next()

    }
}

module.exports={addRoll}