const API_URL = "http://localhost:5000/api";
export const getMyTasks= async()=>{
    const token=localStorage.getItem("token");
    const response=await fetch(`${API_URL}/tasks/my-tasks`,
        {
            method:"GET",
            headers:{
                Authorization:`Bearer ${token}`
            }
        }
    )
    const data=await response.json()
    if(!response.ok){
        throw new Error(data.message||"failed");
    }
    return data;
}
export const updateTaskStatus = async (taskId, status) => {

    const token = localStorage.getItem("token");

    const response = await fetch(
        `${API_URL}/tasks/${taskId}/status`,
        {
            method: "PATCH",

            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${token}`
            },

            body: JSON.stringify({
                status
            })
        }
    );

    const data = await response.json();

    if (!response.ok) {
        throw new Error(
            data.message || "Failed to update task"
        );
    }

    return data;
};
export const createTask=async(taskData)=>{
     const token = localStorage.getItem("token");

    const response = await fetch(
        `${API_URL}/tasks`,
        {
            method: "POST",

            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${token}`
            },

            body: JSON.stringify(
                taskData
            )
        }
    );
    const data=await response.json()
    if(!response.ok){
        throw new Error(
            data.message || "Failed to create task"
        );
    }
    return data
}
export const getAllTasks = async () => {

    const token = localStorage.getItem("token");

    const response = await fetch(
        `${API_URL}/tasks`,
        {
            method: "GET",
            headers: {
                Authorization: `Bearer ${token}`
            }
        }
    );

    const data = await response.json();

    if (!response.ok) {
        throw new Error(
            data.message || "Failed to fetch tasks"
        );
    }

    return data;
};

export const getEmployees = async () => {

    const token = localStorage.getItem("token");

    const response = await fetch(
        `${API_URL}/tasks/employees`,
        {
            method: "GET",
            headers: {
                Authorization: `Bearer ${token}`
            }
        }
    );

    const data = await response.json();

    if (!response.ok) {
        throw new Error(
            data.message || "Failed to fetch employees"
        );
    }

    return data;
};
export const deleteTask = async (taskId) => {
    const token = localStorage.getItem("token");

    const response = await fetch(`${API_URL}/tasks/${taskId}`, {
        method: "DELETE",
        headers: {
            Authorization: `Bearer ${token}`
        }
    });

    const data = await response.json();

    if (!response.ok) {
        throw new Error(data.message || "Failed to delete task");
    }

    return data;
};
export const updateTask = async (taskId, taskData) => {
    const token = localStorage.getItem("token");

    const response = await fetch(`${API_URL}/tasks/${taskId}`, {
        method: "PUT",
        headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`
        },
        body: JSON.stringify(taskData)
    });

    const data = await response.json();

    if (!response.ok) {
        throw new Error(data.message || "Failed to update task");
    }

    return data;
};
