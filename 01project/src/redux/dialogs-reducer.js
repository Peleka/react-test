const CHANGE_MESSAGE_BODY = 'CHANGE-MESSAGE-BODY'
const SEND_MESSAGE = 'SEND_MESSAGE'

let initialState = {
  dialogsData: [
    { name: "Dimych", id: 1, img: "https://i.pinimg.com/originals/53/95/8b/53958ba4b2181dd9165f956bf574877d.jpg"},
    { name: "Kate", id: 2, img: "https://avatarko.ru/img/kartinka/31/zhivotnye_ptica_30474.jpg"},
    { name: "Dan", id: 3, img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ8PfR93F19bRdIBQuXkH0dQ0MlKiTR5pn2Wg&usqp=CAU"},
    { name: "Andrey", id: 4, img: "https://i.pinimg.com/originals/53/95/8b/53958ba4b2181dd9165f956bf574877d.jpg"},
    { name: "Helen", id: 5, img: "https://i.pinimg.com/originals/53/95/8b/53958ba4b2181dd9165f956bf574877d.jpg"},
    { name: "Anna", id: 6, img: "https://i.pinimg.com/originals/53/95/8b/53958ba4b2181dd9165f956bf574877d.jpg"}
  ],
  messageData: [
    {message : "Hello", id: 1},
    {message : "Hi", id: 1},
    {message : "How are you", id: 1},
    {message : "Yo", id: 1},
    {message : "No", id: 1},
    {message : "Yo", id: 1}
  ],
  newMessageText: ''
}

const dialogsReducer = (state = initialState, action) => {

  switch (action.type) {
    case CHANGE_MESSAGE_BODY:
      return {
        ...state,
        newMessageText: action.body
      }
    case SEND_MESSAGE:
      let body = state.newMessageText;
      return {
        ...state,
        newMessageText: '',
        messageData: [...state.messageData, {id: 5, message: body}]
      }
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