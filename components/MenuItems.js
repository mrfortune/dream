import React from 'react'
import Dropdown from './Dropdown'
import Link from 'next/link'
import Box from '@mui/material/Box';
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faMagnifyingGlass,
  faCircleStop,
  faSolid, faCaretDown, faChevronDown
} from "@fortawesome/free-solid-svg-icons";


const MenuItems = ({ items }) => {
    const [click, setClick] = useState(false);
    const [dropdown, setDropdown] = useState(false);
    const handleClick = () => setClick(!click);
    const closeMobilemenu = () => setClick(false);

    const onMouseEnter = () => {
        if (window.innerwidth < 960) {
            setDropdown(false);
        } else {
            setDropdown(true)
        }
    };

    const onMouseLeave = () => {
        if (window.innerwidth < 960) {
            setDropdown(false);
        } else {
            setDropdown(false)
        }
    };
    return (
        <Box component="li" 
        onMouseEnter={onMouseEnter}
        onMouseLeave={onMouseLeave}
        className={click ? 'menu-items active' : 'menu-items'}
       >
            {items.submenu ? (
                <>
                    <Link
                        href={items.path}
                    >
                        {items.name}{' '}
                        <FontAwesomeIcon icon={faChevronDown}  style={{color: "#edeff3", marginLeft:'.5rem'}} /></Link>
                    <Dropdown
                        submenus={items.submenu}
                        dropdown={dropdown}
                    />
                </>
            ) : (
                <Link href={items.path}>{items.name}</Link>
            )}

        </Box>

    )
}
export default MenuItems