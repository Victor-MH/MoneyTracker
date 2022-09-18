import React, { useState } from 'react'
import './Main_Menu.scss'
import ProfilePic from '../../vendor/batman.webp'
import {menuItems, MenuItem} from './menuItems'

const Main_Menu = () => {

  const [menuVisibility, setMenuVisibility] = useState(false);

  const toggleMenu = () => {
    if(menuVisibility == false) {
      setMenuVisibility(true);
    }
    else {
      setMenuVisibility(false);
    }
  }

  return (
    <nav id='navbar'>
        <div className='menu_title'>
            <button id='menuBtn' title='menu' onClick={toggleMenu}>
                <i className={"fas" + (menuVisibility ? " fa-times" : " fa-bars")}></i>
            </button>

            <h1 className='menu_title-h1'>Portfolio</h1>
        </div>
        <div className='menu_user_img'>
            <img src={ProfilePic} alt="profile-pic" className="user_img" />
        </div>
        <ul className={"fullMenu" + (menuVisibility ? " visible" : "")}>
          {
            menuItems.map( (menuItem: MenuItem, index: number) => {
              return(
                <li key={index}>
                  <i className={"fa-solid " + menuItem.icon + " fa-fw"}></i>{menuItem.title}
                </li>
              )
            })
          }
        </ul>
    </nav>
  )
}

export default Main_Menu