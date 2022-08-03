import React from "react";

const HeaderBarIcon = ({ theme }) => {
  return (
    <>
      <div className={`  ${theme}`} style={{ margin: ".6vw 0" }}>
        <p
          className={`  ${theme}`}
          data-bs-toggle="offcanvas"
          href="#offcanvasExample"
          aria-controls="offcanvasExample"
          style={{
            fontSize: "1.5rem",
            border: "none",
            outline: "none",
          }}
        >
          <i className="fa-solid fa-bars" />
        </p>
      </div>
    </>
  );
};

export default HeaderBarIcon;
