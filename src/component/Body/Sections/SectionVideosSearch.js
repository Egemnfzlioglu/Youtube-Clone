import React from "react";
// import ReactPlayer from "react-player";
import {
  Link,
  //  NavLink,
  Outlet,
  //   useLocation,
   useParams
  } from "react-router-dom";
  
  import VideosSearch from "./../../VideoList/VideosSearch";
  

  const SectionVideosSearch = (props) => {
  // console.log("SectionVideosSearch", props);  
  const usep=useParams();
  // console.log("🚀 ~ file: SectionVideosSearch.js ~ line 10 ~ useParams", usep)
  return (
    <>
      <div
      
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "center",
          padding: " 0 1.5rem  ",
        }}
      >
        {props.searchItems &&
          props.searchItems.map(
            (itemSearch) => (
              // console.log("itemSearch", itemSearch),
              (
                // <div style={{ margin: "0 0 0 6rem " }}>{itemSearch.id.videoId}</div>

                <div
                  style={{
                    width: "21em",
                    height: "20%",
                    margin: "  2rem ",

                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                  key={itemSearch.id.videoId}
                >
                  <Link to={`${itemSearch.id.videoId}`}>
                    <VideosSearch
                      itemSearch={itemSearch}
                      key={itemSearch.id.channelId}
                    />

                    <div   className={`  ${props.theme}`} style={{ padding: "0 2%" }}  key={itemSearch.id.videoId}>
                      <h4
                        style={{
                          fontSize: "1.3rem",
                          padding: "0.5%",
                        }}
                      >
                        {itemSearch.snippet.title}
                      </h4>
                      <h5
                        style={{
                          fontSize: "1rem",

                          display: "flex",
                          flexDirection: "row",
                          flexWrap: "wrap",
                          padding: "1%",
                          width: "100%",
                        }}
                      >
                        <span>{itemSearch.snippet.channelTitle} </span>

                        <p>
                          {Math.floor(Math.random() * 999) + "k views"}

                          <span style={{ margin: " 0 0 0 1rem" }}>
                            {itemSearch.snippet.publishedAt.slice(0, 10)}
                          </span>
                        </p>
                      </h5>
                    </div>
                    <Outlet />
                  </Link>
                </div>
              )
            )
          )}
      </div>
    </>
  );
};

export default SectionVideosSearch;
