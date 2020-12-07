import React from 'react'
import SiteBarItem from './SiteBarItem/SiteBarItem'

const SiteBar = props => {
  let sitebar = props.avatar.map(ava => <SiteBarItem name={ava.name} id={ava.id} img={ava.img} />)

  return (
    <div>
     {sitebar}

    </div>
  )
}

export default SiteBar;