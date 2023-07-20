import React from 'react'
import Dropdown from './Dropdown'
import Link from 'next/link'
import Box from '@mui/material/Box';
import { useState } from "react";

const MenuItems = ({ items }) => {
    const [click, setClick] = useState(false);
    const [dropdown, setDropdown] = useState(false);
    //const [anchorEl, setAnchorEl] = React.useState(null);
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
         onMouseleave={onMouseLeave}
            className="menu-items" sx={{ marginRight: '1.5rem' }}>
            {items.submenu ? (
                <>
                    <Link
                        href={items.path}
                        onClick={closeMobilemenu}
                    >
                        {items.name}{' '}
                    </Link>
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