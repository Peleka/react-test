import React from 'react'
import Dialogs from './Dialogs'
import { addNewMessageBodyCreator, sendMessageCreator } from '../../redux/dialogs-reducer'
import StoreContext from '../../StoreContext';

const DialogsContainer = () => {

  return (
    <StoreContext.Consumer>
     {
       (store) => {
        let state=store.getState()

        let addNewMessageBody = (body) => {
          store.dispatch(addNewMessageBodyCreator(body))
        }
      
        let sendMessage = () => {
          store.dispatch(sendMessageCreator())
        }
         return (
            <Dialogs 
              addNewMessageBody={addNewMessageBody}
              sendMessage={sendMessage}
              newMessageText={state.messagesPage.newMessageText}
              dialogsData={state.messagesPage.dialogsData}
              messageData={state.messagesPage.messageData}
            />
         )
       }
     }
    </StoreContext.Consumer>
  )

  
}

export default DialogsContainer