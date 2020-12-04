import React from 'react'
import s from './Post.module.css'

const Post = (props) => {
  return (
    <div className={s.post}>
      <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSW1CGXLCQYZqiVDLnTkeQL8EO9MdFZxs7Uew&usqp=CAU" />
      {props.message}
      <div>
        <span>Like</span>{props.countLike}
      </div>
    </div>
  )
}

export default Post