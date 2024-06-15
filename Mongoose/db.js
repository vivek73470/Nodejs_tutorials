const mongoose = require("mongoose")

//by this fn i am connectingt to database school
const main=async()=>{
    try{
        const connection=await mongoose.connect("mongodb://127.0.0.1:27017/school")
        console.log("connected to db")
        // everything i am interact with db i have to use await becoz is asynchronous

        // await StudentModal.insertMany([{name:"Rahul",age:23,city:"delhi",is_married:false}])
       

        // // // how to insertOne document
        const student= new StudentModal({
            name:"albert",
            age:62,
            city:"gkp",
            is_married:false
        })
        await student.save()

        console.log("following is the data from database")
        const students =  await StudentModal.find()
        console.log(students)
         connection.disconnect()
         console.log("disconnected")

    }
    catch(err){
        console.log("con not connect")
        console.log(err)
    }
}
main()
// i have created a structure for data that i want to store inside it 
const studentSchema=mongoose.Schema({
    // name:String,
    // age:Number,
    // city:String,
    // is_married:Boolean
    name:{type:String,required:true},
    age:{type:Number,required:true},
    city:{type:String,required:true},
    is_married:{type:String,required:true}
},
{
    versionKey:false
})

// with the help of structure i create modal
// student is basically collection
const StudentModal=mongoose.model("student",studentSchema)