import React from 'react'
import s from './MyPosts.module.css'
import Post from './Post/Post'

const MyPosts = props => {
  let postsElements = props.posts.map( p => <Post message={p.message} countLike={p.countLike} />)

  return (
    <div className={s.MyPosts}>
      <textarea></textarea>
      <button>Add new post</button>
      My posts
      { postsElements }
    </div>
  )
}

export default MyPosts