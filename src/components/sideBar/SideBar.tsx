import { Bell, BookmarkSimple, DotsThreeCircle, Envelope, FileText, Hash, House, User } from 'phosphor-react'

import logoTwitter from '../../assets/logo-twitter.svg'
import './SideBar.css'

export function SideBar(){

  return(
    <aside className='sidebar'>

    <img className='logo' src={logoTwitter} alt="logo" />

    <nav className='main-navigation'>
      <a className='active' href="">
        <House weight='fill' />
        home
      </a>
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