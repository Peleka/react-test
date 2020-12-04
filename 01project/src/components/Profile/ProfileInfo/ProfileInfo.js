import React from 'react'
import s from './ProfileInfo.module.css'


const ProfileInfo = props => {
  return (
    <div>
      <img className={s.img} src="data:image/jpeg;base64,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" />
      <div className={s.description}>
        <img className={s.ava} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSW1CGXLCQYZqiVDLnTkeQL8EO9MdFZxs7Uew&usqp=CAU" />
        <div >
          <p className={s.profile}>Name</p>
          <ul className={s.profile}>
            <li>Data of birth: 2 january</li>
            <li>City: Minsk</li>
            <li>Education: BSU '11</li>
            <li>Web Site: https://it-kam.com</li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default ProfileInfo