import React from 'react'
import { NavLink } from 'react-router-dom'
import SiteBar from '../SiteBar/SiteBar'
import s from './Navbar.module.css'

const Navbar = props => {
  return (
    <nav className={s.nav}>
      <ul className={s.list}>
        <li className={s.item}>
          <NavLink to='/profile' activeClassName={s.active}>Profile</NavLink>
        </li>
        <li className={s.item}>
          <NavLink to='/dialogs' activeClassName={s.active}>Messages</NavLink>
        </li>
        <li className={s.item}>
        <NavLink to='/news' activeClassName={s.active}>News</NavLink>
        </li>
        <li className={s.item}>
        <NavLink to='/music' activeClassName={s.active}>Music</NavLink>
        </li>
        <li className={s.item}>
        <NavLink to='/settings' activeClassName={s.active}>Settings</NavLink>
        </li>
      </ul>
      <div>
        <SiteBar 
          avatar={props.state.avatar}
        />
      </div>
    </nav>
  )
}

export default Navbar