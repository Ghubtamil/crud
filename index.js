import express from 'express'
import mongoose from 'mongoose'
import dotenv from 'dotenv'
import Rolerouter from './routes/role.js'


dotenv.config()

const app = express()
app.use(express.json())
app.use("/",Rolerouter)

const connectDB = async(req,res)=>{
    try {
        await mongoose.connect(process.env.mongodb_url)
        console.log("database connectedggggg")
    } catch (error) {
        
    }
}

app.listen(process.env.port,()=>{
    connectDB()
    console.log("server connected");
})