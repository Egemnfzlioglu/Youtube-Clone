import React from "react";
import ReactPlayer from "react-player";
import { useParams, NavLink, Link, Outlet } from "react-router-dom";
import Videos from './../../../VideoList/Videos';

const VideosClicksSide = ({ items, theme }) => {
  return (
    <>
      <div
        className="col-4  sticky-right"
        style={{
          overflow: "scroll",
          height: "90vh",
        }}
      >
        {items.map((item) => {
          // console.log(item);
          return (
            <>
              {/* videolar */}

              <div
                className="col-8 "
                style={{
                  display: "flex",
                }}
         
              >
                {" "}
                <Link to={`/${item.id}`}>
                  <div
                    className="col-12   "
                    style={{
                      width: `${item.width}`,
                      height: `${item.height}`,
                      // height: "90vh",
                      display: "flex",
                      // flexDirection: "column",
                      alignItems: "center",
                      margin:"1%"
                    }}
                    key={item.id}
                  >
                    <div
                      className="col-9 "
                      style={{
                        margin: "1rem",

                      }}
                 
                 
                    >
                    <Videos item={item} />
                    
                      {/* <ReactPlayer
                        url={`https://www.youtube.com/watch?v=${item.id}&ab_channel=${item.snippet.channelTitle}`}
                        title="YouTube video player"
                        height={`${item.height}px`}
                        width={`${item.width}px}`}
                        // q={`${item.id}`}
                        controls={true}
                        playing={false}
                        frameBorder="1"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                      /> */}
                    </div>
                  
                  <div
                    className="col-6  "
                    style={{
                      padding: "1rem",
                    }}
                  >
                    <div>
                      <p>{item.snippet.title}</p>
                      <p>{item.snippet.channelTitle}</p>

                      <span>
                        {Math.floor(Math.random() * 999) + "k views"}

                        <span style={{ margin: " 0 0 0 1rem" }}>
                          {item.snippet.publishedAt.slice(0, 10)}
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

export default VideosClicksSide;
