import React from 'react'
import s from './SiteBarItem.module.css'
import { NavLink } from 'react-router-dom'

const SiteBarItem = props => {
  let path = "/friends/" + props.id

  return (
    <div className={s.item}>
      <div className={s.image}>
        <img src={props.img} />
      </div>
      <div >
        <NavLink to={path} className={s.name}> {props.name}</NavLink>
      </div>
    </div>
  )
}

export default SiteBarItem;