import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import { Button, css } from "@nextui-org/react";
import Link from 'next/link';
import { transform } from 'framer-motion';
import { useRouter } from 'next/router'
import myLoader from "../components/Loader";
import Image from "next/image";
//import { navItems } from './navItems';
import MenuItems from './MenuItems';
import { useState } from "react";
// interface Props {
//   /**
//    * Injected by the documentation to work in an iframe.
//    * You won't need it on your project.
//    */
//   window?: () => Window;
// }

const drawerWidth = 240;
//const navItems = ['home', 'story', 'media', 'contact'];
// const navLinks = [
//   { 
//     id: "1",
//     name: "Home", 
//    path: "/" 
//   },
//   {
//     id: "2",
//     name: "About",
//     path: "/about",
   
//   },
//   {
//     id: "3",
//     name: "Devices",
//     path: "/devices", 
//     submenu: [
//       {
//         id: "1",
//         name: "Home", 
//        path: "/" 
//       },
//       {
//         id: "2",
//     name: "Home", 
//    path: "/" 
//       },
//       {
//         id: "3",
//     name: "Home", 
//    path: "/" 
//       },
//       {
//         id: "4",
//     name: "Home", 
//    path: "/" 
//       },
//       {
//         id: "5",
//     name: "Home", 
//    path: "/" 
//       },
//     ],
//   },
//   {
//     id: "4",
//     name: "Products",
//     path: "/products",
//   },
//   {
//     id: "5",
//     name: "Services",
//     path: "/services",
//   },
//   {
//     id: "6",
//     name: "Contact",
//     path: "/contact",
//   },
// ];
export const navItems = [
  { 
    id: "1",
    name: "Home", 
   path: "/" 
  },
  {
    id: "2",
    name: "About",
    path: "/about",
   
  },
  {
    id: "3",
    name: "Products",
    path: "/products", 
    submenu: [
      {
        id: "1",
        name: "OBGYN/UROBGYN", 
       path: "/" 
      },
      {
        id: "2",
    name: "Bariatric", 
   path: "/" 
      },
      {
        id: "3",
    name: "Limb Salvage", 
   path: "/" 
      },
      {
        id: "4",
    name: "Orthopedic", 
   path: "/" 
      },
      {
        id: "5",
    name: "Neuro Spine", 
   path: "/" 
      },
      {
        id: "6",
    name: "Urology", 
   path: "/" 
      },
      {
        id: "7",
    name: "Vascular Surgery", 
   path: "/" 
      },
      {
        id: "8",
    name: "Wound Care & Limb Care", 
   path: "/" 
      },
      {
        id: "9",
    name: "Breast Reconstruction", 
   path: "/" 
      },
      {
        id: "10",
    name: "ENT", 
   path: "/" 
      },
      {
        id: "11",
    name: "Podiatry", 
   path: "/" 
      },
      {
        id: "11",
    name: "General Surgery", 
   path: "/" 
      }
    ],
  },
  {
    id: "5",
    name: "Services",
    path: "/services",
  },
  {
    id: "6",
    name: "Contact",
    path: "/contact",
  },
];
export default function DrawerAppBar (props) {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  // const closeMobilemenu = () => setClick(false);
  //const { asPath: currentPath } = useRouter();
  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: 'left', backgroundColor:'#4CBB17' }}>
      <Box sx={{ display:'flex', flexDirection:'column', paddingLeft:'1rem', paddingTop:'1rem' }}>
            {navItems.map((menu, id) => {
          return(
              // <Link key={id} href={link.path} css={{marginBottom:'1rem'}}>
              //   {link.name}
              // </Link>
              <ul className="menus" key={id}>
                 <MenuItems items={menu} key={id}/>
            </ul>
          );
        })}
          </Box>
    </Box>
  );

  const container = window !== undefined ? () => window().document.body : undefined;
  const router = useRouter();
  const currentRoute = router.pathname;

  return (
    <Box component ="div" sx={{ display: 'flex' }}>
      <CssBaseline />
      <AppBar component="nav" sx={{minHeight:'4rem', backgroundColor:'#333'}}>
        <Box component="div" display="flex"
        flexWrap="wrap"
        justifyContent="center"
        >
 <Toolbar sx={{width:"1536px", maxWidth:'xl'}}> 
       
<Typography
            variant="h6"
            noWrap
            component="a"
            href="/"
            sx={{
              flexGrow: 1,
              mr: 16,
              display: { xs: 'block', md: 'flex' },
              fontWeight: 700,
              letterSpacing: '.2rem',
              color: '#fff',
              textDecoration: 'none',
            }}
          >
          <Image 
          loader={myLoader}
          src="https://ik.imagekit.io/ylqs11u10/dmlogo.png"
          width={80} height={40}
          alt="Logo">

          </Image>
          </Typography>
       
          
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 0,  borderRadius:'50%', backgroundColor:'#4ABA16',
            display: { xs:'flex', sm: 'flex', md: 'none', horizontal: 'right' }, }}
          >
            <MenuIcon />
          </IconButton>
         
          <Typography
            variant="h6"
            component="div"
            sx={{ flexGrow: 1, display: { xs: 'none', sm: 'none' } }}
          >
            Dream Medical
          </Typography>
          <Box  color="primary" sx={{ display: { xs: 'none', sm: 'none', md:'flex', xl:'flex', lg:'flex' }}}>
          <Box component="ul" className="menu">
        {navItems.map((menu, id) => {
          return <MenuItems items={menu} key={id} />;
        })}
      </Box>
            {/* {navItems.map((link, id) => {
              const selectedNavItem = "Contact";
              if (link.name != "Contact"){
                return(
              <Link key={id} href={link.path} className={currentRoute === "/" ? "nav.active" : "nonActive"}>
                {link.name} 
           
              {link.subItems && (
               <ul className="subnav">
              

                {link.subItems.map((subItem) => (
                  
                  <li key={subItem.id}>
                    <Link href={subItem.url}>{subItem.label}</Link>
                  </li>
                ))}
              </ul>
               )}
                </Link>
       
              );
              }
              else{
                // eslint-disable-next-line react/jsx-key
                return ( <Button key={id} size="sm" className="contactButton" color="secondary" css={{ borderRadius: "$xl", marginLeft:'2rem' }}>
            <Link href={link.path}
              css={{ color: "primaryLinkText", fontSize: "$md" }}
            >
            {link.name} 
            </Link>
          </Button> );
              }
           
        })} */}
       
          </Box>
        </Toolbar>

        </Box>
                 
        

      </AppBar>
      <Box component="nav" >
        <Drawer
        anchor="right"
          container={container}
          variant="temporary"
          open={mobileOpen}
          backgroundColor="#4CBB17"
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
             display: { xs: 'block', sm: 'block', md:'none', lg:'none', xl:'none'  },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth, backgroundColor:'#4CBB17'  },
          }}
        >
          {drawer}
        </Drawer>
      </Box>
    </Box>
  );
}