const employee=[
  {
    "id": 1,
    "email": "john.doe@company.com",
    "password": "123",
    "tasks": [
      {
        "active": true,
        "newTask": true,
        "completed": false,
        "failed": false,
        "taskTitle": "Design Login Page",
        "taskDescription": "Create a modern dark-themed login page for the application.",
        "taskDate": "2026-08-10",
        "category": "Design"
      },
      {
        "active": false,
        "newTask": false,
        "completed": true,
        "failed": false,
        "taskTitle": "Create Navbar",
        "taskDescription": "Build a responsive navigation bar for the employee dashboard.",
        "taskDate": "2026-08-05",
        "category": "Development"
      },
      {
        "active": true,
        "newTask": false,
        "completed": false,
        "failed": false,
        "taskTitle": "Fix Dashboard UI",
        "taskDescription": "Fix alignment and spacing issues in the employee dashboard.",
        "taskDate": "2026-08-12",
        "category": "Bug Fix"
      },
      {
        "active": false,
        "newTask": false,
        "completed": false,
        "failed": true,
        "taskTitle": "API Documentation",
        "taskDescription": "Prepare documentation for the employee management APIs.",
        "taskDate": "2026-08-01",
        "category": "Documentation"
      }
    ]
  },
  {
    "id": 2,
    "email": "emily.smith@company.com",
    "password": "123",
    "tasks": [
      {
        "active": true,
        "newTask": true,
        "completed": false,
        "failed": false,
        "taskTitle": "Employee Profile UI",
        "taskDescription": "Design the employee profile section with personal and work details.",
        "taskDate": "2026-08-11",
        "category": "Design"
      },
      {
        "active": false,
        "newTask": false,
        "completed": true,
        "failed": false,
        "taskTitle": "Create Employee Card",
        "taskDescription": "Create reusable employee cards for the admin dashboard.",
        "taskDate": "2026-08-04",
        "category": "Development"
      },
      {
        "active": true,
        "newTask": false,
        "completed": false,
        "failed": false,
        "taskTitle": "Add Search Functionality",
        "taskDescription": "Implement employee search functionality in the admin dashboard.",
        "taskDate": "2026-08-13",
        "category": "Development"
      },
      {
        "active": false,
        "newTask": false,
        "completed": true,
        "failed": false,
        "taskTitle": "Update Documentation",
        "taskDescription": "Update the project documentation with the latest features.",
        "taskDate": "2026-08-06",
        "category": "Documentation"
      }
    ]
  },
  {
    "id": 3,
    "email": "michael.brown@company.com",
    "password": "123",
    "tasks": [
      {
        "active": true,
        "newTask": true,
        "completed": false,
        "failed": false,
        "taskTitle": "Build Task API",
        "taskDescription": "Develop API endpoints for creating and updating employee tasks.",
        "taskDate": "2026-08-14",
        "category": "Development"
      },
      {
        "active": false,
        "newTask": false,
        "completed": true,
        "failed": false,
        "taskTitle": "Database Setup",
        "taskDescription": "Set up the database structure for employees and tasks.",
        "taskDate": "2026-08-03",
        "category": "Database"
      },
      {
        "active": false,
        "newTask": false,
        "completed": false,
        "failed": true,
        "taskTitle": "Authentication Module",
        "taskDescription": "Implement authentication and role-based access control.",
        "taskDate": "2026-08-02",
        "category": "Development"
      },
      {
        "active": true,
        "newTask": false,
        "completed": false,
        "failed": false,
        "taskTitle": "Fix Login Bug",
        "taskDescription": "Investigate and fix the login validation issue.",
        "taskDate": "2026-08-09",
        "category": "Bug Fix"
      }
    ]
  },
  {
    "id": 4,
    "email": "sarah.wilson@company.com",
    "password": "123",
    "tasks": [
      {
        "active": true,
        "newTask": true,
        "completed": false,
        "failed": false,
        "taskTitle": "Create Reports Page",
        "taskDescription": "Build the reports page for managers to monitor employee performance.",
        "taskDate": "2026-08-15",
        "category": "Development"
      },
      {
        "active": false,
        "newTask": false,
        "completed": true,
        "failed": false,
        "taskTitle": "Design Reports",
        "taskDescription": "Create the UI design for employee performance reports.",
        "taskDate": "2026-08-07",
        "category": "Design"
      },
      {
        "active": true,
        "newTask": false,
        "completed": false,
        "failed": false,
        "taskTitle": "Test Task Filters",
        "taskDescription": "Test filtering tasks by category, priority and status.",
        "taskDate": "2026-08-12",
        "category": "Testing"
      },
      {
        "active": false,
        "newTask": false,
        "completed": true,
        "failed": false,
        "taskTitle": "Write User Guide",
        "taskDescription": "Prepare a basic user guide for employees using the system.",
        "taskDate": "2026-08-05",
        "category": "Documentation"
      }
    ]
  },
  {
    "id": 5,
    "email": "david.lee@company.com",
    "password": "123",
    "tasks": [
      {
        "active": true,
        "newTask": true,
        "completed": false,
        "failed": false,
        "taskTitle": "Optimize Dashboard",
        "taskDescription": "Improve dashboard loading speed and component performance.",
        "taskDate": "2026-08-16",
        "category": "Performance"
      },
      {
        "active": false,
        "newTask": false,
        "completed": true,
        "failed": false,
        "taskTitle": "Create Task Table",
        "taskDescription": "Build the task list table for the admin dashboard.",
        "taskDate": "2026-08-06",
        "category": "Development"
      },
      {
        "active": true,
        "newTask": false,
        "completed": false,
        "failed": false,
        "taskTitle": "Add Task Filters",
        "taskDescription": "Add filters for task status, category and assigned employee.",
        "taskDate": "2026-08-13",
        "category": "Development"
      },
      {
        "active": false,
        "newTask": false,
        "completed": false,
        "failed": true,
        "taskTitle": "Mobile Responsive Design",
        "taskDescription": "Make the dashboard responsive for mobile devices.",
        "taskDate": "2026-08-04",
        "category": "Design"
      },
      {
        "active": true,
        "newTask": false,
        "completed": false,
        "failed": false,
        "taskTitle": "Fix Task Status",
        "taskDescription": "Fix incorrect task status updates in the employee dashboard.",
        "taskDate": "2026-08-11",
        "category": "Bug Fix"
      }
    ]
  }
];
const admin=[
  {
    "id": 1,
    "email": "admin@company.com",
    "password": "123"
  }
];
export const setLocalStorage=()=>{
localStorage.setItem('employee',JSON.stringify(employee))
localStorage.setItem('admin',JSON.stringify(admin))
}
export const getLocalStorage=()=>{
const employee=JSON.parse(localStorage.getItem('employee'))
const admin=JSON.parse(localStorage.getItem('admin'))
return {employee,admin}
}