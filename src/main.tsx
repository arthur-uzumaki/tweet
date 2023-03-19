


import React from 'react'
import ReactDOM from 'react-dom/client'
import { RouterProvider } from 'react-router-dom'

import './global.css'
import { route } from './routes'



ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
   
   <RouterProvider router= {route}/>
  </React.StrictMode>,
)
