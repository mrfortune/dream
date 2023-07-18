import React from "react";
import { styled } from "@mui/material/styles";
import { Box, Grid, Container, Item, Paper } from "@mui/material";
import { Typography } from "@mui/material";
import Divider from "@mui/material/Divider";
import Image from "next/image";
import { borders } from "@mui/system";
import myLoader from "../components/Loader";
import Meta from "../components/Meta";
import { motion, AnimatePresence} from 'framer-motion';
import usabilityTest from '/public/assets/FadeUsabilityTest_LoriMarion_2.gif';
import { Link } from "@nextui-org/react";
const commonStyles = {
  bgcolor: "#e7e6e2",
  borderColor: "text.primary",
  m: 1,
  p: 1,
  border: 0,
};

const FadeDesign = () => {
  return (
    <div className="fade">
      <Meta title="Case study::Fade Solutions Case Study" />

      <Box
        mt={8}
        component="div"
        display="flex"
        justifyContent="center"
        alignItems="center"
        flexDirection="column"
      >
        <Grid container spacing={2} sx={{ maxWidth: "sm" }}>
          <Grid item xs={12} lg={12} xl={12} md={12} sm={12}>
            <Box component="div" pt={4} pb={4} sx={{ textAlign: "left" }}>
              <Typography variant="h1" className="caseStudyHeads">Unleashing Insights at a Glance</Typography>
              <Typography variant="body1" className="body1">
              Revolutionizing Ad Campaign Management with Fade Technology Solutions' Visual Dashboard for Publishers, Advertisers, and Brands
              </Typography>
            </Box>
          </Grid>
          <Grid item xs={12} lg={12} xl={12} md={12} sm={12}>
            <Box component="div">
              <Image layout="responsive"
                loader={myLoader}
                src="assets/fadeMacBookDesktop.png"
                width={960}
                height={648}
                alt="WGSR Hero"
                quality={75}
                blurDataURL="/images/path-to-blur-image.jpg"
   placeholder="blur"
              ></Image>
            </Box>
          </Grid>
          <Grid item xs={12} lg={12}>
            <Box
              component="div"
              display="flex"
              justifyContent="center"
              alignItems="center"
            >
              <Grid container spacing={2} sx={{ maxWidth: "sm" }}>
                <Grid item xs={12} sm={3} md={3} lg={3}>
                  <Typography variant="body2" className="body2">
                    Client{" "}
                  </Typography>
                  <Typography variant="body1">
                    Fade Technology - fade.technology{" "}
                  </Typography>
                </Grid>
                <Grid item xs={12} sm={3} md={3} lg={3}>
                  <Typography variant="body2">Year</Typography>
                  <Typography variant="body1">2021</Typography>
                </Grid>
                <Grid item xs={12} sm={3} md={3} lg={3}>
                  <Typography variant="body2">Role</Typography>

                  <Typography variant="body1">
                    Information Architect &amp; UX Researcher
                  </Typography>
                </Grid>

                <Grid item xs={12} sm={3} md={3} lg={3}>
                  <Typography variant="body2">What I Did</Typography>
                  <Typography variant="body1">
                    My principal role was Information Architect and I
                    collaborated on research and visual design. I drew low
                    fidelity sketches in our design studio workshop, designed
                    site maps, user flows, and conducted usability testing to
                    validate prototypes.
                  </Typography>
                </Grid>
              </Grid>
            </Box>
          </Grid>
        </Grid>
      </Box>
      <Box
        component="div"
        display="flex"
        justifyContent="center"
        alignItems="center"
      >
        <Grid container mt={6} spacing={0} sx={{ maxWidth: "sm" }}>
          <Grid item xs={12} md={12} lg={12} mb={8}>
            <Typography variant="h5">Overview</Typography>
            <Typography variant="h2">About This Project</Typography>

            <Typography variant="body1">
              Fade Technology is an early-stage startup with a team of
              entertainment technology, payments, and digital leaders from
              leading companies. Fade Technology provides the quickest way to
              embed the next-generation of shoppable media on the digital
              publisher and streaming service platforms. It is a cloud-based
              platform that enables digital publishers to monetize editorial,
              sponsored, advertorial, and original video content natively. It
              allows a new e-commerce experience that lets viewers instantly
              discover and buy products directly from the video on the platform
              they are on, without redirects.
            </Typography>
          </Grid>
          <Grid item xs={12} lg={12} md={12} mb={8}>
            <Typography variant="h2">The Problem</Typography>

            <Typography variant="body1">
              Fade Technology Solutions needs an admin UI for their clients so
              that they can easily track and manage their sales data and
              campaign metrics.
            </Typography>
          </Grid>
          <Grid item xs={12} sm={12} lg={12} md={12}>
            <Typography variant="h5">Discovery</Typography>
          </Grid>
          <Grid item xs={12} lg={12} md={12} mb={8}>
            <Typography variant="h2">The Project Brief</Typography>
            <Typography variant="body1">
              The Fade executives and technology teams came to us with a
              detailed project brief, inclding how their system worked for
              publishers, agencies, brands and admins and examples of Facebook
              Business Suite and Snapchat's Business dashboard. We did not have
              access to user info, nor could we interview users since their
              users are their business clients.
            </Typography>

            <Typography variant="body1">
              Fade did part of our Double Diamond work for us and we just needed
              to build on what they provided and begin with competitive and
              comparative analysis then moved to sketches and low-fidelity
              wireframing based on the examples.
            </Typography>
          </Grid>

          <Grid item xs={12} lg={12} xl={12} mb={8}>
            <Typography variant="h2">Competitive Analysis</Typography>
            <Typography variant="body1">
              Campaign managment solutions and administrative dashboards are
              nothing new. Many companies, such as Amazon, YouTube and Facebook
              alll have those solutions for their business users. We simply
              looked at those properties and features and applied it to Fades
              project brief.
            </Typography>
            <Typography variant="body1">
              Fades business model is an advertiser driven B2B model not for
              consumers, so we focused heavily on their layout and UI components
              including analytics. Fade has no direct competitors based on their
              unique offering.
            </Typography>
            <Typography variant="body2">Observations:</Typography>
            <Box component="ul" className="ulStyle">
              <li>
                Dashboards all have analytics and charts and features to analyse
                the data.
              </li>
              <li>
                There are access and privilege levels assigned to users
                including who has administrative rights.
              </li>
              <li>Administrators invite users to the platform.</li>
              <li>
                Security protocols are put in place to prevent unauthorized
                access of the platform.
              </li>
              <li>
                Campaign management features such as 'Create a Campaign',
                'Start/Stop a Campaign'.
              </li>
            </Box>
          </Grid>

          <Grid item xs={12} lg={12} md={12} mb={8}>
            <Typography variant="h2">Comparative Analysis</Typography>
            <Typography variant="body1">
              Fades proposition is a unique technology and although there are
              similarites in the online ad space they do not have a direct
              competitor. We next looked at Amazon's Seller Central's dashboard.
              Their business model is not an advertishing based model but there
              are similarities in their solutions. This was to gather more data
              on how these solutions are designed, and to get more inspiration.
            </Typography>
          </Grid>
          <Grid item xs={12} lg={12} md={12} mb={8}>
            <Box
              component="div"
      
              display="flex"
              justifyContent="center"
              alignItems="center"
            >
              <Image layout="responsive" layout="responsive"
                className="imageBorderradius"
                src="assets/comparacampaign.png"
                loader={myLoader}
                width={540}
                height={182}
                alt=""
              ></Image>
            </Box>
          </Grid>
          <Grid item xs={12} lg={12} md={12} mb={8}>
            <Box
              component="div"
              display="flex"
              justifyContent="center"
              
              alignItems="center"
            >
              <Image layout="responsive"
                loader={myLoader}
                src="assets/comparamanusers.png"
                width={543}
                height={182}
                alt=""
              ></Image>
            </Box>
          </Grid>

          <Grid item xs={12} lg={12} mb={8}>
            <Typography variant="h2" mb={4}>
              Persona:Meet Pamela Wu
            </Typography>
            <Box
              component="div"
              display="flex"
              justifyContent="center"
              
              alignItems="center"
            >
              <Image layout="responsive"
                src="assets/fadepersona.png"
                className="imageBorderradius"
                alt=""
                height={636}
                width={900}
                loader={myLoader}
              />
            </Box>
          </Grid>

          <Grid item xs={12} sm={12} md={12} lg={12} mb={8}>
            <Typography variant="h5">Define</Typography>
            <Typography variant="h2">Journey Map</Typography>
            <Typography variant="body1">
              In the image below we map the user journey of Pamela Wu, the
              Account Administrator, as she interacts with the proposed solution
              to accomplish various tasks.
            </Typography>

            <Box
              component="div"
              display="flex"
              justifyContent="center"
              alignItems="center"
             
            >
              <Image layout="responsive"
                loader={myLoader}
                src="assets/FadeJourneyMap.png"
                className="imageBorderradius"
                alt=""
                height={675}
                width={900}
              />
            </Box>
          </Grid>
          <Grid item xs={12} sm={12} md={12} lg={12} mb={8}>
            <Typography variant="h2">User Need</Typography>
            <Typography variant="body1">
              Pamela Wu needs to set up her account in Fade Technology Solutions
              admi panel and be invite her team to use the system.
            </Typography>
          </Grid>
          <Grid item xs={12} sm={12} md={12} lg={12} mb={8}>
            <Typography variant="h5">Design</Typography>
            <Typography variant="h2">Design Thinking Workshop</Typography>
            <Typography variant="body1">
              We began our process by sketching low fidelity wireframes with pen
              and paper. Since the brief informed us of what the dashboard
              should look like, based on the examples provided, and the fact
              that we had no ability to do user research with participants, we
              just started sketching. The results were that we got early buyin
              from the client and we could procede to site-mapping and
              mid-fidelity wireframing.
            </Typography>
          </Grid>
          <Grid item xs={12} sm={12} md={12} lg={12} mb={8}>
            <Typography variant="h2">User Flows</Typography>
            <Typography variant="body1">
              Fades user flow was touched on earlier at the journey map but here
              is a bit more detail showing how some users navigate on the
              platform. We focused on the primary flow, which is the 'Sign-Up'
              process for the platform. Below are the user flows that we
              designed.
            </Typography>

            <Box
              component="div"
              display="flex"
              justifyContent="center"
              
              alignItems="center"
            >
              <Image layout="responsive"
                loader={myLoader}
                src="assets/FadeB2B_Page_userflow1.png"
                alt=""
                className="imageBorderradius"
                height={506}
                width={900}
              />
            </Box>
          </Grid>
          <Grid item xs={12} sm={12} md={12} lg={12} mb={8}>
            <Box
              component="div"
              display="flex"
              justifyContent="center"
              alignItems="center"
            
            >
              <Image layout="responsive"
                loader={myLoader}
                src="assets/FadeB2B_Page_userflow2.png"
                className="imageBorderradius"
                alt=""
                height={506}
                width={900}
              />
            </Box>
          </Grid>

          <Grid item xs={12} sm={12} md={12} lg={12} mb={8}>
            <Box
              component="div"
              display="flex"
              justifyContent="center"
             
              alignItems="center"
            >
              <Image layout="responsive"
                loader={myLoader}
                src="assets/FadeB2B_Page_sitemap1.png"
                alt=""
                className="imageBorderradius"
                height={506}
                width={900}
              />
            </Box>
          </Grid>
          <Grid item xs={12} sm={12} md={12} lg={12} mb={8}>
            <Box
              component="div"
              display="flex"
              justifyContent="center"
              alignItems="center"
             
            >
              <Image layout="responsive"
                loader={myLoader}
                src="assets/FadeB2B_Page_sitemap2.png"
                alt=""
                className="imageBorderradius"
                height={506}
                width={900}
              />
            </Box>
          </Grid>
          <Grid item xs={12} sm={12} md={12} lg={12} mb={8}>
            <Box
              component="div"
              display="flex"
              justifyContent="center"
              alignItems="center"
             
            >
              <Image layout="responsive"
                loader={myLoader}
                src="assets/FadeB2B_Page_sitemap3.png"
                alt=""
                className="imageBorderradius"
                height={506}
                width={900}
              />
            </Box>
          </Grid>

          <Grid item xs={12} sm={12} md={12} lg={12} mb={8}>
            <Typography variant="h5">Visual Design</Typography>

            <Box
              component="div"
              display="flex"
              justifyContent="center"
              alignItems="center"
              
            >
              <Image layout="responsive"
                loader={myLoader}
                src="assets/earlysketches.png"
                height={560}
                width={900}
                className="imageBorderradius"
                alt="Fade Login"
              ></Image>
            </Box>
          </Grid>
          <Grid item xs={12} sm={12} md={12} lg={12} mb={8}>
            <Box
              component="div"
              display="flex"
              justifyContent="center"
              alignItems="center"
              
            >
              <Image layout="responsive"
                loader={myLoader}
                src="assets/midfidelity.png"
                height={352}
                width={900}
                className="imageBorderradius"
                alt="Fade Login"
              ></Image>
            </Box>
          </Grid>
          <Grid item xs={12} sm={12} md={12} lg={12} mb={8}>
            <Typography variant="h2">Simple and Intuitive Dashboard</Typography>
            <Typography variant="body1">
              A simple and intuitive dashboard with all of the minimal features
              that Fade needs for its clients. These are the final design that
              the team and I came up with for Fade's dashboard. Desktop was
              primary so we did not design a mobile solution{" "}
            </Typography>
            <Box
              component="div"
              display="flex"
              justifyContent="center"
              alignItems="center"
             
            >
              <Image layout="responsive"
               loader={myLoader}
                src="assets/PublisherFlow_FinalWelcome.png"
                width={900}
                height={640}
                alt=""
                className="imageBorderradius"
              ></Image>
            </Box>
          </Grid>
          <Grid item xs={12} sm={12} md={12} lg={12} mb={8}>
            <Box
              component="div"
              display="flex"
              justifyContent="center"
              alignItems="center"
              
            >
              <Image layout="responsive"
                loader={myLoader}
                src="assets/SignUpFlow_FinalSignup.png"
                width={900}
                height={640}
                alt=""
                className="imageBorderradius"
              ></Image>
            </Box>
          </Grid>
          <Grid item xs={12} sm={12} md={12} lg={12} mb={8}>
            <Box
              component="div"
              display="flex"
              justifyContent="center"
              alignItems="center"
             
            >
              <Image layout="responsive"
                loader={myLoader}
                src="assets/PublisherFlow_FinalManageUsers.png"
                className="imageBorderradius"
                width={900}
                height={640}
                alt=""
              ></Image>
            </Box>
          </Grid>
          <Grid item xs={12} sm={12} md={12} lg={12} xl={12} mb={8}>
            <Box
              component="div"
              display="flex"
              justifyContent="center"
              alignItems="center"
             
            >
              <Image layout="responsive"
                loader={myLoader}
                src="assets/PublisherFlow_FinalOverview.png"
                width={720}
                height={1080}
                className="imageBorderradius"
                alt=""
              ></Image>
            </Box>
          </Grid>
          <Grid item xs={12} sm={12} md={12} lg={12} mb={8}>
            <Typography variant="h5">Testing</Typography>
            <Typography variant="h2">Usability Testing</Typography>
            <Typography variant="body1">
              Finally, we conducted qualitative usability testing sessions with
              our clients to identify problems in our prototype, uncover
              opportunities and to discover users' behaviors and preferences. We
              worked from user testing scripts and guided our users to perform
              specific tasks. We conducted our sessions via Zoom and recorded
              the sessions.
            </Typography>
            <Box
              component="div"
              display="flex"
              justifyContent="center"
              alignItems="center"
              
            >
              <Image layout="responsive"
                loader={myLoader}
                src="assets/FadeUsabilityTest_LoriMarion_2.gif"
                width="640"
                height="378"
                alt="Usability Testing"
                layout="responsive"
              />
            </Box>
          </Grid>
          <Grid item xs={12} sm={12} md={12} lg={12} mb={8}>
            <Typography variant="h5">Results & Reflections</Typography>

            <Typography variant="h2">Work With What You Have</Typography>
            <Typography variant="body1">
              Dashboards are a challenging undertaking due to the
              data-visulization features and figuring out the best user
              experience for those components. In this particualr project we had
              to rely on the brief which gave us a lot of information to begin
              designing our solution and we were then able to validate our
              assumptions by usability-testing.
            </Typography>
          </Grid>
        </Grid>
      </Box>
    </div>
  );
};

export default FadeDesign;
