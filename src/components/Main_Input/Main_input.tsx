import React from 'react'
import './Main_Input.scss'

const Main_input = (props) => {

  const {className} = props;
  const {lbl_text, inpt_idname, inpt_type} = props;

  return (
    <>
        <div className={"main_input_container " + className} >
            <label htmlFor={inpt_idname} className="main_input_label">{lbl_text}</label>
            <input type={(inpt_type == "text" || inpt_type == "password") ? inpt_type : "text"} name={inpt_idname} id={inpt_idname} className="main_input-text" placeholder={lbl_text} />
        </div>
    </>
  )
}

export default Main_input