import React from 'react'
import './Main_Menu.scss'
import ProfilePic from '../../vendor/batman.webp'

const Main_Menu = () => {
  return (
    <nav id='navbar'>
        <div className='menu_title'>
            <button id='menuBtn'>
                <i className='fas fa-bars'></i>
            </button>

            <h1 className='menu_title-h1'>Portfolio</h1>
        </div>
        <div className='menu_user_img'>
            <img src={ProfilePic} alt="profile-pic" className="user_img" />
        </div>
    </nav>
  )
}

export default Main_Menu