const employee = [
    {
        id: 1,
        firstName: "Aarav",
        email: "aarav@company.com",
        password: "123",

        taskNumbers: {
            active: 2,
            newTask: 1,
            completed: 1,
            failed: 1
        },

        tasks: [
            {
                active: true,
                newTask: true,
                completed: false,
                failed: false,
                taskTitle: "Design Login Page",
                taskDescription:
                    "Create a modern dark-themed login page for the application.",
                taskDate: "Aug 10",
                category: "Design"
            },
            {
                active: false,
                newTask: false,
                completed: true,
                failed: false,
                taskTitle: "Create Navbar",
                taskDescription:
                    "Build a responsive navigation bar for the employee dashboard.",
                taskDate: "Aug 5",
                category: "Development"
            },
            {
                active: true,
                newTask: false,
                completed: false,
                failed: false,
                taskTitle: "Fix Dashboard UI",
                taskDescription:
                    "Fix alignment and spacing issues in the employee dashboard.",
                taskDate: "Aug 12",
                category: "Bug Fix"
            },
            {
                active: false,
                newTask: false,
                completed: false,
                failed: true,
                taskTitle: "API Documentation",
                taskDescription:
                    "Prepare documentation for the employee management APIs.",
                taskDate: "Aug 1",
                category: "Documentation"
            }
        ]
    },

    {
        id: 2,
        firstName: "Neil",
        email: "neil@company.com",
        password: "123",

        taskNumbers: {
            active: 2,
            newTask: 1,
            completed: 2,
            failed: 0
        },

        tasks: [
            {
                active: true,
                newTask: true,
                completed: false,
                failed: false,
                taskTitle: "Employee Profile UI",
                taskDescription:
                    "Design the employee profile section with personal and work details.",
                taskDate: "Aug 1",
                category: "Design"
            },
            {
                active: false,
                newTask: false,
                completed: true,
                failed: false,
                taskTitle: "Create Employee Card",
                taskDescription:
                    "Create reusable employee cards for the admin dashboard.",
                taskDate: "Aug 4",
                category: "Development"
            },
            {
                active: true,
                newTask: false,
                completed: false,
                failed: false,
                taskTitle: "Add Search Functionality",
                taskDescription:
                    "Implement employee search functionality in the admin dashboard.",
                taskDate: "Aug 13",
                category: "Development"
            },
            {
                active: false,
                newTask: false,
                completed: true,
                failed: false,
                taskTitle: "Update Documentation",
                taskDescription:
                    "Update the project documentation with the latest features.",
                taskDate: "Aug 6",
                category: "Documentation"
            }
        ]
    },

    {
        id: 3,
        firstName: "Advait",
        email: "advait@company.com",
        password: "123",

        taskNumbers: {
            active: 2,
            newTask: 1,
            completed: 1,
            failed: 1
        },

        tasks: [
            {
                active: true,
                newTask: true,
                completed: false,
                failed: false,
                taskTitle: "Build Task API",
                taskDescription:
                    "Develop API endpoints for creating and updating employee tasks.",
                taskDate: "Aug 14",
                category: "Development"
            },
            {
                active: false,
                newTask: false,
                completed: true,
                failed: false,
                taskTitle: "Database Setup",
                taskDescription:
                    "Set up the database structure for employees and tasks.",
                taskDate: "Aug 13",
                category: "Database"
            },
            {
                active: false,
                newTask: false,
                completed: false,
                failed: true,
                taskTitle: "Authentication Module",
                taskDescription:
                    "Implement authentication and role-based access control.",
                taskDate: "Aug 2",
                category: "Development"
            },
            {
                active: true,
                newTask: false,
                completed: false,
                failed: false,
                taskTitle: "Fix Login Bug",
                taskDescription:
                    "Investigate and fix the login validation issue.",
                taskDate: "Aug 9",
                category: "Bug Fix"
            }
        ]
    },

    {
        id: 4,
        firstName: "Anikhet",
        email: "anikhet@company.com",
        password: "123",

        taskNumbers: {
            active: 2,
            newTask: 1,
            completed: 2,
            failed: 0
        },

        tasks: [
            {
                active: true,
                newTask: true,
                completed: false,
                failed: false,
                taskTitle: "Create Reports Page",
                taskDescription:
                    "Build the reports page for managers to monitor employee performance.",
                taskDate: "Aug 15",
                category: "Development"
            },
            {
                active: false,
                newTask: false,
                completed: true,
                failed: false,
                taskTitle: "Design Reports",
                taskDescription:
                    "Create the UI design for employee performance reports.",
                taskDate: "Aug 7",
                category: "Design"
            },
            {
                active: true,
                newTask: false,
                completed: false,
                failed: false,
                taskTitle: "Test Task Filters",
                taskDescription:
                    "Test filtering tasks by category, priority and status.",
                taskDate: "Aug 12",
                category: "Testing"
            },
            {
                active: false,
                newTask: false,
                completed: true,
                failed: false,
                taskTitle: "Write User Guide",
                taskDescription:
                    "Prepare a basic user guide for employees using the system.",
                taskDate: "Aug 5",
                category: "Documentation"
            }
        ]
    },

    {
        id: 5,
        firstName: "Bhavya",
        email: "bhavya@company.com",
        password: "123",

        taskNumbers: {
            active: 3,
            newTask: 1,
            completed: 1,
            failed: 1
        },

        tasks: [
            {
                active: true,
                newTask: true,
                completed: false,
                failed: false,
                taskTitle: "Optimize Dashboard",
                taskDescription:
                    "Improve dashboard loading speed and component performance.",
                taskDate: "Aug 16",
                category: "Performance"
            },
            {
                active: false,
                newTask: false,
                completed: true,
                failed: false,
                taskTitle: "Create Task Table",
                taskDescription:
                    "Build the task list table for the admin dashboard.",
                taskDate: "Aug 6",
                category: "Development"
            },
            {
                active: true,
                newTask: false,
                completed: false,
                failed: false,
                taskTitle: "Add Task Filters",
                taskDescription:
                    "Add filters for task status, category and assigned employee.",
                taskDate: "Aug 13",
                category: "Development"
            },
            {
                active: false,
                newTask: false,
                completed: false,
                failed: true,
                taskTitle: "Mobile Responsive Design",
                taskDescription:
                    "Make the dashboard responsive for mobile devices.",
                taskDate: "Aug 4",
                category: "Design"
            },
            {
                active: true,
                newTask: false,
                completed: false,
                failed: false,
                taskTitle: "Fix Task Status",
                taskDescription:
                    "Fix incorrect task status updates in the employee dashboard.",
                taskDate: "Aug 11",
                category: "Bug Fix"
            }
        ]
    },

    {
        id: 6,
        firstName: "Dhruvan",
        email: "dhruvan@company.com",
        password: "123",

        taskNumbers: {
            active: 1,
            newTask: 2,
            completed: 1,
            failed: 0
        },

        tasks: [
            {
                active: false,
                newTask: true,
                completed: false,
                failed: false,
                taskTitle: "Create Landing Page",
                taskDescription:
                    "Build a modern landing page for the company website.",
                taskDate: "Aug 18",
                category: "Design"
            },
            {
                active: false,
                newTask: true,
                completed: false,
                failed: false,
                taskTitle: "Update Footer",
                taskDescription:
                    "Update the website footer with useful navigation links.",
                taskDate: "Aug 20",
                category: "Development"
            },
            {
                active: true,
                newTask: false,
                completed: false,
                failed: false,
                taskTitle: "Fix Navigation",
                taskDescription:
                    "Fix navigation issues across the dashboard.",
                taskDate: "Aug 17",
                category: "Bug Fix"
            },
            {
                active: false,
                newTask: false,
                completed: true,
                failed: false,
                taskTitle: "Setup Components",
                taskDescription:
                    "Create reusable UI components for the application.",
                taskDate: "Aug 10",
                category: "Development"
            }
        ]
    },

    {
        id: 7,
        firstName: "Dron",
        email: "dron@company.com",
        password: "123",

        taskNumbers: {
            active: 2,
            newTask: 1,
            completed: 1,
            failed: 1
        },

        tasks: [
            {
                active: true,
                newTask: true,
                completed: false,
                failed: false,
                taskTitle: "Implement Search",
                taskDescription:
                    "Add search functionality to the employee dashboard.",
                taskDate: "Aug 19",
                category: "Development"
            },
            {
                active: true,
                newTask: false,
                completed: false,
                failed: false,
                taskTitle: "Improve Dashboard",
                taskDescription:
                    "Improve the layout and usability of the dashboard.",
                taskDate: "Aug 16",
                category: "UI/UX"
            },
            {
                active: false,
                newTask: false,
                completed: true,
                failed: false,
                taskTitle: "Create Login Form",
                taskDescription:
                    "Create the login form with validation.",
                taskDate: "Aug 8",
                category: "Development"
            },
            {
                active: false,
                newTask: false,
                completed: false,
                failed: true,
                taskTitle: "API Testing",
                taskDescription:
                    "Test the application APIs and identify issues.",
                taskDate: "Aug 7",
                category: "Testing"
            }
        ]
    },

    {
        id: 8,
        firstName: "Ibrahim",
        email: "ibrahim@company.com",
        password: "123",

        taskNumbers: {
            active: 1,
            newTask: 1,
            completed: 2,
            failed: 0
        },

        tasks: [
            {
                active: false,
                newTask: true,
                completed: false,
                failed: false,
                taskTitle: "Create User Dashboard",
                taskDescription:
                    "Build the dashboard interface for application users.",
                taskDate: "Aug 21",
                category: "Development"
            },
            {
                active: true,
                newTask: false,
                completed: false,
                failed: false,
                taskTitle: "Add User Settings",
                taskDescription:
                    "Create settings functionality for user preferences.",
                taskDate: "Aug 18",
                category: "Development"
            },
            {
                active: false,
                newTask: false,
                completed: true,
                failed: false,
                taskTitle: "Design Settings Page",
                taskDescription:
                    "Design a clean settings page for users.",
                taskDate: "Aug 9",
                category: "Design"
            },
            {
                active: false,
                newTask: false,
                completed: true,
                failed: false,
                taskTitle: "Documentation Update",
                taskDescription:
                    "Update documentation for the latest features.",
                taskDate: "Aug 5",
                category: "Documentation"
            }
        ]
    },

    {
        id: 9,
        firstName: "Manan",
        email: "manan@company.com",
        password: "123",

        taskNumbers: {
            active: 2,
            newTask: 1,
            completed: 1,
            failed: 1
        },

        tasks: [
            {
                active: true,
                newTask: true,
                completed: false,
                failed: false,
                taskTitle: "Build Notification System",
                taskDescription:
                    "Create a notification system for important task updates.",
                taskDate: "Aug 22",
                category: "Development"
            },
            {
                active: true,
                newTask: false,
                completed: false,
                failed: false,
                taskTitle: "Improve Task Cards",
                taskDescription:
                    "Improve the design and usability of task cards.",
                taskDate: "Aug 19",
                category: "UI/UX"
            },
            {
                active: false,
                newTask: false,
                completed: true,
                failed: false,
                taskTitle: "Create Status Badges",
                taskDescription:
                    "Create reusable status badges for tasks.",
                taskDate: "Aug 12",
                category: "Design"
            },
            {
                active: false,
                newTask: false,
                completed: false,
                failed: true,
                taskTitle: "Fix Notification Bug",
                taskDescription:
                    "Fix notification display issues.",
                taskDate: "Aug 10",
                category: "Bug Fix"
            }
        ]
    },

    {
        id: 10,
        firstName: "Parth",
        email: "parth@company.com",
        password: "123",

        taskNumbers: {
            active: 2,
            newTask: 1,
            completed: 1,
            failed: 0
        },

        tasks: [
            {
                active: true,
                newTask: true,
                completed: false,
                failed: false,
                taskTitle: "Build Employee Page",
                taskDescription:
                    "Create an employee management page for administrators.",
                taskDate: "Aug 23",
                category: "Development"
            },
            {
                active: true,
                newTask: false,
                completed: false,
                failed: false,
                taskTitle: "Add Employee Search",
                taskDescription:
                    "Add search functionality for employees.",
                taskDate: "Aug 20",
                category: "Development"
            },
            {
                active: false,
                newTask: false,
                completed: true,
                failed: false,
                taskTitle: "Employee Card UI",
                taskDescription:
                    "Design employee cards for the admin dashboard.",
                taskDate: "Aug 11",
                category: "Design"
            }
        ]
    },

    {
        id: 11,
        firstName: "Pranand",
        email: "pranand@company.com",
        password: "123",

        taskNumbers: {
            active: 1,
            newTask: 2,
            completed: 1,
            failed: 1
        },

        tasks: [
            {
                active: false,
                newTask: true,
                completed: false,
                failed: false,
                taskTitle: "Create Analytics Page",
                taskDescription:
                    "Build an analytics dashboard to display task statistics.",
                taskDate: "Aug 24",
                category: "Analytics"
            },
            {
                active: false,
                newTask: true,
                completed: false,
                failed: false,
                taskTitle: "Add Performance Chart",
                taskDescription:
                    "Create charts to display employee performance.",
                taskDate: "Aug 25",
                category: "Analytics"
            },
            {
                active: true,
                newTask: false,
                completed: false,
                failed: false,
                taskTitle: "Task Statistics",
                taskDescription:
                    "Implement statistics for different task statuses.",
                taskDate: "Aug 18",
                category: "Development"
            },
            {
                active: false,
                newTask: false,
                completed: true,
                failed: false,
                taskTitle: "Dashboard Cards",
                taskDescription:
                    "Create dashboard cards for displaying statistics.",
                taskDate: "Aug 12",
                category: "UI/UX"
            },
            {
                active: false,
                newTask: false,
                completed: false,
                failed: true,
                taskTitle: "Chart Integration",
                taskDescription:
                    "Integrate charts into the analytics dashboard.",
                taskDate: "Aug 9",
                category: "Development"
            }
        ]
    },

    {
        id: 12,
        firstName: "Priyaan",
        email: "priyaan@company.com",
        password: "123",

        taskNumbers: {
            active: 2,
            newTask: 1,
            completed: 1,
            failed: 1
        },

        tasks: [
            {
                active: true,
                newTask: true,
                completed: false,
                failed: false,
                taskTitle: "Improve UI Design",
                taskDescription:
                    "Improve the overall visual design of the dashboard.",
                taskDate: "Aug 26",
                category: "UI/UX"
            },
            {
                active: true,
                newTask: false,
                completed: false,
                failed: false,
                taskTitle: "Responsive Layout",
                taskDescription:
                    "Make the dashboard responsive across different screen sizes.",
                taskDate: "Aug 22",
                category: "Design"
            },
            {
                active: false,
                newTask: false,
                completed: true,
                failed: false,
                taskTitle: "Create Mobile Menu",
                taskDescription:
                    "Create a responsive mobile navigation menu.",
                taskDate: "Aug 15",
                category: "Development"
            },
            {
                active: false,
                newTask: false,
                completed: false,
                failed: true,
                taskTitle: "Fix Mobile Layout",
                taskDescription:
                    "Fix layout issues on smaller screen sizes.",
                taskDate: "Aug 13",
                category: "Bug Fix"
            }
        ]
    }
]

const admin = [
    {
        id: 1,
        firstName: "Amey",
        email: "amey@company.com",
        password: "456"
    }
]

export const setLocalStorage = () => {

    if (!localStorage.getItem("employee")) {
        localStorage.setItem(
            "employee",
            JSON.stringify(employee)
        )
    }

    if (!localStorage.getItem("admin")) {
        localStorage.setItem(
            "admin",
            JSON.stringify(admin)
        )
    }
}

export const getLocalStorage = () => {

    const employee = JSON.parse(
        localStorage.getItem("employee")
    )

    const admin = JSON.parse(
        localStorage.getItem("admin")
    )

    return {
        employee,
        admin
    }
}