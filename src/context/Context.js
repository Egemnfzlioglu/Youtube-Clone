import React, { useState, useEffect } from "react";
export const YoutubeContext = React.createContext();

// https://youtube.googleapis.com/youtube/v3/search?part=snippet&q=kafalar&key=AIzaSyA22spR8sAYEDiTml5puNbKnvhV7qoez5s

// AIzaSyA22spR8sAYEDiTml5puNbKnvhV7qoez5s

// const API_KEY_SEARCH = "AIzaSyCOoquLockIxYZVE5nreKPDMDbVTh6KT-U";
const API_KEY = "AIzaSyCOoquLockIxYZVE5nreKPDMDbVTh6KT-U";
const BASE_URL = "https://youtube.googleapis.com/youtube/v3/videos?"; //soru işareti olmadan hata veriyor.
const BASE_URL_SEARCH = "https://youtube.googleapis.com/youtube/v3/search?"; //soru işareti olmadan hata veriyor.
// yardımcı kaynak https://youtu.be/fOKgHld96mU?t=1700

// yardımcı kaynak
// https://youtu.be/nbyHu4_nyOY?t=2346
export const YoutubeProvider = ({ children }) => {
  const [loading, setLoading] = useState(false);
  const [items, setItems] = useState([]);

  const [theme, setTheme] = useState("Dark"); // theme light or dark

  const [search, setSearch] = useState("");
  const [searchItems, setSearchItems] = useState([]);

  const fetchVideo = async (search) => {
    setLoading(true);
    const response = await fetch(
      BASE_URL +
        new URLSearchParams({
          key: API_KEY,
          maxResults: 30,
          part: "snippet",
          chart: "mostPopular",
          type: "video",
          videoEmbeddable: "true",
          videoSyndicated: "true",
          videoLicense: "youtube",
          videoDuration: "long",
          regionCode: "TR",
        })
    );
    const json = await response.json().catch((err) => {
      console.log(err);
    });
    setItems(json.items);
    setLoading(false);
  };

  const fetchSearch = async (search) => {
    setLoading(true);
    const response = await fetch(
      BASE_URL_SEARCH +
        new URLSearchParams({
          q: search,
          key: API_KEY,
          maxResults:30,
          part: "snippet",
        })
    );

    const json = await response.json().catch((err) => {
      console.log(err);
    });
    setSearchItems(json.items);
    setLoading(false);
    console.log(json.items);
  };

  useEffect(() => {
    if (search) {
      fetchVideo(search);
      setLoading(false);
      // {console.log(fetchVideo(search));}
    }
  }, [search]);
  // console.log(search);
  useEffect(() => {
    if (!search) {
      fetchVideo();
      setLoading(false);
    }
  }, [search]);

  // {console.log(search);}

  return (
    <YoutubeContext.Provider
      value={{
        items,
        loading,
        theme,
        search,
        searchItems,
        setItems,
        setLoading,
        setTheme,
        setSearch,
        setSearchItems,
        fetchVideo,
        fetchSearch,
      }}
    >
      {children}
    </YoutubeContext.Provider>
  );
};
