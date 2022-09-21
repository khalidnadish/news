import React, { useContext, useState } from "react";
import {
  AppBar,
  Toolbar,
  Avatar,
  Chip,
  Container,
  Typography,
  Button,
  useMediaQuery,
  useTheme,
  Box,
  Divider,
} from "@mui/material";
import { Newslink } from "../context/context";
import MenuIcon from "@mui/icons-material/Menu";
import "./newsappbar.css";
import Drawer from "@mui/material/Drawer";

export default function NewsAppBar() {
  const [open, setOpen] = useState(false);
  const { reqlink, setReqlink } = useContext(Newslink);
  const themex = useTheme();
  const isSmallScreen = useMediaQuery(themex.breakpoints.down("sm"));
  console.log(isSmallScreen);
  return (
    <>
      <AppBar position="sticky">
        <Container maxWidth="lg">
          <div className="nav_container">
            <div className="logarea">
            <a href="https://www.nadish.online/" target={"_blank"}  className="logarea">
              <img
                width={"140px"}
                height={"auto"}
                src={"/white_logo.png"}
                loading="lazy"
              />
              </a>
            </div>

            {isSmallScreen ? <Smallscreen  open={open} setOpen={setOpen} /> : <Lagrescreen />}
          </div>
        </Container>
      </AppBar>
    </>
  );
}

const Smallscreen = ({open, setOpen}) => {
  
  const handleDrawer = () => {
    setOpen(true);
  };

  return (
    <>
      <div className="smallceenmenu">
        <Button onClick={() => handleDrawer()}>
          <MenuIcon />
        </Button>
        {open && <Drawermenu open={open} setOpen={setOpen} />}
      </div>
    </>
  );
};

const Lagrescreen = () => {
  return (
    <>
      <div className="categoyarea">
      <DisplayCategory/>
        
      </div>
    </>
  );
};

const Drawermenu = ({ open, setOpen }) => {
  return (
    <>
      <Drawer anchor="left" open={open} onClose={()=>setOpen(false)}>
        <Box p={2} width="250px" textAlign="center" role="presentation">
          <Typography mb={2} variant="h6">Category</Typography>
          <Divider />
        <div className="smallcategoyarea">
        <DisplayCategory/>
        </div>
        </Box>
      </Drawer>
    </>
  );
};


const DisplayCategory=() => {
  const { reqlink, setReqlink } = useContext(Newslink);
return (<>
<Chip
          avatar={<Avatar>B</Avatar>}
          variant="outlined"
          size="small"
          label={
            <Typography
              variant="caption"
              color={"common.white"}
              textTransform={"capitalize"}
            >
              business
            </Typography>
          }
          onClick={() => setReqlink("business")}
        />
        <Chip
          avatar={<Avatar>E</Avatar>}
          variant="outlined"
          size="small"
          label={
            <Typography
              variant="caption"
              color={"common.white"}
              textTransform={"capitalize"}
            >
              entertainment
            </Typography>
          }
          onClick={() => setReqlink((newsx) => "entertainment")}
        />
        <Chip
          avatar={<Avatar>G</Avatar>}
          variant="outlined"
          size="small"
          label={
            <Typography
              variant="caption"
              color={"common.white"}
              textTransform={"capitalize"}
            >
              world
            </Typography>
          }
          // color="secondary"
          onClick={() => setReqlink((newsx) => "world")}
        />
        <Chip
          avatar={<Avatar>H</Avatar>}
          variant="outlined"
          size="small"
          label={
            <Typography
              variant="caption"
              color={"common.white"}
              textTransform={"capitalize"}
            >
              health
            </Typography>
          }
          onClick={() => setReqlink("health")}
        />
        <Chip
          avatar={<Avatar>S</Avatar>}
          variant="outlined"
          size="small"
          label={
            <Typography
              variant="caption"
              color={"common.white"}
              textTransform={"capitalize"}
            >
              science
            </Typography>
          }
          onClick={() => setReqlink("science")}
        />
        <Chip
          avatar={<Avatar>E</Avatar>}
          variant="outlined"
          size="small"
          label={
            <Typography
              variant="caption"
              color={"common.white"}
              textTransform={"capitalize"}
            >
              sports
            </Typography>
          }
          onClick={() => setReqlink("sports")}
        />
        <Chip
          avatar={<Avatar>T</Avatar>}
          variant="outlined"
          size="small"
          label={
            <Typography
              variant="caption"
              color={"common.white"}
              textTransform={"capitalize"}
            >
              technology
            </Typography>
          }
          onClick={() => setReqlink("technology")}
        />
</>)

}
