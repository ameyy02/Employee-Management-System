import {pool} from '../db.js'
export const createTask=async (req,res)=>{
    try{
        const{
            title,
            description,
            task_date,
            category,
            employee_id
        }=req.body;
        if(!title || !employee_id){
            return res.status(400).json({
                message:"title and employee id are required"
            })
        }
        const employeeResult=await pool.query(`
            SELECT id,first_name,role
            FROM users
            WHERE id=$1`,[employee_id]);
        if(employeeResult.rows.length==0){
            return res.status(404).json({
                message:"employee not found"
            })
        }
        const employee=employeeResult.rows[0];
        if(employee.role!="employee"){
            return res.status(404).json({
                message:"task can only be assigned to employees"
            })
        }
        const result=await pool.query(`
            INSERT INTO tasks(title,
            description,
            task_date,
            category,
            status,
            employee_id)
            VALUES ($1,$2,$3,$4,$5,$6) RETURNING *
            `,[title,description||null,task_date||null,category || null,"new",employee_id]);
              return res.status(201).json({
            message: "Task created successfully",
            task: result.rows[0]
        });
    }catch(error){
        console.error("Create task error:", error);

        return res.status(500).json({
            message: "Internal server error"
        });
    }
}
export const getMyTasks = async (req, res) => {
    try {
        const employeeId = req.user.id;

        const result = await pool.query(
            `SELECT 
                id,
                title,
                description,
                task_date,
                category,
                status,
                employee_id,
                created_at
             FROM tasks
             WHERE employee_id = $1
             ORDER BY created_at DESC`,
            [employeeId]
        );

        return res.json({
            message: "Tasks fetched successfully",
            tasks: result.rows
        });

    } catch (error) {
        console.error("Get my tasks error:", error);

        return res.status(500).json({
            message: "Internal server error"
        });
    }
};
export const updateTaskStatus= async(req,res)=>{
    try{
        const {id}=req.params;
    const {status}=req.body;
    const allowedStatuses=["new","active","completed","failed"]
    if(!allowedStatuses.includes(status)){
        return res.status(400).json({
            message:"invalid task status"
        })
    }
    const result=await pool.query(`
        SELECT * FROM tasks where id=$1
        `,[id])
    if(result.rows.length===0){
        return res.status(404).json({
            message:"task not found"
        })
    }
    const task=result.rows[0]
    if(task.employee_id!==req.user.id){
        return res.status(403).json({
            message:"you cannot update this task status"
        })
    }
    const updateTask=await pool.query(`
        UPDATE tasks
        SET status=$1
        WHERE id=$2
        RETURNING *`,[status,id])
        return res.json({
            message: "Task status updated successfully",
            task: updateTask.rows[0]
        });
    }catch(error){
         console.error("Update task status error:", error);

        return res.status(500).json({
            message: "Internal server error"
    })
}
}

export const getAllTasks=async(req,res)=>{
    try{
        const result=await pool.query(`
            SELECT tasks.id,
            tasks.title,
            tasks.description,
            tasks.task_date,
            tasks.category,
            tasks.status,
            tasks.employee_id,
            tasks.created_at,
            users.first_name AS employee_name,
            users.email AS employee_email
            FROM tasks JOIN users 
            ON tasks.employee_id=users.id 
            ORDER BY tasks.created_at DESC
            `);
            return res.json({
                message:"tasks fetched successfully",
                tasks:result.rows
            })
    }catch(error){
        console.error("Get all tasks error:", error);

        return res.status(500).json({
            message: "Internal server error"
        });
    }
}