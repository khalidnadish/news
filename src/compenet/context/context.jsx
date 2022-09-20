import React, { useState, createContext } from "react";
export const Newslink = createContext();
Newslink.displayName = "NewsContext>>>";

export const NewsProvider = (props) => {
  const [reqlink, setReqlink] = useState("technology");
  const [modex, setModex] = useState("dark");
   

  return (
    <Newslink.Provider
      value={{
        reqlink: reqlink,
        setReqlink: setReqlink,
        modex: modex,
        setModex: setModex,
      }}
    >
      {props.children}
    </Newslink.Provider>
  );
};
