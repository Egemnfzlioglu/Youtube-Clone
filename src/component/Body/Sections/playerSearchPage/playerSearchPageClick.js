import React from "react";
// import ReactPlayer from "react-player";
import { useParams, Outlet } from "react-router-dom";
import PlayerSearchPageClickSide from "./playerSearchPageClickSide";
import VideosSearch from "../../../VideoList/VideosSearch";

const PlayerSearchPageClick = ({ searchItems, theme, search }) => {
  // console.log("PlayerSearchPageClick", props);
  const params = useParams();
  // console.log(
  //   "🚀 ~ file: PlayerSearchPageClick.js ~ line 10 ~ useParams",
  //   params
  // );
  return (
    <>
      <div className="container-fluid">
        {searchItems.map((itemSearch) => {
          if (itemSearch.id.videoId === params.videoId) {
            // console.log("itemSearch", itemSearch);
            // console.log("params", params);
            // burası çalışıyor tıklanınca
            // {
            //   console.log(itemSearch, "itemSearch");
            // }

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
                key={itemSearch.id.videoId}
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
                      width: `${itemSearch.width}`,
                      height: `${itemSearch.height}`,
                      margin: "0  5vw ",
                    }}
                  >
                    <div
                      className=" col-12 offset-1"
                      style={{
                        width: `${itemSearch.width}`,
                        height: `${itemSearch.height}`,
                        margin: "0  1vw ",
                      }}
                    >
                      <VideosSearch
                        itemSearch={itemSearch}
                        key={itemSearch.id.videoId}
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
                            className="btn btn-outline-secondary"
                            style={{ margin: " 1rem", border: "none" }}
                          >
                            <i className="fas fa-thumbs-up" />
                          </button>
                          <button
                            className="btn btn-outline-secondary"
                            style={{ margin: " 1rem", border: "none" }}
                          >
                            <i className="fas fa-thumbs-down" />
                          </button>
                        </span>
                        <h4>{itemSearch.snippet.title} </h4>

                        <h5>{itemSearch.snippet.channelTitle}</h5>

                        <p style={{ height: "15vh", overflow: "scroll" }}>
                          {itemSearch.snippet.description}
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
                              {itemSearch.snippet.publishedAt.slice(0, 10)}
                            </span>
                          </span>

                          <button className="btn btn-danger  ">ABONE OL</button>
                        </div>
                      </div>
                    </div>
                  </div>
                  <Outlet />
                </div>

                <div className="col-4">
                  <PlayerSearchPageClickSide
                    searchItems={searchItems}
                    search={search}
                    theme={theme}
                    key={itemSearch.id.videoId}
                  />
                  {/* bunda bir sıkıntı var */}
                </div>
              </div>
            );
          }
        })}
      </div>
    </>
  );
};

export default PlayerSearchPageClick;

// border
