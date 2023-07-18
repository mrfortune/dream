import React from 'react'
import Link from 'next/link'

const dropdown = ({submenus}) => {
  return (
    <ul className="dropdown">
      {submenus.map((submenu, index) => (
        <li key={index} className="menu-items">
          <Link href={submenu.url}>{submenu.title}</Link>
        </li>
      ))}
    </ul>
  )
}

export default dropdown