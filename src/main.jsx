import React from 'react'
import ReactDOM from 'react-dom/client'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
// import App from './App.jsx'
import './index.css'
import Login from './components/Login/Login.jsx'
import Signup from './components/Signin/Signup.jsx'
import Layout from './Layout.jsx'
import Sidebar from './components/Sidebar/Sidebar.jsx'
import Dashboard from './components/Dashboard/Dashboard.jsx'
import Employee from './components/Dashboard/Employee.jsx'
import Projects from './components/Dashboard/Projects.jsx'
import Termination from './components/Dashboard/Termination.jsx'
import Internship from './components/Dashboard/Internship.jsx'
import Jobs from './components/Dashboard/Jobs.jsx'
import Chat from './components/Dashboard/Chat.jsx'
import Activity from './components/Dashboard/Activity.jsx'



const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        path: '/',
        element: <Login />
      },
      {
        path: 'signup',
        element: <Signup />
      },
      {
        path: 'dashboard',
        element: [
          <Sidebar />,
          <Dashboard />
        ],
      },
      {
        path: 'employee',
        element: [
          <Sidebar />,
          <Employee />
        ]
      },
      {
        path: 'projects',
        element: [
          <Sidebar />,
          <Projects />
        ]
      },
      {
        path: 'termination',
        element: [
          <Sidebar />,
          <Termination />
        ]
      },
      {
        path: 'internships',
        element: [
          <Sidebar />,
          <Internship />
        ]
      },
      {
        path: 'jobs',
        element: [
          <Sidebar />,
          <Jobs />
        ]
      },
      {
        path: 'chat',
        element: [
          <Sidebar />,
          <Chat />
        ]
      },
      {
        path: 'activity',
        element: [
          <Sidebar />,
          <Activity />
        ]
      }

    ]
  }
])
ReactDOM.createRoot(document.getElementById('root')).render(

  < React.StrictMode >
    <RouterProvider router={router} />
  </React.StrictMode >
)
