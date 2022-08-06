import React from "react";
import ReactPlayer from "react-player";
// import { useParams } from "react-router-dom";

const VideosSearch = ({ 
  itemSearch, 
  width,
  height,
  playing,
}) => {
  return (
    <>
      {itemSearch && (
        <div className="video-container">
          <ReactPlayer
            url={`https://www.youtube.com/watch?v=${itemSearch.id.videoId}&ab_channel=${itemSearch.snippet.channelTitle}`}
            width={width || "100%"}
            height={height || "100%"}
            controls={true}
            playing={playing || false}         
            frameBorder="1"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          
          />
        </div>
      )}
    </>
  );
};

export default VideosSearch;

