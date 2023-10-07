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

import AlignContent from './routes/topics/alignContent'
import AlignItems from './routes/topics/alignItems'
import FlexDirection from './routes/topics/direction'
import FlexFlow from './routes/topics/flow'
import JustifyContent from './routes/topics/justify'
import FlexWrap from './routes/topics/wrap'


const router = createBrowserRouter([
  {
    path: '/',
    element: <Nav />,
    errorElement: <Error />,
    children: [
      {
        path: '/',
        element: <Home />,
      },
      {
        path: '/alignContent',
        element: <AlignContent />
      },
      {
        path: '/alignItems',
        element: <AlignItems />
      },
      {
        path: '/flexDirection',
        element: <FlexDirection />
      },
      {
        path: '/flexFlow',
        element: <FlexFlow />
      },
      {
        path: '/justifyContent',
        element: <JustifyContent />
      },
      {
        path: '/flexWrap',
        element: <FlexWrap />
      },
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  
  <React.StrictMode>
      <RouterProvider router={router} />
  </React.StrictMode>,
);