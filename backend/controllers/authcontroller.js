import bcrypt from 'bcrypt'
import {pool} from '../db.js'
import jwt from 'jsonwebtoken'
export const login= async (req,res)=>{
    try{
        const {email,password}=req.body;
        if(!email||!password){
            res.status(400).json({
                message:"email and password are required"
            })
        }
        const result= await pool.query(`
            SELECT id,first_name,email,password_hash,role FROM users
            WHERE email=$1
            `,[email])
        if(result.rows.length==0){
            res.status(401).json({
                message:"invalid email or password"
            })
        }
        const user=result.rows[0]
        const ispassword=await bcrypt.compare(password,user.password_hash)
        if(!ispassword){
            res.status(401).json({
                message:"invalid email or password"
            })
        }
        const token=jwt.sign(
            {
                id:user.id,
                role:user.role
            },
            process.env.JWT_SECRET,
            {
                expiresIn:"1d"
            }
        )
        res.json({
            message:"login Successful",
            token,
            user:{
                id:user.id,
                name:user.first_name,
                email:user.email,
                role:user.role
            }
        })
    }catch(error){
        console.error("Login error:", error);

        res.status(500).json({
            message: "Internal server error"
    })}
}