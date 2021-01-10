import React from 'react'
import * as axios from 'axios'
import Users from './Users'
import { connect } from 'react-redux'
import { followAC, unfollowAC, setUsersAC, setCurrentPageAC, setTotalUserCountAC } from '../../redux/users-reducer'

class UsersContainer extends React.Component {

  componentDidMount() {
    axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`).then(response => {
        this.props.setUsers(response.data.items)
        this.props.setTotalUserCount(response.data.totalCount)
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

    return (
      <Users
        currentPage = {this.props.currentPage}
        totalUsersCount = {this.props.totalUsersCount}
        onPageChange = {this.onPageChanged}
        pageSize = {this.props.pageSize}
        users = {this.props.users}
        follow = {this.props.follow}
        unfollow = { this.props.unfollow}
      />
    )
  }
}

const mapStateToProps = (state) => {
  return {
    users: state.usersPage.users,
    pageSize: state.usersPage.pageSize,
    totalUsersCount: state.usersPage.totalUsersCount,
    currentPage: state.usersPage.currentPage
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    follow: (userId) => {
      dispatch(followAC(userId))
    },
    unfollow: (userId) => {
      dispatch(unfollowAC(userId))
    },
    setUsers: (users) => {
      dispatch(setUsersAC(users))
    },
    setCurrentPage: (pageNumber) => {
      dispatch(setCurrentPageAC(pageNumber))
    },
    setTotalUserCount: (totalCount) => {
      dispatch(setTotalUserCountAC(totalCount))
    }

  }
}

export default connect(mapStateToProps, mapDispatchToProps)(UsersContainer)
