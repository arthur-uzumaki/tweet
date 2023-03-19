import { Bell, BookmarkSimple, DotsThreeCircle, Envelope, FileText, Hash, House, User } from 'phosphor-react'
import { NavLink } from 'react-router-dom'

import logoTwitter from '../../assets/logo-twitter.svg'
import './SideBar.css'

export function SideBar(){

  return(
    <aside className='sidebar'>

    <img className='logo' src={logoTwitter} alt="logo" />

    <nav className='main-navigation'>
      <NavLink  to="/">
        <House weight='fill' />
        home
      </NavLink>
      <a href="">
        <Hash />
        Explore
      </a>
      <a href="">
        <Bell />
        Notifications

      </a>
      <a href="">
        <Envelope />
        Messages
      </a>


      <a href="">
        <BookmarkSimple />
        Bookmarks
      </a>


      <a href="">
        <FileText />
        List
      </a>


      <a href="">
        <User />
        Profile

      </a>


      <a href="">
        <DotsThreeCircle />
        More
      </a>


    </nav>

    <button className='new-tweet' type='button'>Tweet</button>

  </aside>
  )
}