const express = require("express")
const mongoose = require("mongoose")
const ejs= require("ejs")
const app = express()
const Mngo_url ="mongodb://127.0.0.1:27017/wandernest"


async function main(){
    await mongoose.connect(Mngo_url)
}
main()
.then(()=>{
    console.log("connected to DB")
})
.catch((err)=>{
    console.log(err)
})

app.get("/",(req,res)=>{
    res.send("hi i am root ")
})

app.listen(1000,()=>{
    console.log("app is listen port 1000")
})