import React from 'react'
import Main_Button from '../../components/Main_Button/Main_Button'
import Main_input from '../../components/Main_Input/Main_input'
import './Login.css'

const Login = () => {
  return (
    <div className="login_container">
      <h1 className="login_title">Money Tracker</h1>
      <Main_input lbl_text="Username" inpt_idname="username" inpt_type="text" className="main_input_container--login"/>
      <Main_input lbl_text="Password" inpt_idname="password" inpt_type="password" className="main_input_container--login"/>
      <Main_Button>Log in</Main_Button>
    </div>
  )
}

export default Login