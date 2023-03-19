


import React from 'react'
import ReactDOM from 'react-dom/client'
import { RouterProvider } from 'react-router-dom'
import { SideBar } from './components/sideBar/SideBar'

import './global.css'
import { route } from './routes'



ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <div className='layout'>
      <SideBar />

      <div className="content">
          <RouterProvider router= {route}/>
        
      </div>
    </div>

  </React.StrictMode>,
)
