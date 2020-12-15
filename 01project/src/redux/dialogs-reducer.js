const CHANGE_MESSAGE_BODY = 'CHANGE-MESSAGE-BODY'
const SEND_MESSAGE = 'SEND_MESSAGE'

const dialogsReducer = (state, action) => {

  switch (action.type) {
    case CHANGE_MESSAGE_BODY:
    state.newMessageText = action.body;
    return state;
    case SEND_MESSAGE:
      let body = state.newMessageText;
    state.newMessageText = '';
    state.messageData.push({id: 5, message: body});
    return state;
    default : return state
  }
}

export const addNewMessageBodyCreator = (body) => {
  return {
    type: CHANGE_MESSAGE_BODY,
    body: body
  }
}

export const sendMessageCreator = () => ({ type: SEND_MESSAGE })


export default dialogsReducer