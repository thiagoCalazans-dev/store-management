import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { createBrowserRouter, Navigate, RouterProvider } from 'react-router-dom'
import { Home } from './routes/home.tsx'
import { Login } from './routes/login.tsx'
import { Layout } from './routes/private/layout.tsx'
import { Dashboard } from './routes/private/dashboard.tsx'
import { Error404 } from './routes/errors/404.tsx'
import { DashboardId } from './routes/private/dashboard-id.tsx'

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home/>,
    errorElement: <Error404/>
  },
     {
    path: "/oldhomepage",
    element: <Navigate to="/"/>,
  },
    {
    path: "/login",
    element: <Login/>,
  },
    {
    path: "/dashboard",
    element: <Layout/>,
    children: [    
  {
    path: "/dashboard",
    element: <Dashboard/>,
  },
    {
    path: "/dashboard/:id",
    element: <DashboardId/>,
  },
]
   },
])

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider router={router}/>
  </StrictMode>,
)
