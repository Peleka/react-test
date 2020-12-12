import React from 'react'
import s from './MyPosts.module.css'
import Post from './Post/Post'
import {updateNewPostActionCreator, addPostActionCreator} from './../../../redux/state'


const MyPosts = props => {
  let postsElements = props.posts.map( p => <Post message={p.message} countLike={p.countLike} />)


  let newPost = React.createRef()

  let addPost = () => {
    props.dispatch(addPostActionCreator());
  }

  let onPostChange = () => {
    
    let post = newPost.current.value;
    props.dispatch(updateNewPostActionCreator(post))
  }


  return (
    <div className={s.MyPosts}>
      <textarea onChange={onPostChange} ref={ newPost } value={ props.newPostText }></textarea>
      <button onClick={ addPost }>Add new post</button>
      My posts
      { postsElements }
    </div>
  )
}

export default MyPosts