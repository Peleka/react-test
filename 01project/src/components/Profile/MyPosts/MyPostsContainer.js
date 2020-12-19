
import { connect } from 'react-redux';
import {updateNewPostActionCreator, addPostActionCreator} from '../../../redux/profile-reducer'
import MyPosts from './MyPosts'


const mapStateToProps = (state) => {
  return {
    posts: state.profilePage.posts,
    newPostText: state.profilePage.newPostText
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    updateNewPost: (post) => {
      dispatch(updateNewPostActionCreator(post))
    }, 
    addPost: () => {
      dispatch(addPostActionCreator())
    }
  }
}

const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts)

export default MyPostsContainer