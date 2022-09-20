import { Box, Typography } from "@mui/material";
import React from "react";

function Footer() {
  return (
    <Box display="flex" justifyContent="space-around" sx={{borderTop:"2px solid",borderBottom:"1px solid",mt:3,p:1}}>
      <Typography
        component={"a"}
        variant="caption"
        href="https://www.nadish.online"
        target="_blank"
      >
        Copy Right ... nadish.online
      </Typography>

      <img width={"80px"} height={"auto"} src={"/logo.png"}  loading="lazy"/>
        
        
      

    </Box>
  );
}

export default Footer;
