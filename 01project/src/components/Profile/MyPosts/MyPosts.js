import React from 'react'
import s from './MyPosts.module.css'
import Post from './Post/Post'

const MyPosts = props => {
  let postsElements = props.posts.map( p => <Post message={p.message} countLike={p.countLike} />)


  let newPost = React.createRef()

  let addPost = () => {
    let post = newPost.current.value;
    props.addPost(post);
    newPost.current.value = ''
  }


  return (
    <div className={s.MyPosts}>
      <textarea ref={ newPost }></textarea>
      <button onClick={ addPost }>Add new post</button>
      My posts
      { postsElements }
    </div>
  )
}

export default MyPosts