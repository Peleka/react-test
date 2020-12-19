import Dialogs from './Dialogs'
import { addNewMessageBodyCreator, sendMessageCreator } from '../../redux/dialogs-reducer'
import { connect} from 'react-redux'

const mapStateToProps = (state) => {
  return {
    messagesPage: state.messagesPage
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    sendMessage: () => {
      dispatch(sendMessageCreator())
    },
    addNewMessageBody: (body) => {
      dispatch(addNewMessageBodyCreator(body))
    }
  }
}

const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs)

export default DialogsContainer