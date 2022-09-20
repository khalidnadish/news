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

function App() {
  const { reqlink,modex } = useContext(Newslink);

  const [data, setData] = useState();
  const apiKey = "5b44ad4430b147d4bc6e618ee3fb6179";

  const darkTheme = createTheme({
    palette: {
      mode: modex,
    },
  });

  useEffect(() => {
    axios
      .get(
        `https://newsapi.org/v2/top-headlines?language=en&category=${reqlink}&apiKey=${apiKey}`
      )
      .then((response) => {
        setData(response.data);
        console.log(response.data);
      })
      .catch((error) => console.log(error));
  }, [reqlink]);

  return (
    <ThemeProvider theme={darkTheme}>
      <CssBaseline />
      <Paper>
        <NewsAppBar />
        <Box display={"flex"} justifyContent={"space-between"} p={1}>
          <Typography sx={{ textTransform: "capitalize", mt: 2 }}>
            latest 20 news of {reqlink}
          </Typography>
          <Modex />
        </Box>
        <div className="App">
          <div className="all__news">
            {data
              ? data.articles.map((news) => (
                  // <NewsCard newsdata={news} key={news.url} />
                  <Muinews newsdata={news} key={news.url} />
                ))
              : "Loading"}
          </div>
        </div>
      </Paper>
      <Footer />
    </ThemeProvider>
  );
}

export default App;
