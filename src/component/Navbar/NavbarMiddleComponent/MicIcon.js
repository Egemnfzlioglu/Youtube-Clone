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
        className="border"
        style={{
          border: "none ",
          fontSize: "1.5rem ",
          margin: " 2rem",
          padding: ".5rem 1rem ",
          borderRadius: "50%",
        }}
      >
        <i className="fa-solid fa-microphone" />
      </p>
    </div>
  );
};

export default MicIcon;
