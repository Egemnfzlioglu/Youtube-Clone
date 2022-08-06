import React from "react";
// import ReactPlayer from "react-player";
import {
  Link,
  //  NavLink,
  Outlet,
  //  useParams
} from "react-router-dom";
import Videos from "./../../VideoList/Videos";

const SectionVideos = ({ theme, items }) => {
  // console.log("🚀 ~ file: SectionVideos.js ~ line 17 ~ search", search)
  // console.log("🚀 ~ file: SectionVideos.js ~ line 17 ~ items", items)
  // const useP = useParams();
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
          padding: " 0 1.5rem  ",
        }}
      >
        {items &&
          items.map((item) => (
            <div
              className={`  ${theme}`}
              style={{
                width: "21em",
                height: "20%",
                margin: " 1rem ",
                // padding: ".5% 0 0 1%",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
              key={item.id}
            >
              <Link to={`${item.id}`}>
                <Videos item={item} height={item.height} width={item.width} />

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

                    <p className={`px-2  ${theme}`}>
                      {Math.floor(Math.random() * 999) + "k views"}

                      <span style={{ margin: " 0  1rem" }}>
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
