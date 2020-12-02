import React from 'react'
import s from './Nav.module.css'

const Navbar = () => {
  return (
    <nav className={s.nav}>
      <ul className={s.list}>
        <li className={s.item}><a className={s.link}>Profile</a></li>
        <li className={s.item}><a className={s.link}>Messages</a></li>
        <li className={s.item}><a className={s.link}>News</a></li>
        <li className={s.item}><a className={s.link}>Music</a></li>
        <li className={s.item}><a className={s.link}>Settings</a></li>
      </ul>
    </nav>
  )
}

export default Navbar