import React from "react";

const MicIcon = () => {
  return (
    <div 
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <p
    
        style={{
          margin: ".5vw .1vh",
          borderRadius: "50%",
          border: "none ",
          fontSize: "1.5rem ",
      
        }}
      >
        <i className="fa-solid fa-microphone" />
      </p>
    </div>
  );
};

export default MicIcon;
