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
    firstName: "Priya",
    email: "priya@company.com",
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
        taskDate: "Aug 06",
        category: "Documentation"
      }
    ]
  },

  {
    id: 3,
    firstName: "Rohan",
    email: "rohan@company.com",
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
        taskDate: "Aug 02",
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
        taskDate: "Aug 09",
        category: "Bug Fix"
      }
    ]
  },

  {
    id: 4,
    firstName: "Sneha",
    email: "sneha@company.com",
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
        taskDate: "Aug 07",
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
        taskDate: "Aug 05",
        category: "Documentation"
      }
    ]
  },

  {
    id: 5,
    firstName: "Aditya",
    email: "aditya@company.com",
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
        taskDate: "Aug 06",
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
        taskDate: "Aug 04",
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
  }
];

const admin = [
  {
    id: 1,
    email: "admin@company.com",
    password: "123"
  }
];

export const setLocalStorage = () => {
    if (!localStorage.getItem("employee")) {
        localStorage.setItem("employee", JSON.stringify(employee));
    }

    if (!localStorage.getItem("admin")) {
        localStorage.setItem("admin", JSON.stringify(admin));
    }
}

export const getLocalStorage = () => {
    const employee = JSON.parse(localStorage.getItem("employee"));
    const admin = JSON.parse(localStorage.getItem("admin"));

    return { employee, admin };
}