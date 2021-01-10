import s from './Users.module.css'
import React from 'react'

const Users = (props) => {
  let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize) 

    let pages = [];
    for (let i = 1; i <= pagesCount; i++) {
      pages.push(i);
    }
  return (
    <div> 
        <div>
          {pages.map(p => {
            return <span className={props.currentPage === p && s.selectPage}
              onClick={(e) => {props.onPageChanged(p)}}>{p}</span>
          })}
        </div>
        {
          props.users.map(u => <div key={u.id}>
            <div>
              <img src={u.photos.small != null ? u.photos.small : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQXBNELD15a-c-n8lu4Xw8onqEk-yFOfUiWSw&usqp=CAU"} className={s.photoUser}/>
              <div> {u.followed
               ? <button onClick={()=> {props.unfollow(u.id)}} >Follow</button> 
               : <button onClick={()=> {props.follow(u.id)}} >Unfollow</button>
               } 
              </div>
            </div>
            <div>
              <p>{u.name}</p>
              {u.status}
            </div>
            <div>
              <p>{"u.location.cityName"}</p>
              {"u.location.country"}
            </div>
  
          </div>)
        }
      </div>
  )
}

export default Users