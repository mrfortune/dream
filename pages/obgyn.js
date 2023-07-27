import React from "react";
import { styled } from "@mui/material/styles";
import { Box, Grid, Container, Item, Paper } from "@mui/material";
import { Typography } from "@mui/material";
import Divider from "@mui/material/Divider";
import Image from "next/image";
import Meta from "../components/Meta";
import myLoader from "../components/Loader";
import { useEffect, useState } from 'react'
const CSection = () => {
  return (
    <>
      <Meta title="OBGYN-C Section" />
        <Box
          mt={8}
          component="div"
          display="flex"
          justifyContent="center"
          alignItems="center"
        >
             <Grid container spacing={2} sx={{ maxWidth: "md" }}>
          <Grid item xs={12} lg={12} xl={12} md={12} sm={12}>
            <Box component="div" pt={4} pb={4} sx={{ textAlign: "left" }}>
              <Typography variant="h1">Digital Wine Buying Experience</Typography>
              <Typography variant="body1" className="body1">
               
              </Typography>
            </Box>
          </Grid>
          <Grid item xs={12} lg={12} xl={12} md={12} sm={12}>
            <Box component="div">
              <Image
                loader={myLoader}
                src="wineryBK.png"
                width={960}
                height={648}
                alt=""
              > 
              </Image>
            </Box>
          </Grid>
        
        </Grid>
         
        </Box>
     
    </>
  );
};

export default CSection;
