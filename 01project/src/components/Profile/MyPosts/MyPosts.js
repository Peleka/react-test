import React from 'react'
import s from './MyPosts.module.css'
import Post from './Post/Post'

const MyPosts = () => {
  return (
    <div className={s.MyPosts}>
      <textarea></textarea>
      <button>Add new post</button>
      My posts
     <Post />
    </div>
  )
}

export default MyPosts