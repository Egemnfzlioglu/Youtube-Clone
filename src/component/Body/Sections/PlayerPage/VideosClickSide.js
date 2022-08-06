import React from "react";
// import ReactPlayer from "react-player";
import {
  // useParams, NavLink,
  Link,
  Outlet,
} from "react-router-dom";
import Videos from "../../../VideoList/Videos";
// import VideosSearch from "../../../VideoList/VideosSearch";

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
                className={` col-12`}
                style={{
                  display: "flex",
                  borderBottom: "1px solid #ccc",
                }}
                key={item.id}
              >
                {" "}
                <Link to={`/${item.id}`}>
                  <div
                    className="col-11   "
                    style={{
                      width: `${item.width}`,
                      height: `${item.height}`,
                      // height: "90vh",
                      display: "flex",
                      flexDirection: "row",
                      alignItems: "center",
                      margin: "1%",
                    }}
                    key={item.id}
                  >
                    <div
                      className="col-5 "
                      style={{
                        margin: "1rem",
                        width: "300px",
                      }}
                      key={item.id}
                    >
                      <Videos item={item} key={item.id} />
                    
                    </div>

                    <div
                      className={` col-4 ${theme}`}
                      style={{
                        // padding: "1rem",
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
