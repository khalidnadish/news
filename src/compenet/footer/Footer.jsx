import { Box, Typography } from "@mui/material";
import React from "react";

function Footer() {
  return (
    <Box display="flex" justifyContent="space-between" alignItems={"center"} sx={{borderTop:"2px solid",borderBottom:"1px solid",mt:3,p:1}}>
      <Typography
        component={"a"}
        variant="caption"
        href="https://www.nadish.online"
        target="_blank"
      >
        Copy Right ... nadish.online
      </Typography>

      <div className="logarea">
            <a href="https://www.nadish.online/" target={"_blank"}  className="logarea">
              <img
                width={"130px"}
                height={"auto"}
                src={"/white_logo.png"}
                loading="lazy"
              />
              </a>
            </div>

      {/* <img width={"80px"} height={"auto"} src={"/logo.png"}  loading="lazy"/> */}
        
        
      

    </Box>
  );
}

export default Footer;
