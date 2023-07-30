import React from "react";
import { Paper } from "@mui/material";
import { Container, Box, Grid, Typography } from "@mui/material";
import { Link } from "@nextui-org/react";
import LinkedIn from "@mui/icons-material/LinkedIn";
import Facebook from "@mui/icons-material/Facebook";
import { Instagram } from "@mui/icons-material";
import { Card, css, Col, Row, Button, Text } from "@nextui-org/react";
import Divider from "@mui/material/Divider";
import Image from "next/image";
import myLoader from "../components/Loader";

const FooterNav = () => {
  return (
    <Paper
      className="footerBG"
      square={true}
      sx={{ bottom: 0, left: 0, right: 0 }}
      elevation={3}
    >
      <Box
        component="div"
        direction="row"
        display="flex"
        flexWrap="wrap"
        justifyContent="center"
      >
        <Grid container sx={{ maxWidth: "lg" }} spacing={2}>
          <Grid item xs={12} sm={12} md={4} lg={4} xl={4}>
            <Box flexGrow="1" component="div">
              <Link href="/">
                <Image
                  loader={myLoader}
                  src="/assets/dmlogo.png"
                  width={80}
                  height={40}
                  alt="Logo"
                >

                </Image>
              </Link>
              <Box
                component="ul"
                className="mylistStyle"
                sx={{
                  padding: "0 0",
                  listStyle: "none",
                }}
              >
                <Box
                  component="li"
                  mt={1}
                  display="flex"
                  sx={{
                    padding: "0 0",
                  }}
                >
                  <Link href="http://linkedin.com/in/robertsharris">
                    <LinkedIn fontSize="large" />
                  </Link>

                  <Link href="/">
                    <Facebook fontSize="large" />
                  </Link>

                  <Link href="/">
                    <Instagram fontSize="large" />
                  </Link>
                </Box>
              </Box>
            </Box>
          </Grid>
          {/* <Grid item xs={12} sm={12} md={4} lg={4} xl={4} mt={8}>
           <Divider orientation="vertical" variant="middle" flexItem sx={{borderColor:'#ccc', display:{sm:'block', xs:'none', md:'block', lg:'block'}}}/> 
        </Grid> */}

          <Grid item xs={12} sm={12} md={8} lg={8} xl={8}>
            <Box component="div" display="flex" flexGrow="1">
              <Box
                component="div"
                flexGrow="1"
                sx={{ paddingLeft: { sm: "0rem" } }}
              >
                <Text h4 css={{ color: "#4CBB17" }}>
                  Company
                </Text>
                <Box
                  component="ul"
                  className="mylistStyle"
                  sx={{
                    padding: "0 0",
                    listStyle: "none",
                  }}
                >
                  <Box component="li">
                    <Link href="/about">Story</Link>
                  </Box>
                  <Box component="li">
                    <Link href="/contact">Contact</Link>
                  </Box>
                </Box>
              </Box>
              <Box component="div" flexGrow="1">
                <Text h4 css={{ color: "#4CBB17" }}>
                  Resources
                </Text>
                <Box
                  component="ul"
                  className="mylistStyle"
                  sx={{
                    padding: "0 0",
                    listStyle: "none",
                  }}
                >
                  <Box component="li">
                    <Link href="http://www.adobe.com">Adobe</Link>
                  </Box>
                  <Box component="li">
                    <Link href="http://www.figma.com">OpenAI</Link>
                  </Box>
                  <Box component="li">
                    <Link href="http://www.figma.com">ChatGPT</Link>
                  </Box>
                  <Box component="li">
                    <Link href="http://www.figma.com">Figma</Link>
                  </Box>
                  <Box component="li">
                    <Link href="https://www.framer.com/motion">
                      Framer Motion
                    </Link>
                  </Box>
                  <Box component="li">
                    <Link href="https://m3.material.io">Material</Link>
                  </Box>
                  <Box component="li">
                    <Link href="http://www.figma.com">Midjourney</Link>
                  </Box>
                  <Box component="li">
                    <Link href="https://nextjs.org/">Next.js</Link>
                  </Box>
                  <Box component="li">
                    <Link href="https://react.dev/">React</Link>
                  </Box>
                </Box>
              </Box>
              <Box component="div" flexGrow="1">
                <Text h4 css={{ color: "#4CBB17" }}>
                  Partners
                </Text>
                <Box
                  component="ul"
                  className="mylistStyle"
                  sx={{
                    padding: "0 0",
                    listStyle: "none",
                  }}
                >
                  <Box component="li"></Box>
                  <Box component="li">
                    <Link href="https://ionblade.com/">IONBLADE</Link>
                  </Box>
                  <Box component="li">
                    <Link href="https://www.godaddy.com/">GoDaddy</Link>
                  </Box>
                  {/* <Box component="li">
              <Link href="/">Privacy</Link>
            </Box>
            <Box component="li">
              <Link href="/">Privacy</Link>
            </Box> */}
                </Box>
              </Box>
              <Box component="div">
                <Text h4 css={{ color: "#4CBB17" }}>
                  Legal
                </Text>
                <Box
                  component="ul"
                  className="mylistStyle"
                  sx={{
                    padding: "0 0",
                    listStyle: "none",
                  }}
                >
                  <Box component="li"></Box>
                  <Box component="li">
                    <Link href="/">Terms</Link>
                  </Box>
                  <Box component="li">
                    <Link href="/">Privacy</Link>
                  </Box>
                </Box>
              </Box>
            </Box>
          </Grid>
        </Grid>
      </Box>
    </Paper>
  );
};

export default FooterNav;
