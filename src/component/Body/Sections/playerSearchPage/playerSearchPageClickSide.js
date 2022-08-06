import React from "react";
// import ReactPlayer from "react-player";
import { useParams, NavLink, Link, Outlet } from "react-router-dom";
// import Videos from "../../../VideoList/Videos";
import VideosSearch from "../../../VideoList/VideosSearch";
// import Search from '../../../Navbar/NavbarMiddleComponent/Search';

// const PlayerSearchPageClickSide = (props) => {
const PlayerSearchPageClickSide = ([itemSearch]) => {
  // console.log("PlayerSearchPageClickSide", props);
  // const itemSearch = props.itemSearch;
  // console.log("itemSearch", itemSearch);

  console.log("PlayerSearchPageClickSide", itemSearch);

  const params = useParams();
  console.log(
    "🚀 ~ file: PlayerSearchPageClickSide.js ~ line 10 ~ useParams",
    params
  );
  return (
    <>
      <div
        className="col-8 "
        style={{
          display: "flex",
        }}
        key={itemSearch.id.videoId}
      >
        {/* <Link to={`${itemSearch.id.videoId}`}> */}
        <div
          className="col-12   "
          style={{
            width: `${itemSearch.width}`,
            height: `${itemSearch.height}`,
            // height: "90vh",
            display: "flex",
            // flexDirection: "column",
            alignItems: "center",
            margin: "1%",
          }}
          key={itemSearch.id.videoId}
        >
          <div
            className="col-9 "
            style={{
              margin: "1rem",
            }}
            key={itemSearch.id.videoId}
          >
            {/* <Videos item={item} key={item.id} /> */}
            //{" "}
            <VideosSearch
              itemSearch={itemSearch}
              key={itemSearch.id.videoId}
            />
            {/* <VideosSearch item={item} key={item.id.videoId} /> */}
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
        {/* <Outlet /> */}
        {/* </Link> */}
      </div>
    </>
  );
};

export default PlayerSearchPageClickSide;
