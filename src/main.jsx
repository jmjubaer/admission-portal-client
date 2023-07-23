import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Main from './Layout/Main.jsx'
import Login from './pages/Authentication/Login'
import AuthProvider from './Provider/AuthProvider'
import SignUp from './pages/Authentication/SignUp'
import Home from './pages/Home/Home'
import Profiles from './pages/Authentication/Profiles'
// import NotFound from './pages/SheredPage/NotFound'
const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    // errorElement: <NotFound/>,
    children: [
      {
        path: "/",
        element: <Home></Home>
      },
      {
        path: "/login",
        element: <Login></Login>
      },
      {
        path: "/signUp",
        element: <SignUp></SignUp>
      },
      {
        path: "/profile",
        element: <Profiles></Profiles>
      },
    ]
  }
])
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
      <AuthProvider>
        <RouterProvider router={router}/>
      </AuthProvider>
  </React.StrictMode>,
)
