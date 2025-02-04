const mongoose = require("mongoose")
const express = require("express")
const app = express()
let connection = mongoose.connect("mongodb+srv://abdulrahmans:3Ontsj1rT5n0LsjA@cluster0.gswby.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0")
connection()
const PORT = 8080
app.get(express.json())
app.listen({PORT},()=>{
    console.log("connection successful")
})