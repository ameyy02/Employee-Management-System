import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import {pool} from './db.js'
dotenv.config();

const app = express();

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
    res.json({
        message: "Employee Management API is running"
    });
});
app.get("/api/testdb",async (req,res)=>{
    try{
        const result=await pool.query("SELECT NOW()")
        res.json({
            message:"Database connected succesfully",
            time:result.rows[0]
        })
    }catch(error){
        console.log(error)
        res.status(500).json({
            message:"error occured"
        })
    }
})
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});