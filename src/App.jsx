import React, { useState, useEffect, useContext } from "react";
import axios from "axios";
import { Newslink } from "./compenet/context/context";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import NewsAppBar from "./compenet/navbar/NewsAppBar";
import { Box, CssBaseline, Paper, Typography } from "@mui/material";
import "./App.css";
import Muinews from "./compenet/newscard/Muinews";
import Footer from "./compenet/footer/Footer";
import Modex from "./compenet/mode/Mode";

import CircularProgress from "@mui/material/CircularProgress";

function App() {
  const { reqlink, modex } = useContext(Newslink);

  const [data, setData] = useState();
  const [isloading, setIsloading] = useState(true);

  const apiKey = "c3731f1854b1714053195b23bae33623";

  const xlink2 = `https://inshorts.deta.dev/news?category=${reqlink}`;

  // https://api.currentsapi.services/v1/latest-news?language=us&apiKey=dPnoEFjvSmPJsEK-5Zx3oP7g79muwB403fIeu3MF55jYSk6D
  const xlink =
    "https://api.currentsapi.services/v1/latest-news?" +
    "apiKey=dPnoEFjvSmPJsEK-5Zx3oP7g79muwB403fIeu3MF55jYSk6D";

  // https://api.mediastack.com/v1/news?access_key=c3731f1854b1714053195b23bae33623

  // `http://api.mediastack.com/v1/news?access_key=${apiKey}`

  // const apiKey = "5b44ad4430b147d4bc6e618ee3fb6179";
  const darkTheme = createTheme({
    palette: {
      mode: modex,
    },
  });

  useEffect(() => {
    setIsloading(true);

    axios
      .get(
        xlink2
        // // http://api.mediastack.com/v1/news?access_key=c3731f1854b1714053195b23bae33623
        // `http://api.mediastack.com/v1/news?access_key=${apiKey}`
        // // `https://newsapi.org/v2/top-headlines?language=en&category=${reqlink}&apiKey=${apiKey}`
      )
      .then((response) => {
        setData(response);
        setIsloading(false);
      })
      .catch((error) => console.log(error));
  }, [reqlink]);

  console.log("dadad", data);
  return (
    <ThemeProvider theme={darkTheme}>
      <CssBaseline />
      {isloading && <LoadingData reqlink={reqlink} />}
      <Paper>
        {data && <Heading reqlink={reqlink} />}

        <div className="App">
          <div className="all__news">
            {data &&
              data.data.data.map((news) => {
                return <Muinews newsdata={news} key={news.id} />;
              })}
          </div>
        </div>
      </Paper>
      <Footer />
     
    </ThemeProvider>
  );
}

export default App;

const LoadingData = ({reqlink }) => {
  return (
    <>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Typography variant="body1" mr={2}>
          Wait Please Getting Latest News of {reqlink} ....
        </Typography>
        <CircularProgress color="inherit" size={20} />
      </Box>
    </>
  );
};

const Heading = ({ reqlink }) => {
  return (
    <>
      <NewsAppBar />
      <Box display={"flex"} justifyContent={"space-between"} p={1}>
        <Typography sx={{ textTransform: "capitalize", mt: 2 }}>
          latest 20 news of {reqlink}
        </Typography>
        <Modex />
      </Box>
    </>
  );
};
