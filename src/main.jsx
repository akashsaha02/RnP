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
import Settings from './components/Dashboard/Settings.jsx'
import AccountSetting from './components/Dashboard/AccountSetting.jsx'
import EditProfile from './components/Dashboard/EditProfile.jsx'
import ChangePassword from './components/Dashboard/ChangePassword.jsx'
import DeleteAccount from './components/Dashboard/DeleteAccount.jsx'
import Contact from './components/Dashboard/Contact.jsx'
import Error from './components/Error/Error.jsx'
import Applynow from './components/Applynow/Applynow.jsx'
import EmployeeDetails from './components/Dashboard/EmployeeDetails.jsx'
import PdfViewer from './components/Dashboard/PdfViewer.jsx'
import Certificate from './components/Dashboard/Certificate.jsx'
import ProjectDetails from './components/Dashboard/ProjectDetails.jsx'



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
        path: 'contact-us',
        element: [
          <Sidebar />,
          <Contact />
        ]
      },
      {
        path: 'settings',
        element: [
          <Sidebar />,
          <Settings />
        ]
      },
      {
        path: 'account-settings',
        element: [
          <Sidebar />,
          <AccountSetting />
        ],
      },
      {
        path: 'edit-profile',
        element: [
          <Sidebar />,
          <EditProfile />
        ]
      },
      {
        path: 'change-password',
        element: [
          <Sidebar />,
          <ChangePassword />
        ]
      },
      {
        path: 'delete-account',
        element: [
          <Sidebar />,
          <DeleteAccount />
        ]
      },
      {
        path: 'applynow',
        element: [
          <Sidebar />,
          <Applynow />
        ]
      },
      {
        path: 'employee-details',
        element: [
          <Sidebar />,
          <EmployeeDetails />
        ]
      },
      {
        path: 'pdf-viewer',
        element: [
          <Sidebar />,
          <PdfViewer />
        ]
      },
      {
        path: 'certificate',
        element: [
          <Sidebar />,
          <Certificate />
        ]
      },
      {
        path: 'project-details',
        element: [
          <Sidebar />,
          <ProjectDetails/>
        ]
      }

    ]
  }, {
    path: 'error',
    element: [
      <Error />
    ]
  }

])
ReactDOM.createRoot(document.getElementById('root')).render(

  < React.StrictMode >
    <RouterProvider router={router} />
  </React.StrictMode >
)
