import React from 'react'
import MyPosts from './MyPosts/MyPosts'
import ProfileInfo from './ProfileInfo/ProfileInfo'
import s from './Profile.module.css'

const Profile = () => {
  return (
    <main>
      <ProfileInfo />
      
      <MyPosts />
    </main>
  )
}

export default Profile