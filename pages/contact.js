import * as React from "react";
import { styled, useTheme } from "@mui/material/styles";
import {
  Box,
  ThemeProvider,
  Button,
  Container,
  Typography,
} from "@mui/material";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import lightTheme from "../styles/theme/lightTheme";
import { global } from "styled-jsx/css";
import Meta from "../components/Meta";
// import contactform from "../components/contactform";

function Mailto({ email, subject, body, ...props }) {
  return (
    <a href={`mailto:${email}?subject=${subject || ""}&body=${body || ""}`}>
      {props.children}
    </a>
  );
}

const Contact = () => {
  return (
    <div>
      <Meta title="Dream Medical::Contact" />
      <Box
        className="contact"
        component="div"
        direction="row"
        display="flex"
        mt={15}
        mb={2}
        justifyContent="center"
        sx={{ minHeight: "300px" }}
      >
        <Grid container spacing={2} sx={{ maxWidth: "md" }}>
          <Grid item paddingLeft={0} xs={12} sm={12} md={12} lg={12}>
            <Typography variant="h1" mb={4}>
              Contact Us
            </Typography>
            <Typography variant="body1" mb={0}>
              183 Sterling Street<br/>
              Brooklyn, NY 11225<br/>
           Cell: 1.646.620.4438</Typography>
            <Typography
              color="primary"
              variant="body"
              sx={{ textDecoration: "none", fontSize:'1rem', color:'#333' }}
            >
              <Mailto
                email="rharris@worldshaker.com"
                subject="Available to Discuss a new Project"
                body="Hi Robert,"
              >
                Email,
              </Mailto> or call us to discuss your project.
              {/* <contactform/> */}
            </Typography>
          </Grid>
        </Grid>
      </Box>
    </div>
  );
};
export default Contact;
