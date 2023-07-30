import React from "react";
import { styled } from "@mui/material/styles";
import { Box, Grid, Container, Item, Paper } from "@mui/material";
import { Typography } from "@mui/material";
import Divider from "@mui/material/Divider";
import Image from "next/image";
import myLoader from "../components/Loader";
import Meta from "../components/Meta";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";

function createData(criteria, test, evaluation) {
  return { criteria, test, evaluation };
}

const LimbSalvage = () => {
  return (
    <div className="wgsr">
      <Meta title="Case Study::West-Side German Shepherd Rescue" />

      <Box
        component="div"
        display="flex"
        justifyContent="center"
        alignItems="center"
        mt={8}
      >
        <Grid container spacing={2} maxWidth="sm">
          <Grid item xs={12} lg={12}>
            <Box component="section" mt={4} mb={3} sx={{ textAlign: "left" }}>
              <Typography variant="h1" className="caseStudyHeads">
              Limb Salvage Amnion Chorion Tissue
              </Typography>
              <Image layout="responsive" layout="responsive"
                loader={myLoader}
                src="wgsr_hero_study.png"
                width={900}
                height={506}
                alt="WGSR Hero"
              ></Image>
            </Box>
            <Box component="section" mt={4} mb={3} sx={{ textAlign: "left" }}>
            <Typography variant="body1">
            Amniotic and chorionic tissues, collectively referred to as amniotic membrane, have become increasingly popular as a treatment option for limb salvage in wound care. These tissues have been used for many years in surgical procedures due to their anti-inflammatory, antimicrobial, and regenerative properties. When applied to a wound, amniotic membrane can help to reduce inflammation, promote tissue regeneration, and aid in the healing process.

Verified Presence of Growth Factors and Cytokines:

IL,6; IL10             Anti-inflamatory
B-Defensin-1       Antimicrobial
PDGF-AA            Early cell signaling SASP factor for wound healing 
PDGF-BB            Angiogenic
VEGF                  Collagen deposition, angiogenesis, and epithelization
TGF                     Inflamation, stimulating angiogenesis, fibroblast proliferation, collagen synthesis, and deposition remodeling of new extracellular matrix 
FGF-2                  Cell Proliferation and Remodeling
EGF                     Stimulation, proliferation, and migration of keratinocyte, endothelial cells, and fibroblasts

In the context of limb salvage, amniotic membrane can be used to treat complex wounds that are difficult to heal using traditional methods. These wounds can include diabetic foot ulcers, venous ulcers, and arterial ulcers, among others. Amniotic membrane has been shown to be effective in reducing healing times, decreasing pain and discomfort, and promoting healthy tissue growth.

The proven benefits of using a Amnion Chorion tissue as an antimicrobial adhesion barrier include a significant reduction in:

- Fibrosis
- Healing time 
- Infections
- Keloids
- Hyperpigmentation
- Swelling
- Pain
- Revision Surgery 

As a wound surgeon, it is important to consider all treatment options for limb salvage, including the use of amniotic membrane. However, it is also important to consider the individual patient's needs and the specific characteristics of their wound when determining the most appropriate treatment plan.
              </Typography>
            </Box>
          </Grid>
          
        </Grid>
      </Box>

      <Box
        component="div"
        display="flex"
        justifyContent="center"
        alignItems="center"
        mb={15}
        sx={{ flexGrow: 1 }}
      >
       
      </Box>
    </div>
  );
};

export default LimbSalvage;
