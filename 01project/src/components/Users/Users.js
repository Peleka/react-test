import s from './Users.module.css'
import React from 'react'

const Users = (props) => {

  if(props.users.length === 0) {
    props.setUsers(  [
      { id: 1, photoUrl: 'https://hypeava.ru/uploads/posts/2019-08/1565965460_1.jpg',
      name: 'Andrew', status: 'iam a boss', followed: true, location: {cityName: 'Minsk', country: 'Belarus'} },
      { id: 2, photoUrl: 'https://hypeava.ru/uploads/posts/2019-08/1565965460_1.jpg',
      name: 'Nasty', status: 'iam a student', followed: false, location: {cityName: 'Moscow', country: 'Russia'} },
      { id: 3, photoUrl: 'https://hypeava.ru/uploads/posts/2019-08/1565965460_1.jpg',
      name: 'Vital', status: 'iam a boss too', followed: true, location: {cityName: 'Kiev', country: 'Ukraine'} }
      ]
    )
  }

  return (
    <div> 
      {
        props.users.map(u => <div key={u.id}>
          <div>
            <img src={u.photoUrl} className={s.photoUser}/>
            <div> {u.followed
             ? <button onClick={()=> {props.unfollow(u.id)}} >Follow</button> 
             : <button onClick={()=> {props.follow(u.id)}} >Unfollow</button>} </div>
          </div>
          <div>
            <p>{u.name}</p>
            {u.status}
          </div>
          <div>
            <p>{u.location.cityName}</p>
            {u.location.country}
          </div>

        </div>)
      }
    </div>
  )
}

export default Users