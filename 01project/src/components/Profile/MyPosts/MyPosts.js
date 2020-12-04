import React from 'react'
import s from './MyPosts.module.css'
import Post from './Post/Post'

const MyPosts = () => {
  return (
    <div className={s.MyPosts}>
      <textarea></textarea>
      <button>Add new post</button>
      My posts
     <Post 
       message = "Hello"
       countLike="0"
     />
     <Post 
       message = "How are you?"
       countLike= "35"
     />
    </div>
  )
}

export default MyPosts