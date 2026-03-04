const express = require("express")
const mongoose = require("mongoose")
const ejs= require("ejs")
const app = express()
const Mngo_url ="mongodb://127.0.0.1:27017/wandernest"
const Listing = require("./models/listing")


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

app.get("/testListing", async(req,res)=>{
    let sampleListing = new Listing({
        title:"my new villa",
        description:"by the beach",
        price:2000,
        location:"calangute goa",
        country:"India"
    });

    await sampleListing.save();
    console.log("sample was saved");
    res.send("sample was saved");
})

app.listen(1000,()=>{
    console.log("app is listen port 1000")
})