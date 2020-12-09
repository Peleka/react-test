import React from 'react'
import s from './../Dialogs.module.css'

const Message = props => {

  let newMessage = React.createRef()

  let addMessage = () => {
    let message = newMessage.current.value
    alert(message)
  }


  return (
    <div>
      <div className={s.message}>
          {props.message}
      </div>
      <textarea ref={ newMessage }></textarea>
      <button onClick = { addMessage }>Add message</button>
    </div>
  )
}

export default Message