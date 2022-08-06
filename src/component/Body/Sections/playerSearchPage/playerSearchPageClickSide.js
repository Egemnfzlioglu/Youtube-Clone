import React from "react";
// import ReactPlayer from "react-player";
import {
  // useParams, NavLink,
  Link,
  Outlet,
} from "react-router-dom";
// import Videos from "../../../VideoList/Videos";
import VideosSearch from "../../../VideoList/VideosSearch";

const PlayerSearchPageClickSide = ({ searchItems, theme,search }) => {
  return (
    <>
      <div
        className="col-12  sticky-right"
        style={{
          overflow: "scroll",
          height: "90vh",
        }}
      >

        
        {searchItems.map((itemSearch) => {
          // console.log(itemSearch);
          return (
            <>
              {/* videolar */}

              <div
                className={` col-12`}
                style={{
                  display: "flex",
                  borderBottom: "1px solid #ccc",
                  margin:"0 auto"
                }}
                key={itemSearch.id}
              >
                {" "}
                <Link to={`/search/${search}/${itemSearch.id.videoId}`}>
                  {/* {console.log(Link)} */}
                  <div
                    className="col-11   "
                    style={{
                      width: `${itemSearch.width}`,
                      height: `${itemSearch.height}`,
                      // height: "90vh",
                      display: "flex",
                      flexDirection: "row",
                      alignItems: "center",
                      // margin: "1%",
                    }}
                    key={itemSearch.id.videoId}
                  >
                    <div
                      className="col-5 "
                      style={{
                        margin: "1rem",
                        width: "300px"
                      }}
                      key={itemSearch.id.videoId}
                    >
                      <VideosSearch itemSearch={itemSearch} key={itemSearch.id.videoId} />
                     
                    </div>

                    <div
                      className={` col-6 ${theme}`}
                      style={{
                        padding: "1rem",
                      }}
                    >
                      <div>
                        <p>{itemSearch.snippet.title}</p>
                        <p>{itemSearch.snippet.channelTitle}</p>

                        <span>
                          {Math.floor(Math.random() * 999) + "k views"}

                          <span style={{ margin: " 0 0 0 1rem" }}>
                            {itemSearch.snippet.publishedAt.slice(0, 10)}
                          </span>
                        </span>
                      </div>
                    </div>
                  </div>{" "}
                  <Outlet />
                </Link>
              </div>
            </>
          );
        })}
      </div>
    </>
  );
};

export default PlayerSearchPageClickSide;
