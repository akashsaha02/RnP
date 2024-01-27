import React from 'react'
import ReactDOM from 'react-dom/client'
import { RouterProvider, createBrowserRouter} from 'react-router-dom'
// import App from './App.jsx'
import './index.css'
import Login from './components/Login.jsx'
import Signup from './components/Signup.jsx'
import Layout from './Layout.jsx'
import Sidebar from './components/sidebar.jsx'



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
        element: <Sidebar />
      }
    ]
  }
])
ReactDOM.createRoot(document.getElementById('root')).render(

  < React.StrictMode >
    <RouterProvider router={router} />
  </React.StrictMode >
)
