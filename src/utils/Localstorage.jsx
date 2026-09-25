import { jsxs } from "react/jsx-runtime";

const employee=[
  {
    "id": 1,
    "name":"Rechal Qaiser",
    "email": "rechal@me.com",
    "password": "123",
    "tasks": [
      {
        "active": true,
        "newTask": true,
        "completed": false,
        "failed": false,
        "taskTitle": "Build Login Page",
        "taskDescription": "Create a responsive login page using React and Tailwind CSS.",
        "taskDate": "2026-09-23",
        "category": "Development"
      },
      {
        "active": true,
        "newTask": false,
        "completed": false,
        "failed": false,
        "taskTitle": "Create Navbar",
        "taskDescription": "Build a responsive navigation bar for the employee dashboard.",
        "taskDate": "2026-09-24",
        "category": "UI Development"
      },
      {
        "active": false,
        "newTask": false,
        "completed": true,
        "failed": false,
        "taskTitle": "Design Dashboard",
        "taskDescription": "Create the initial dashboard layout and task statistics cards.",
        "taskDate": "2026-09-20",
        "category": "Design"
      },
      {
        "active": false,
        "newTask": false,
        "completed": false,
        "failed": true,
        "taskTitle": "API Integration",
        "taskDescription": "Connect the dashboard with the employee task API.",
        "taskDate": "2026-09-18",
        "category": "Backend"
      }
    ]
  },
  {
    "id": 2,
    "name":"Qaiser Masih",
    "email": "qaiser@me.com",
    "password": "123",
    "tasks": [
      {
        "active": true,
        "newTask": true,
        "completed": false,
        "failed": false,
        "taskTitle": "Create User Cards",
        "taskDescription": "Build reusable employee cards for the dashboard.",
        "taskDate": "2026-09-23",
        "category": "Frontend"
      },
      {
        "active": true,
        "newTask": false,
        "completed": false,
        "failed": false,
        "taskTitle": "Fix Responsive Layout",
        "taskDescription": "Make the dashboard work properly on tablets and mobile devices.",
        "taskDate": "2026-09-25",
        "category": "UI Development"
      },
      {
        "active": false,
        "newTask": false,
        "completed": true,
        "failed": false,
        "taskTitle": "Create Footer",
        "taskDescription": "Build and style the website footer.",
        "taskDate": "2026-09-19",
        "category": "Frontend"
      }
    ]
  },
  {
    "id": 3,
    "name":"Shanzay Qaiser",
    "email": "shanzay@me.com",
    "password": "123",
    "tasks": [
      {
        "active": true,
        "newTask": true,
        "completed": false,
        "failed": false,
        "taskTitle": "Product Page",
        "taskDescription": "Develop the product details page with responsive design.",
        "taskDate": "2026-09-24",
        "category": "Development"
      },
      {
        "active": true,
        "newTask": false,
        "completed": false,
        "failed": false,
        "taskTitle": "Search Feature",
        "taskDescription": "Add search functionality to the product listing.",
        "taskDate": "2026-09-26",
        "category": "JavaScript"
      },
      {
        "active": false,
        "newTask": false,
        "completed": true,
        "failed": false,
        "taskTitle": "Setup React Router",
        "taskDescription": "Configure routes for all major application pages.",
        "taskDate": "2026-09-20",
        "category": "React"
      },
      {
        "active": false,
        "newTask": false,
        "completed": false,
        "failed": true,
        "taskTitle": "Fix Authentication",
        "taskDescription": "Resolve issues with the login authentication flow.",
        "taskDate": "2026-09-17",
        "category": "Bug Fix"
      },
      {
        "active": true,
        "newTask": true,
        "completed": false,
        "failed": false,
        "taskTitle": "Create Profile Page",
        "taskDescription": "Build the employee profile page with editable information.",
        "taskDate": "2026-09-28",
        "category": "Frontend"
      }
    ]
  },
  {
    "id": 4,
    "name":"Zoya Javed",
    "email": "zoya@me.com",
    "password": "123",
    "tasks": [
      {
        "active": true,
        "newTask": true,
        "completed": false,
        "failed": false,
        "taskTitle": "Create Landing Page",
        "taskDescription": "Develop a modern landing page for the new application.",
        "taskDate": "2026-09-23",
        "category": "Design"
      },
      {
        "active": true,
        "newTask": false,
        "completed": false,
        "failed": false,
        "taskTitle": "Add Animations",
        "taskDescription": "Add smooth animations to the dashboard components.",
        "taskDate": "2026-09-27",
        "category": "Animation"
      },
      {
        "active": false,
        "newTask": false,
        "completed": true,
        "failed": false,
        "taskTitle": "Create Buttons",
        "taskDescription": "Create reusable button components for the application.",
        "taskDate": "2026-09-18",
        "category": "UI"
      },
      {
        "active": false,
        "newTask": false,
        "completed": false,
        "failed": true,
        "taskTitle": "Fix Mobile Menu",
        "taskDescription": "Fix the navigation menu issue on mobile devices.",
        "taskDate": "2026-09-16",
        "category": "Bug Fix"
      },
      {
        "active": true,
        "newTask": false,
        "completed": false,
        "failed": false,
        "taskTitle": "Testing Dashboard",
        "taskDescription": "Test dashboard components and identify UI issues.",
        "taskDate": "2026-09-29",
        "category": "Testing"
      },
      {
        "active": false,
        "newTask": false,
        "completed": true,
        "failed": false,
        "taskTitle": "Setup Project",
        "taskDescription": "Initialize the React project and configure Tailwind CSS.",
        "taskDate": "2026-09-15",
        "category": "Setup"
      }
    ]
  },
  {
    "id": 5,
    "name":"Diya Javed",
    "email": "diya@me.com",
    "password": "123",
    "tasks": [
      {
        "active": true,
        "newTask": true,
        "completed": false,
        "failed": false,
        "taskTitle": "Build Task Form",
        "taskDescription": "Create a form for managers to create and assign new tasks.",
        "taskDate": "2026-09-23",
        "category": "React"
      },
      {
        "active": true,
        "newTask": false,
        "completed": false,
        "failed": false,
        "taskTitle": "Task Card UI",
        "taskDescription": "Create responsive task cards for the employee dashboard.",
        "taskDate": "2026-09-25",
        "category": "UI Development"
      },
      {
        "active": false,
        "newTask": false,
        "completed": true,
        "failed": false,
        "taskTitle": "Create Statistics",
        "taskDescription": "Create task statistics showing active and completed tasks.",
        "taskDate": "2026-09-19",
        "category": "Dashboard"
      },
      {
        "active": true,
        "newTask": true,
        "completed": false,
        "failed": false,
        "taskTitle": "Add Logout",
        "taskDescription": "Implement the logout button in the employee navigation.",
        "taskDate": "2026-09-24",
        "category": "Authentication"
      },
      {
        "active": false,
        "newTask": false,
        "completed": false,
        "failed": true,
        "taskTitle": "Fix Task Counter",
        "taskDescription": "Fix the task statistics counter in the dashboard.",
        "taskDate": "2026-09-17",
        "category": "Bug Fix"
      }
    ]
  }
]

const admin=[
  {
    "id": 1,
     "name":"Nabeel Pervaiz",
    "email": "admin1@me.com",
    "password": "123",
    "role": "admin"
  },
   {
    "id": 2,
    "name":"Nabeel Fronted Developer",
    "email": "admin2@me.com",
    "password": "123",
    "role": "admin"
  }
]


export  const SetData=()=>{
 localStorage.setItem('Employee',JSON.stringify(employee));
 localStorage.setItem('Admin',JSON.stringify(admin))
}
export const GetData=()=>{
 const employee =JSON.parse(localStorage.getItem('Employee'));
 const admin=JSON.parse(localStorage.getItem('Admin'));


 return {employee , admin}
 console.log(employee,admin);

}