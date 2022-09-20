import { AppBar, Avatar, Chip, Container, Typography } from "@mui/material";
import React, { useState, useContext } from "react";
import { Newslink } from "../context/context";
import "./newsappbar.css";

export default function NewsAppBar() {
  const { reqlink, setReqlink } = useContext(Newslink);
  return (
    <>
      <AppBar position="sticky">
        <Container maxWidth="lg">
          <div className="nav_container">
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
                  general
                </Typography>
              }
              // color="secondary"
              onClick={() => setReqlink((newsx) => "general")}
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
          </div>
        </Container>
      </AppBar>
    </>
  );
}
