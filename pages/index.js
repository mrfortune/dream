import Head from 'next/head';
import styles from '../styles/Home.module.css';
import {
  Box,
  Stack,
  Item,
  Container,
} from "@mui/material";
import { Button, css } from "@nextui-org/react";
import { Typography } from "@mui/material";
import Grid from "@mui/material/Grid";
import { Paper } from "@mui/material";
import Image from "next/image";
import { Link } from "@nextui-org/react";
import { motion } from "framer-motion";
import Meta from "../components/Meta";
import { AnimatePresence } from "framer-motion";
import { Text } from "@nextui-org/react";
import Divider from "@mui/material/Divider";
import Chip from "@mui/material/Chip";
import { textAlign } from "@mui/system";
import myLoader from "../components/Loader";
import MyButton from '../components/MyButton';

const { heroContent, heroWrapper, imageWrapper } = styles;
const IMAGE_URL = 'https://www.dreammedical.info/assets/doctor.png';

export default function Home() {

  return (
    <div className={styles.container}>
      <Head>
        <title>Dream Medical</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/* <main> */}
      {/* <Box
        component="section"
        // className="homeHero"
        padding={0}
        direction="column"
        display="flex"
        alignItems="center"
        justifyContent="center"
        sx={{ width: "100%" }}
      > */}
      {/* <Box
          className="heroText"
          component="div"
          maxWidth="lg"
          sx={{
            display: "flex",
            textAlign: {
              xs: "center",
              sm: "center",
              md: "left",
              lg: "left",
              xl: "left",
            },
            height: "auto",
            width: "100%",
          }}
        > */}
      <Box component="section" className={heroWrapper}>
        <Box component="div" className={imageWrapper}>
          <Image
            priority
            src="assets/doctor.png"
            layout="fill"
            objectFit="cover"
            // width="2536"
            // height="720"
            objectPosition="center"
            alt="hero image example"
            // grid="1/-1"
          />
        </Box>

        <Box component="div" className={heroContent}>
          <Box component="div" maxWidth='xl'>
            <Typography variant="h1">Revolutionizing <br></br>Medical Practices<br></br> with Advanced <br></br>Devices and Expertise</Typography>
            <Typography variant="body1">Equip Your Skills with High-Performance<br></br> Medical Devices Designed for Precision and Excellence.</Typography>
            <Button
              size="lg"
              color="secondary"
              css={{ borderRadius: "$2xl" }}
            >
              <Link
                href="/assets/A_Multicenter_Randomized_Controlled_Clinical.39.pdf"
                css={{ color: '$purple800', fontSize: "$lg" }}
              >
                Read more...
              </Link>
            </Button>
          </Box>

        </Box>
      </Box>
      {/* <Grid  container spacing={2} mt={2} sx={{ maxWidth: "lg" }}>
            <Grid item xs={12} sm={12} md={7} lg={7} xl={7} pt={10}>
              <Text h1 className="boujee-text"  css={{
                  marginBottom:"$6",
                  marginTop:"$10",
                  
                }}>
                <span>Revolutionizing Medical Practices with Advanced Devices and Expertise</span>
              </Text>
              <Text
                className="headerBody"
                color="primary"
                css={{
                  fontWeight: "400",
                  marginBottom:"$6",
                  textAlign:'left'
                }}
              >
                Equip Your Skills with High-Performance Medical Devices Designed for Precision and Excellence.
              </Text>
              
              <Box component="div" sx={{ display: {xs:"block", sm:"block", md:"none", lg:"none", xl:"none"} }}>
              <motion.div
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 1 }}
                    >
 
              </motion.div>
              </Box>
             <Box component="div" display="flex" sx={{justifyContent:{xs:"center", sm:"center", md:"left", lg:"left", xl:"left"}}}>
               <Button size="lg" color="secondary" css={{ borderRadius: "$2xl" }} >
                <Link
                  href="/contact"
                  css={{ color: "primaryLinkText", fontSize: '$sm', fontWeight:"$normal" }}
                >
                  Let's talk about your project
                </Link>
              </Button>
             </Box>
             
            </Grid>
            
            
          </Grid> */}
      {/* </Box>
      </Box> */}

      <Box
        className="whatwedo"
        direction="row"
        display="grid"
        justifyContent="center"
        component="section"
        sx={{
          paddingTop: "3rem",
          paddingBottom: "3rem",
        }}
      >
        <Grid container sx={{ maxWidth: "xl", marginTop: "0" }} spacing={2}>
          <Grid item xs={12} sm={12} md={12} lg={12} xl={12} pt={0}>
            <Typography variant="h2" sx={{ textAlign: "center" }}> What We Do</Typography>
          </Grid>
          <Grid item xs={12} sm={6} md={4} lg={4} xl={4} pt={0}>
            {/* <Box component="div" sx={{ textAlign: "center" }}>
              <Image src="/assets/discover.png"
                width={88}
                height={88}
                alt="Research"
                layout="fixed" loader={myLoader}></Image>
            </Box> */}

            <Typography
              variant="h4"
              sx={{ color: "#333", textAlign: "center" }}
            >
              Products
            </Typography>
            <Typography
              variant="body1"
              sx={{ color: "#333", textAlign: "left", marginBottom: "0" }}
            >
              Research with empathy to gather insights about your customers and
              users to make actionable decisions
            </Typography>
          </Grid>

          <Grid item xs={12} sm={6} md={4} lg={4} xl={4}>
            {/* <Box component="div" sx={{ textAlign: "center" }}>
              <Image src="/assets/design1.png" width={88} height={88} alt="Design" layout="fixed" loader={myLoader}></Image>
            </Box> */}
            <Typography
              variant="h4"
              sx={{ color: "#333", textAlign: "center" }}
            >
              Services
            </Typography>
            <Typography
              variant="body1"
              sx={{ color: "#333", textAlign: "left", marginBottom: "0" }}
            >
              Ideating and creating sketches, wireframes, user flows, sitemaps,
              and hi-fidelity visual designs, and prototypes
            </Typography>
          </Grid>
          <Grid item xs={12} sm={6} md={4} lg={4} xl={4}>
            {/* <Box component="div" sx={{ textAlign: "center" }}>
              <Image src="/assets/dev1.png" width={88} height={88} alt="Develop" layout="fixed" loader={myLoader} sizes="(max-width: 88px) 100vw,
              (max-width: 88px) 50vw,
              33vw">

              </Image>
            </Box> */}

            <Typography
              variant="h4"
              sx={{ color: "#333", textAlign: "center" }}
            >
              Consultation
            </Typography>
            <Typography
              variant="body1"
              sx={{ color: "#333", textAlign: "left", marginBottom: "0" }}
            >
              We build it. Testing, and delivering the best solution for your
              project using multiple technology options.
            </Typography>
          </Grid>
        </Grid>
      </Box>
      <Box
        className="whatwedo"
        direction="row"
        display="grid"
        justifyContent="center"
        component="section"
      >
        <Grid container sx={{ maxWidth: "xl" }} spacing={4}>
          <Grid item xs={12} sm={12} md={12} lg={12} xl={12} mt={8}>
            <Typography variant="h2" sx={{ color: "#333", textAlign: "center" }}>
              Research Papers
            </Typography>
          </Grid>
          <Grid item xs={12} sm={12} md={6} lg={6} xl={6}>
            <Box component="div">
              <Box component="div">
                <Box
                  component="div"
                  className="case"
                  display="flex"
                  flexDirection="row"
                  alignItems="center"
                  mb={3}
                >

                </Box>
                <Box component="div" display="flex" flexDirection="row" >
                  <Box component="div">
                    <Typography variant="h3">
                      Limb Salvage Amnion Chorion Tissue
                    </Typography>
                    <Typography variant="body1">
                      Amniotic and chorionic tissues, collectively referred to as amniotic membrane, have become increasingly popular as a treatment option for limb salvage in wound care. These tissues have been used for many years in surgical ...
                    </Typography>
                    <Button
                      size="sm"
                      color="secondary"
                      css={{ borderRadius: "$xl" }}
                    >
                      <Link
                        href="/assets/A_Multicenter_Randomized_Controlled_Clinical.39.pdf"
                        css={{ color: "$purple800", fontSize: "$sm" }}
                      >
                        Read more...
                      </Link>
                    </Button>
                  </Box>

                </Box>

              </Box>
            </Box>
          </Grid>
          <Grid item xs={12} sm={12} md={6} lg={6} xl={6}>
            <Box component="div">
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 1 }}
              >
                {/* <Image
                  src="/assets/limbsalvage.png"
                  width="500"
                  height="500"
                  objectFit="contain"
                  objectPosition="center"
                  loader={myLoader}
                  alt="Limb Salvage"
                >
                </Image> */}
              </motion.div>
            </Box>
          </Grid>

          <Grid item xs={12} sm={12} md={6} lg={6} xl={6}>
            <Box
              component="div"
              className="case"
              display="flex"
              flexDirection="row"
              alignItems="center"
              mb={3}
            >

            </Box>
            <Box component="div" display="flex" flexDirection="row" >
              <Box component="div" p={2}>
                <motion.div
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 1 }}
                >
                  {/* <Image
                    src="assets/dhaca.png"
                    width="500"
                    height="500"
                    objectPosition="center"
                    alt=""
                    loader={myLoader}
                  >
                  </Image> */}
                </motion.div>
              </Box>


            </Box>
          </Grid>
          <Grid item xs={12} sm={12} md={6} lg={6} xl={6}>
            <Box component="div">
              <Typography variant="h3">
                Dehydrated Human Amnion Chorion Human Allograft Tissue (dHACA) for Spine Surgery
              </Typography>
              <Typography variant="body1">
                dHACA tissue reduces Epidural Fibrosis, and can be used for a tears of the Dura (Durotomy).
              </Typography>
              <Button
                size="sm"
                color="secondary"
                css={{ borderRadius: "$xl" }}
              >
                <Link
                  href="/fade-solutions"
                  css={{ color: "$purple800", fontSize: "$sm" }}
                >
                  Read more...
                </Link>
              </Button>
            </Box>
          </Grid>


          <Grid item xs={12} sm={12} md={6} lg={6} xl={6} mb={8}>
            <Box
              component="div"
              className="case"
              display="flex"
              flexDirection="row"
              alignItems="center"
              mb={3}
            >

            </Box>
            <Box component="div" display="flex" flexDirection="row" >
              <Box component="div">
                <Typography variant="h3">dHACA Tissue for Urology Procedures</Typography>
                <Typography variant="body1">
                  Amnion-scaffolds in tissue engineered constructs for
                  reconstructive urology.
                </Typography>
                <Button
                  size="sm"
                  color="secondary"
                  css={{ borderRadius: "$xl" }}
                >
                  <Link
                    href="./assets/A_Multicenter_Randomized_Controlled_Clinical.39.pdf"
                    css={{ color: "$purple800", fontSize: "$sm" }}
                  >
                    Read more...
                  </Link>
                </Button>
              </Box>
            </Box>
          </Grid>

          <Grid item xs={12} sm={12} md={6} lg={6} xl={6}>
            <Box component="div">
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 1 }}
              >
                {/* <Image
                  src="assets/dhacaurology.png"
                  // layout="fill"
                  //  objectFit="cover"
                  width="500"
                  height="500"
                  objectPosition="center"
                  alt="hero image example"
                  grid="1/-1"
                  loader={myLoader}
                  alt=""
                >
                </Image> */}
              </motion.div>
            </Box>
          </Grid>
        </Grid>
      </Box>
    </div>
  )
}
