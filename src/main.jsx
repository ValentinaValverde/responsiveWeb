import React from 'react'
import ReactDOM from 'react-dom/client'
import { 
  createBrowserRouter, 
  RouterProvider ,
} from 'react-router-dom'
import './index.css'

//routes:
import Error  from './routes/error'
import Nav from './routes/nav'
import Home from './routes/homePage'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Nav />,
    errorElement: <Error />,
    children: [
      {
        index: true,
        element: <Home />,
      }
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  
  <React.StrictMode>
      <RouterProvider router={router} />
  </React.StrictMode>,
);