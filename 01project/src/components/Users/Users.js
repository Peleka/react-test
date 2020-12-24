import s from './Users.module.css'
import React from 'react'
import * as axios from 'axios'

class Users extends React.Component {

  componentDidMount() {
    axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`).then(response => {
        this.props.setUsers(response.data.items)
      })
  }

  onPageChanged = (pageNumber) => {
    this.props.setCurrentPage(pageNumber);
    axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize}`)
      .then(response => {
        this.props.setUsers(response.data.items)
    })
    
  }

  render() {

    let pagesCount = Math.ceil(this.props.totalUsersCount / this.props.pageSize) 

    let pages = [];
    for (let i = 1; i <= pagesCount; i++) {
      pages.push(i);
    }

    return (
      <div> 
        <div>
          {pages.map(p => {
            return <span className={this.props.currentPage === p && s.selectPage}
              onClick={(e) => {this.onPageChanged(p)}}>{p}</span>
          })}
        </div>
        {
          this.props.users.map(u => <div key={u.id}>
            <div>
              <img src={u.photos.small != null ? u.photos.small : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQXBNELD15a-c-n8lu4Xw8onqEk-yFOfUiWSw&usqp=CAU"} className={s.photoUser}/>
              <div> {u.followed
               ? <button onClick={()=> {this.props.unfollow(u.id)}} >Follow</button> 
               : <button onClick={()=> {this.props.follow(u.id)}} >Unfollow</button>
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
}

export default Users