import React from 'react'
import Link from 'next/link'
import Box from '@mui/material/Box'

const dropdown = ({submenus, dropdown }) => {
  return (
    <Box component="ul" className={`dropdown ${dropdown ? "show" : ""}`}>
      {submenus.map((submenu, id) => (
        <li key={id} className="menu-items">
          <Link href={submenu.path}>{submenu.name}</Link>
        </li>
        
      ))}
    </Box>
  )
}

export default dropdown