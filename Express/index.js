const express = require("express")
const fs = require("fs")
// console.log(express)
const app = express();

app.use(express.json()) // middleware

app.get("/", (req, res) => {
    // res.end("home page")
    // or
    res.send("home page")
})

app.get("/data", (req, res) => {
    res.end("data")
})

app.post("/addData", (req, res) => {
    console.log(req.body)
    res.end("data has been added")
})

app.get("/allData", (req, res) => {
    const data = fs.readFileSync("./db.json", "utf-8")
    // const parse_data= JSON.parse(data)  convert into object if we remove above middleware
    console.log(data)
    res.send("got data")
})

app.get("/allStudents", (req, res) => {
    const data = fs.readFileSync("./db.json", "utf-8")
    const parse_data = JSON.parse(data)
    console.log(parse_data.student)
    res.end("data is in terminal")
})

// POST
app.post("/addstudent", (req, res) => {
    // reading the data first
    const data = fs.readFileSync("./db.json", "utf-8")
    // parsing the data to add a new student
    const parse_data = JSON.parse(data)
    // adding the new student
    parse_data.student.push(req.body)
    // write in file
    fs.writeFileSync("./db.json", JSON.stringify(parse_data))
    console.log(parse_data)
    res.end("required data")

})
app.post("/addteacher", (req, res) => {
    const data = fs.readFileSync("./db.json", "utf-8")
    const parse_data = JSON.parse(data)
    parse_data.teacher.push(req.body)
    fs.writeFileSync("./db.json", JSON.stringify(parse_data))
    res.end("teacher added successfully")
})

// delete
app.delete("/delete", (req, res) => {
    // reading the data first
    const data = fs.readFileSync("./db.json", "utf-8")
    // parsing the data to add a new student
    const parse_data = JSON.parse(data)
    parse_data.student = parse_data.student.filter(student => student.name !== "vivek")
    fs.writeFileSync("./db.json", JSON.stringify(parse_data))
    console.log(parse_data)
    res.end("deleted")
})

// delete using id
app.delete("/delete", (req, res) => {
    const data = fs.readFileSync("./db.json", "utf-8");
    let parse_data = JSON.parse(data);
    const index = parse_data.students.findIndex(student => student.name === "pulkit");

    // If the student with name "pulkit" is found
    if (index !== -1) {
        // Remove the student at that index
        parse_data.students.splice(index, 1);
    }
    // Write the updated data back to the file
    fs.writeFileSync("./db.json", JSON.stringify(parse_data));
    console.log(parse_data);
    res.end("deleted");
});

// patch 
app.patch("/update", (req, res) => {
    const data = fs.readFileSync("./db.json", "utf-8");
    let parse_data = JSON.parse(data);
    const index = parse_data.students.findIndex(student => student.name === "pulkit");

    // If the student with name "pulkit" is found
    if (index !== -1) {
        parse_data.students[index].name = req.body.newName;
    }
    fs.writeFileSync("./db.json", JSON.stringify(parse_data));
    console.log(parse_data);
    res.end("updated");
});


app.listen(3500, () => {
    console.log("running at port 3500")
})