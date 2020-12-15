import React from 'react'
import s from './Dialogs.module.css'
import DialogItem from './DialogItem/DialogItem'
import Message from './Message/Message'
import { addNewMessageBodyCreator, sendMessageCreator } from '../../redux/dialogs-reducer'


const Dialogs = props => {

  let newMessageBody = props.state.newMessageText

  let onNewMessageChange = (e) => {
    let body = e.target.value;
    props.dispatch(addNewMessageBodyCreator(body))
  }

  let onSendMessage = () => {
    props.dispatch(sendMessageCreator())
  }

  let dialogsElements = props.state.dialogsData.map( d => <DialogItem name={d.name} id={d.id} img={d.img}/> )

  let messageElements = props.state.messageData.map( m => <Message message={m.message} id={m.id}/> )

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