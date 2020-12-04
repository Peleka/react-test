import React from 'react'
import s from './Dialogs.module.css'
import { NavLink } from 'react-router-dom'

const DialogItem = (props) => {
  let path = "/dialogs/" + props.id

  return (
      <div className={s.dialog}>
        <NavLink to={path}> {props.name}</NavLink>
      </div>
  )
}

const Message = props => {
  return (
    <div>
      <div className={s.message}>
          {props.message}
        </div>
    </div>
  )
}

const Dialogs = (props) => {
  return (
    <div className={s.dialogs}>
      <div className={s.dialogsItem}>
        <DialogItem name="Dimych" id="1"/>
        <DialogItem name="Kate" id="2"/>
        <DialogItem name="Dan" id="3"/>
        <DialogItem name="Andrey" id="4"/>
        <DialogItem name="Helen" id="5"/>
        <DialogItem name="Anna" id="6"/>
      </div>
      
      <div className={s.messages}>
        <Message message="Hello"/>
        <Message message="Yo"/>
        <Message message="How are you"/>
        <Message message="Ok"/>
        <Message message="And you"/>
        <Message message="Super"/>
      </div>
    </div>
  )
}

export default Dialogs