# Employee Management System

A full-stack Employee Management System built with React, Node.js, Express.js, and PostgreSQL. The application provides separate dashboards for administrators and employees, with JWT authentication, role-based authorization, and complete task management.

## 🔗 Live Demo

Coming soon...

## 📌 About The Project

The Employee Management System is a full-stack web application designed to simplify task assignment and employee task tracking.

Administrators can create, assign, edit, delete, and monitor tasks, while employees can view their assigned tasks and update their task status.

The application uses a REST API architecture with PostgreSQL as the database and JWT-based authentication for secure access.

---

## 🚀 Features

### 👨‍💼 Admin Dashboard

- Create new tasks
- Assign tasks to employees
- View all tasks
- View assigned employee details
- Edit tasks
- Delete tasks
- Track task status
- Manage tasks from a centralized dashboard

### 👨‍💻 Employee Dashboard

- View assigned tasks
- Accept new tasks
- Mark tasks as active
- Mark tasks as completed
- Mark tasks as failed
- View task statistics
- Track personal task progress

### 🔐 Authentication & Authorization

- JWT-based authentication
- Secure password hashing using bcrypt
- Separate Admin and Employee roles
- Role-based API authorization
- Protected API routes
- Token-based authentication

---

## 🛠️ Tech Stack

### Frontend

- React.js
- JavaScript
- Tailwind CSS
- Vite
- Lucide React

### Backend

- Node.js
- Express.js
- REST API
- PostgreSQL
- pg
- JWT
- bcrypt
- CORS
- dotenv

---

## 🏗️ System Architecture

```text
React Frontend
      │
      │ HTTP / REST API
      ▼
Node.js + Express.js
      │
      │ SQL Queries
      ▼
PostgreSQL Database
```

---

## 🗄️ Database

### Users

```text
users
├── id
├── first_name
├── email
├── password_hash
├── role
└── created_at
```

### Tasks

```text
tasks
├── id
├── title
├── description
├── task_date
├── category
├── status
├── employee_id
└── created_at
```

### Task Status

- New
- Active
- Completed
- Failed

---

## 🔌 API Endpoints

### Authentication

```text
POST /api/auth/login
```

### Tasks

```text
GET    /api/tasks
POST   /api/tasks
PUT    /api/tasks/:id
DELETE /api/tasks/:id
```

### Employee Tasks

```text
GET   /api/tasks/my-tasks
PATCH /api/tasks/:id/status
```

### Employees

```text
GET /api/tasks/employees
```

---

## 🔐 Security

- JWT authentication
- bcrypt password hashing
- Role-based authorization
- Protected API routes
- Parameterized PostgreSQL queries
- Environment variables for sensitive data

---

## ⚙️ Installation

### 1. Clone the repository

```bash
git clone https://github.com/ameyy02/Employee-Management-System.git
cd Employee-Management-System
```

### 2. Install frontend dependencies

```bash
npm install
```

### 3. Install backend dependencies

```bash
cd backend
npm install
```

### 4. Configure environment variables

Create a `.env` file inside the `backend` folder:

```env
PORT=5000
DATABASE_URL=your_postgresql_connection_string
JWT_SECRET=your_jwt_secret
```

### 5. Start the backend

```bash
cd backend
npm run dev
```

### 6. Start the frontend

Open another terminal in the project root:

```bash
npm run dev
```

---

## 🔮 Future Improvements

- Real-time task updates
- Task search and filtering
- Employee profile management
- Admin analytics
- Email notifications
- Password reset
- Production deployment
- Improved mobile responsiveness

---

## 🚀 Deployment

```text
Frontend → Vercel
Backend  → Render
Database → PostgreSQL
```

Live deployment link will be added after deployment.

---

## 👨‍💻 Author

**Amey Pawar**

GitHub: https://github.com/ameyy02