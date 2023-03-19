


import React from 'react'
import ReactDOM from 'react-dom/client'
import { Header } from './components/header/Header'
import { Separator } from './components/separator/Separator'
import { SideBar } from './components/sideBar/SideBar'
import { Tweet } from './components/tweet/Tweet'

import './global.css'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <div className='layout'>
      <SideBar />

      <div className="content">
        <main className='timeline'>

          <Header title='Home' />

          <form className='new-tweet-form'>
            <label htmlFor="tweet">
              <img src="https://github.com/Arttanjeiro.png" alt="Arthur Sousa" />
              <textarea id='tweet' placeholder="What's happening? " />
            </label>

            <button type='submit'> Tweet</button>
          </form>

          <Separator />

          <Tweet />
          <Tweet />

        </main>
      </div>
    </div>

  </React.StrictMode>,
)
