import {pool} from './db.js'
import bcrypt from 'bcrypt'
import dotenv from 'dotenv'
dotenv.config()
const employees = [
    "Aarav",
    "Neil",
    "Advait",
    "Anikhet",
    "Bhavya",
    "Dhruvan",
    "Dron",
    "Ibrahim",
    "Manan",
    "Parth",
    "Pranand",
    "Priyaan"
];
async function seedUsers() {
    try{
        const adminPassword= await bcrypt.hash("456",10)
        await pool.query(`
            INSERT INTO users(first_name,email,password_hash,role)
            VALUES ($1,$2,$3,$4) ON CONFLICT(email) DO NOTHING
            `,["Amey","amey@company.com",adminPassword,"admin"])
        for(const name of employees){
            const email=`${name.toLowerCase()}@company.com`
            const userPassword=await bcrypt.hash("123",10)
            await pool.query(`
            INSERT INTO users(first_name,email,password_hash,role)
            VALUES ($1,$2,$3,$4) ON CONFLICT(email) DO NOTHING
            `,[name,email,userPassword,"employee"])
        }
        console.log("user added succesfully! ")
    }
    catch(error){
        console.log("seeding error: ",error)
    }
    finally{
        await pool.end()
    }
}
seedUsers();