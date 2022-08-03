import React from "react";
import ReactPlayer from "react-player";
import { useParams, NavLink, Link, Outlet } from "react-router-dom";
import VideosClicksSide from "./VİdeosClickSide";
import Videos from "./../../../VideoList/Videos";

const VideosClick = ({
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
  const params = useParams();
  return (
    <>
      <div className="container-fluid">
        {items.map((item) => {
          if (item?.id === params?.id) {
            // console.log(item);
            return (
              <div
                className="
                col
                 d-flex 
                 geneldiv"
                style={{
                  height: "90vh",
                  display: "flex",
                  flexWrap: "wrap",
                  overflow: "hidden",
                }}
                key={item.id}
              >
                {/* player */}
                <div
                  className="col-8 sticky-top"
                  style={{
                    borderRight: "5px solid #ccc",
                  }}
                >
                  {" "}
                  <div
                    className="col  tıklanan video"
                    style={{
                      // backgroundColor: "red",
                      width: `${item.width}`,
                      height: `${item.height}`,
                      margin: "0  5vw ",
                    }}
                  >
                    <div
                      className=" col-12 offset-1"
                      style={{
                        width: `${item.width}`,
                        height: `${item.height}`,
                        margin: "0  1vw ",
                      }}
                    >
                      <Videos
                        item={item}
                        theme={theme}
                        setTheme={setTheme}
                        search={search}
                        setSearch={setSearch}
                        fetchSearch={fetchSearch}
                        fetchVideo={fetchVideo}
                        height="55vh"
                        width="100%"
                        playing={true}
                      />

                      {/* <ReactPlayer
                        url={`https://www.youtube.com/watch?v=${item.id}&ab_channel=${item.snippet.channelTitle}`}
                        title="YouTube video player"
                        height="50vh"
                        width="100%"
                        controls={true}
                        playing={true}
                        frameBorder="1"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                      /> */}
                    </div>

                    <div
                      className="col  tıklanan video"
                      style={{
                        // backgroundColor: "red",
                        // height: "90vh",
                        margin: "0 0 0 2vw ",
                      }}
                    >
                      <div>
                        <span
                          style={{
                            width: "100%",
                            height: "3rem",
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "center",
                            fontSize: "1.5rem",
                            border: "none",
                          }}
                        >
                          <button
                          theme={theme}
                            className="btn btn-outline-secondary"
                            style={{ margin: " 1rem", border: "none" }}
                          >
                            <i className="fas fa-thumbs-up" />
                          </button>
                          <button
                          theme={theme}
                            className="btn btn-outline-secondary"
                            style={{ margin: " 1rem", border: "none" }}
                          >
                            <i className="fas fa-thumbs-down" />
                          </button>
                        </span>
                        <h4>{item.snippet.title} </h4>

                        <h5>{item.snippet.channelTitle}</h5>

                        <p style={{ height: "15vh", overflow: "scroll" }}>
                          {item.snippet.description}
                        </p>
                        <div
                          className=""
                          style={{
                            display: "flex",
                            justifyContent: "space-between",
                            alignItems: "center",
                          }}
                        >
                          <span>
                            {Math.floor(Math.random() * 999) + "k views"}

                            <span style={{ margin: " 0 0 0 1rem" }}>
                              {item.snippet.publishedAt.slice(0, 10)}
                            </span>
                          </span>

                          <button className="btn btn-danger  ">ABONE OL</button>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* <Outlet /> */}
                </div>

                <VideosClicksSide theme={theme} items={items} />
              </div>
            );
          }
        })}
      </div>
    </>
  );
};

export default VideosClick;

// border
