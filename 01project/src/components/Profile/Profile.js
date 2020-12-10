import React from 'react'
import MyPosts from './MyPosts/MyPosts'
import ProfileInfo from './ProfileInfo/ProfileInfo'

const Profile = props => {

return (
    <main>
      <ProfileInfo />
      <MyPosts
        posts={props.state.posts}
        newPostText={ props.state.newPostText }
        addPost={props.addPost}
        updateNewPostText={props.updateNewPostText}
      />
    </main>
  )
}

export default Profile