import React, { useState, useEffect } from "react";
export const YoutubeContext = React.createContext();

const API_KEY = "AIzaSyCS7Y2F7Q0fnm7w1OyIwwFw3Gmb3H6PsZw";
const BASE_URL = "https://www.googleapis.com/youtube/v3/videos?"; //soru işareti olmadan hata veriyor.
const BASE_URL_SEARCH = "https://www.googleapis.com/youtube/v3/search?"; //soru işareti olmadan hata veriyor.
// yardımcı kaynak https://youtu.be/fOKgHld96mU?t=1700

// yardımcı kaynak
// https://youtu.be/nbyHu4_nyOY?t=2346
export const YoutubeProvider = ({ children }) => {
  const [loading, setLoading] = useState(true);
  const [items, setItems] = useState([]);

  const [theme, setTheme] = useState("bgLightapp"); // theme light or dark

  const [search, setSearch] = useState("");

  const fetchVideo = async (search) => {
    setLoading(true);
    const response = await fetch(
      BASE_URL +
        new URLSearchParams({
          key: API_KEY,
          part: "snippet",
          maxResults: 10,
          params: {
            q: search,
          },
          
          chart: "mostPopular",
          type: "video",
          videoEmbeddable: "true",
          videoSyndicated: "true",
          videoLicense: "youtube",
          videoDuration: "long",
          regionCode: "TR",
          // videoCategoryId: "1",
        })
    );
    const json = await response.json();
    setItems(json.items);
    setLoading(false);
  };

  useEffect(() => {
    if (search) {
      fetchVideo(search);
      setLoading(false);
      // {console.log(fetchVideo(search));}
    }
  }, [search]);

  const fetchSearch = async (search) => {
    setLoading(true);
    const response = await fetch(
      BASE_URL_SEARCH +
        new URLSearchParams({
          key: API_KEY,
          part: "snippet",
          maxResults: 10,
          params: {
            q: search,
            forContentOwner: true,
          },
          type: "video",
          videoEmbeddable: "true",
          videoSyndicated: "true",
          videoLicense: "youtube",
          videoDuration: "long",



          // chart: "mostPopular",

          regionCode: "TR",
          // videoCategoryId: "1",




        })
    );
    const json = await response.json();
    setItems(json.items);
    setLoading(false);
  };

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
        setLoading,
        theme,
        setTheme,
        search,
        setSearch,
        fetchVideo,
        fetchSearch,
      }}
    >
      {children}
    </YoutubeContext.Provider>
  );
};
