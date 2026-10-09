import { pool } from './db.js'
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
]

async function seedUsers() {

    try {

        // =========================
        // CREATE ADMIN
        // =========================

        const adminPassword = await bcrypt.hash("456", 10)

        await pool.query(`
            INSERT INTO users
            (first_name, email, password_hash, role)
            VALUES ($1, $2, $3, $4)
            ON CONFLICT(email) DO NOTHING
        `, [
            "Amey",
            "amey@company.com",
            adminPassword,
            "admin"
        ])


        // =========================
        // CREATE EMPLOYEES
        // =========================

        const userPassword = await bcrypt.hash("123", 10)

        for (const name of employees) {

            const email = `${name.toLowerCase()}@company.com`

            await pool.query(`
                INSERT INTO users
                (first_name, email, password_hash, role)
                VALUES ($1, $2, $3, $4)
                ON CONFLICT(email) DO NOTHING
            `, [
                name,
                email,
                userPassword,
                "employee"
            ])
        }

        console.log("Users added successfully!")


        // =========================
        // GET EMPLOYEE IDS
        // =========================

        const employeeResult = await pool.query(`
            SELECT id, first_name
            FROM users
            WHERE role = 'employee'
            ORDER BY id
        `)

        const employeeMap = {}

        for (const employee of employeeResult.rows) {
            employeeMap[employee.first_name] = employee.id
        }


        // =========================
        // CREATE SAMPLE TASKS
        // =========================

        const tasks = [
            {
                title: "Build Login Page",
                description: "Create a responsive login page for the employee portal.",
                category: "Frontend",
                status: "new",
                employee: "Aarav"
            },
            {
                title: "Create Dashboard API",
                description: "Develop REST API endpoints for the employee dashboard.",
                category: "Backend",
                status: "active",
                employee: "Aarav"
            },
            {
                title: "Design Employee Profile",
                description: "Create and finalize the employee profile UI.",
                category: "UI/UX",
                status: "completed",
                employee: "Aarav"
            },
            {
                title: "Fix Navigation Bug",
                description: "Fix the navigation issue in the employee dashboard.",
                category: "Bug Fix",
                status: "failed",
                employee: "Aarav"
            }
        ]


        for (const task of tasks) {

            const employeeId = employeeMap[task.employee]

            if (!employeeId) {
                console.log(`Employee not found: ${task.employee}`)
                continue
            }

            await pool.query(`
                INSERT INTO tasks
                (
                    title,
                    description,
                    task_date,
                    category,
                    status,
                    employee_id
                )
                VALUES ($1, $2, CURRENT_DATE, $3, $4, $5)
            `, [
                task.title,
                task.description,
                task.category,
                task.status,
                employeeId
            ])
        }

        console.log("Tasks added successfully!")

    } catch (error) {

        console.error("Seeding error:", error)

    } finally {

        await pool.end()

    }
}

seedUsers()