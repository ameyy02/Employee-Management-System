import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import {pool} from './db.js'
import authRoutes from "./routes/authroutes.js";
import { authenticate } from "./middleware/authMiddleware.js";
import { authorize } from "./middleware/roleMiddleware.js";
import taskroutes from "./routes/taskroutes.js";
dotenv.config();

const app = express();
console.log("JWT SECRET:", process.env.JWT_SECRET);
const allowedOrigins = [
  "http://localhost:5173",
  "https://employee-management-system-amey-pawar.vercel.app",
  "https://employee-management-system-seven-umber.vercel.app/"
];

app.use(cors({
  origin: allowedOrigins,
  methods: ["GET", "POST", "PUT", "PATCH", "DELETE", "OPTIONS"],
  allowedHeaders: ["Content-Type", "Authorization"]
}));

app.use(express.json());
app.use('/api/auth',authRoutes)
app.use("/api/tasks", taskroutes);
app.get("/api/admin-only",authenticate,authorize("admin"),(req,res)=>{res.json({
    message:"welcome admin",
    user: req.user
})})
app.get("/api/employee-only",authenticate,authorize("employee"),(req,res)=>{res.json({
    message:"welcome employee",
    user: req.user
})})
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
app.get("/api/protected", authenticate, (req, res) => {
    res.json({
        message: "You accessed a protected route",
        user: req.user
    });
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});