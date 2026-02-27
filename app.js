const express = require("express")
const mongoose = require("mongoose")
const ejs= require("ejs")

const app = express()

app.get("/",(req,res)=>{
    res.send("hi i am root ")
})

app.listen(1000,()=>{
    console.log("app is listen port 1000")
})