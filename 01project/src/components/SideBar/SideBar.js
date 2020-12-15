import React from 'react'
import SideBarItem from './SideBarItem/SideBarItem'

const SideBar = props => {
  let sidebar = props.avatar.map(ava => <SideBarItem name={ava.name} id={ava.id} img={ava.img} />)

  return (
    <div>
     {sidebar}

    </div>
  )
}

export default SideBar;