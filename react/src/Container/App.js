import React from 'react'

import NavBar from '../components/NavBar'
import SideBar from '../components/SideBar'

export default function (props) {
  return (
    <div id="page-container" className="fade page-sidebar-fixed page-header-fixed in">
      <NavBar/>
      <SideBar {...props}/>
      { props.children }
    </div>
  )
}
