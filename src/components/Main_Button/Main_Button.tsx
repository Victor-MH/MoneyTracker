import React from 'react'
import './Main_Button.scss'

const Main_Button = ({children}) => {
  return (
    <>
        <button className="main_btn">{children}</button>
    </>
  )
}

export default Main_Button