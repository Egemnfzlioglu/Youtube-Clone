import React from "react";
import ReactPlayer from "react-player";
import { Link, NavLink, Outlet, useParams } from "react-router-dom";
import Videos from "./../../VideoList/Videos";

const SectionVideos = ({
  theme,
  setTheme,
  items,
  loading,
  setLoading,
  search,
  setSearch,
  fetchSearch,
  fetchVideo,

 }) => {
  const useP = useParams();
  // console.log(useP);
  return (
    <>
      <div
        className={`  ${theme}`}
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "center",
        }}
      >
        {items.map((item) => (
          <div
            className={`  ${theme}`}
            style={{
              width: "21em",
              height: "20%",
              margin: " 1em ",
              // padding: ".5% 0 0 1%",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
            key={item.id}
          >
            {/* ########################################## */}
            {/* PLAYER KISMI ve Linkleme*/}
            {/* ########################################## */}

            <Link to={`${item.id}`}>
              <Videos item={item}
                theme={theme}
                setTheme={setTheme}
                search={search}
                setSearch={setSearch}
                fetchSearch={fetchSearch}
                fetchVideo={fetchVideo}
               height={item.height}
              
              />
              {/* <ReactPlayer
                url={`https://www.youtube.com/watch?v=${item.id}`}
                title="YouTube video player"
                controls={true}
                width="26em"
                height="15em"
                frameBorder="1"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              /> */}
              {/* ########################################## */}
              {/* VİDEO DETAY KISMI */}
              {/* ########################################## */}
              <div className={`  ${theme}`} style={{ padding: "0 2%" }}>
                <h4
                  style={{
                    fontSize: "1.3rem",
                    padding: "0.5%",
                  }}
                >
                  {item.snippet.title}
                </h4>
                <h5
                  className={`  ${theme}`}
                  style={{
                    fontSize: "1rem",
                    // backgroundColor: "green",
                    display: "flex",
                    flexDirection: "row",
                    flexWrap: "wrap",
                    padding: "1%",
                    width: "100%",
                  }}
                >
                  <span className={`  ${theme}`}>
                    {item.snippet.channelTitle}{" "}
                  </span>

                  <div
                    className={`  ${theme}`}
                    style={{
                      fontSize: ".8rem",
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "center",
                      flexWrap: "wrap",
                      padding: "1% 2%",
                    }}
                  ></div>
                  <p className={`  ${theme}`}>
                    {Math.floor(Math.random() * 999) + "k views"}

                    <span style={{ margin: " 0 0 0 1rem" }}>
                      {item.snippet.publishedAt.slice(0, 10)}
                    </span>
                  </p>
                </h5>
              </div>
              <Outlet />
            </Link>
          </div>
        ))}
      </div>
    </>
  );
};

export default SectionVideos;

// {/* ########################################## */}
//               {/* PLAYER KISMI */}
//               {/* ########################################## */}

//               {/* ########################################## */}
//               {/* ########################################## */}
//               {/* ########################################## */}
