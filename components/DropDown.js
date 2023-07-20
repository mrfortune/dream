import React from 'react'
import Link from 'next/link'
import Box from '@mui/material/Box'
import { useState } from "react";
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { icon } from '@fortawesome/fontawesome-svg-core/import.macro';

const dropdown = ({submenus, dropdown }) => {
    const [click, setClick] = useState(false)
    const handleClick = () => setClick(!click)
    // const onMouseEnter = () => {
    //     if (window.innerwidth < 960) {
    //         setDropdown(false);
    //     } else {
    //         setDropdown(true)
    //     }
    // };

    // const onMouseLeave = () => {
    //     if (window.innerwidth < 960) {
    //         setDropdown(false);
    //     } else {
    //         setDropdown(false)
    //     }
    // };
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