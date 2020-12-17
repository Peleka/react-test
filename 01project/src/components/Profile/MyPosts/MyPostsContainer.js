import React from 'react'
import {updateNewPostActionCreator, addPostActionCreator} from '../../../redux/profile-reducer'
import StoreContext from '../../../StoreContext';
import MyPosts from './MyPosts'


const MyPostsContainer = () => {

  return (
    <StoreContext.Consumer>
      {
        (store) =>  {
          let state = store.getState();

          let addPost = () => {
            store.dispatch(addPostActionCreator());
          }

          let onPostChange = (post) => {
            let action = updateNewPostActionCreator(post)
            store.dispatch(action)
          }

          return (
            <MyPosts 
              updateNewPost = {onPostChange} 
              addPost={addPost}
              posts={state.profilePage.posts}
              newPostText={state.profilePage.newPostText}
            />
          )
        }
      }
    </StoreContext.Consumer>
  )
}

export default MyPostsContainer