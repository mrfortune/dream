import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import { Button, css } from "@nextui-org/react";
import Link from 'next/link';
import { transform } from 'framer-motion';
import { useRouter } from 'next/router'
import myLoader from "../components/Loader";
import Image from "next/image";
// interface Props {
//   /**
//    * Injected by the documentation to work in an iframe.
//    * You won't need it on your project.
//    */
//   window?: () => Window;
// }

const drawerWidth = 240;
//const navItems = ['home', 'story', 'media', 'contact'];
const navLinks = [
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
    name: "Devices",
    path: "/devices", 
    submenu: [
      {
        id: "1",
        name: "Home", 
       path: "/" 
      },
      {
        id: "2",
    name: "Home", 
   path: "/" 
      },
      {
        id: "3",
    name: "Home", 
   path: "/" 
      },
      {
        id: "4",
    name: "Home", 
   path: "/" 
      },
      {
        id: "5",
    name: "Home", 
   path: "/" 
      },
    ],
  },
  {
    id: "4",
    name: "Products",
    path: "/products",
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
  //const { asPath: currentPath } = useRouter();
  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: 'left' }}>
      <Box sx={{ display:'flex', flexDirection:'column', paddingLeft:'1rem', paddingTop:'1rem' }}>
            {navLinks.map((link, id) => {
          return(
              <Link key={id} href={link.path} css={{marginBottom:'1rem'}}>
                {link.name}
              </Link>
          );
        })}
          </Box>
    </Box>
  );

  const container = window !== undefined ? () => window().document.body : undefined;
  const router = useRouter();
  const currentRoute = router.pathname;

  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <AppBar component="nav" sx={{minHeight:'5rem', backgroundColor:'#0a354f'}}>
        <Toolbar> 
        <Box sx={{ flexGrow: 1, }}>
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
          src="assets/wslogo8.png"
          width={200} height={24} 
          alt="Logo">

          </Image>
          </Typography>
            </Box>
          
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 0,  borderRadius:'50%', backgroundColor:'#0469de',
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
          <Box alignItems="center" sx={{ display: { xs: 'none', sm: 'none', md:'flex', xl:'flex', lg:'flex' } }}>
            {navLinks.map((link, id) => {
              const selectedNavItem = "Contact";
              if (link.name != "Contact"){
                return(
                 
        
        
            
              <Link key={id} href={link.path} className={currentRoute === "/" ? "nav.active" : "nonActive"}>
                {link.name} 
           
              {link.subItems && (
               <ul className="subnav">
              

                {link.subItems.map((subItem) => (
                  
                  <li key={subItem.id}>
                    <a href={subItem.url}>{subItem.label}</a>
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
           
        })}
       
          </Box>
        </Toolbar>
      </AppBar>
      <Box component="nav" >
        <Drawer
        anchor="right"
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
             display: { xs: 'block', sm: 'block', md:'none', lg:'none', xl:'none'  },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth  },
          }}
        >
          {drawer}
        </Drawer>
      </Box>
    </Box>
  );
}