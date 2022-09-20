import * as React from "react";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Avatar from "@mui/material/Avatar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import FavoriteIcon from "@mui/icons-material/Favorite";
import TravelExploreIcon from "@mui/icons-material/TravelExplore";
import moment from "moment";
import { Box } from "@mui/material";
export default function Muinews({ newsdata }) {
  return (
    <Card sx={{ maxWidth: 300, border: "1px solid #ccc" }}>
      <CardHeader
        avatar={<Avatar src={newsdata.urlToImage} aria-label="recipe" />}
        action={
          <>
            <Box sx={{ display:"flex",flexDirection:"column"}} >
            
            <IconButton aria-label="share" sx={{ margin: 0, minWidth: 0 }}>
              <a
                href={newsdata.url}
                target="_blank"
                style={{ margin: 0, minWidth: 0 }}
              >
                <TravelExploreIcon />
              </a>
            </IconButton>
            </Box>
          </>
        }
        title={
          <Typography
            variant="caption"
            color="text.secondary"
            fontSize={"10px"}
          >
            {/* moment({newsdata.publishedAt}). */}
            {moment(newsdata.publishedAt, "YYYYMMDD").fromNow()};
          </Typography>
        }
        subheader={
          <Typography variant="subtitle2" color="text.primary">
            {newsdata.title}
          </Typography>
        }
        align="left"
      />
      <CardMedia
        component="img"
        height="194"
        image={newsdata.urlToImage}
        alt={newsdata.title}
      />
      <CardContent>
        <Typography align="left" variant="body2" color="text.secondary">
          {newsdata.description}
        </Typography>
      </CardContent>

      <CardActions
        disableSpacing
        sx={{ display: "flex", alignItems: "center", flexDirection: "row" }}
      ></CardActions>
    </Card>
  );
}
