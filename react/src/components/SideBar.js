import React from 'react'
import { Link } from 'react-router'

export default function (props) {
  return (
    <div id="sidebar" className="sidebar">
      <div data-scrollbar="true" data-height="100%">
        <ul className="nav">
          <li className="nav-header">Angular Pages</li>
          <li>
            <a href="/#one" target="_self">
              <span>Angular Page one</span>
            </a>
          </li>
          <li>
            <a href="/#two" target="_self">
              <span>Angular Page two</span>
            </a>
          </li>
          <li className="nav-header">React Pages</li>
          <WrapLink path={props.location.pathname} match="/one" home={true} name="React Page One"/>
          <WrapLink path={props.location.pathname} match="/two" home={false} name="React Page Two"/>
        </ul>
      </div>
    </div>

  )
}

export function WrapLink({ path, match, home, name}) {
  let active = match == path
  if (home) {
    active = active || path === '/'
  }
  return (
    <li className={`${active? 'active': ''}`}>
      <Link to={match}>
        <span>{name}</span>
      </Link>
    </li>
  )
}
