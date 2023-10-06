import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import Error  from './routes/error'
import { 
  createBrowserRouter, 
  RouterProvider ,
} from 'react-router-dom'
import Nav from './routes/nav'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Nav />,
    errorElement: <Error />,
    // children: [
    //   {
    //     path: '',
    //     element: ,
    //   }
    // ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  
  <React.StrictMode>
      <RouterProvider router={router} />
  </React.StrictMode>,
);