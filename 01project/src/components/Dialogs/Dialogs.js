import React from 'react'
import s from './Dialogs.module.css'
import DialogItem from './DialogItem/DialogItem'
import Message from './Message/Message'


const Dialogs = props => {

  let newMessageBody = props.newMessageText

  let onNewMessageChange = (e) => {
    let body = e.target.value;
    props.addNewMessageBody(body)
  }

  let onSendMessage = () => {
    props.sendMessage()
  }

  let dialogsElements = props.dialogsData.map( d => <DialogItem name={d.name} id={d.id} img={d.img}/> )

  let messageElements = props.messageData.map( m => <Message message={m.message} id={m.id}/> )

  return (
    <div className={s.dialogs}>
      <div className={s.dialogsItem}>
        { dialogsElements }
      </div>
      
      <div className={s.messages}>
        { messageElements } 
        <div>
          <div>
            <textarea onChange={ onNewMessageChange } value={ newMessageBody } placeholder='Enter your message'></textarea>
            <button onClick={ onSendMessage }>New message</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Dialogs