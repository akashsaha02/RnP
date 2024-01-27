import React from 'react'
import ReactDOM from 'react-dom/client'
import { RouterProvider, createBrowserRouter, createRoutesFromElements, Route } from 'react-router-dom'
// import App from './App.jsx'
import './index.css'
import Login from './components/Login.jsx'
import Signup from './components/Signup.jsx'
import Layout from './Layout.jsx'
import Sidebar from './components/sidebar.jsx'

// const router = createBrowserRouter(
//   createRoutesFromElements(
//       <Route path='/' element={<Layout/>} />
//         <Route path='/' element={<Login/>} />
//         <Route path='/signup' element={<Signup/>} />


//   )
// )

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
